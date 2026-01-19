import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Mapping between category IDs and exact sheet names
const categoryToSheetName: Record<string, string> = {
  "telas-frontais": "TELAS E FRONTAIS",
  "sub-placa-conectores": "SUB PLACA, CONECTORES E DOCKS",
  "conectores-soltos": "CONECTORES SOLTOS",
  "ferramentas-colas": "FERRAMENTAS E COLAS",
  "baterias": "BATERIAS",
  "aro-chassi-tampas": "ARO CHASSI, TAMPAS E CARCAÇAS",
  "flex-power-volume": "FLEX POWER E FLEX VOLUME",
  "lentes-vidro-camera": "LENTES E VIDRO DA CÂMERA",
  "botoes-externos-power": "BOTOES EXTERNOS E BOTOES POWER",
  "digitais-biometrias": "DIGITAIS E BIOMETRIAS",
  "cameras": "CÂMERAS",
  "gavetas": "GAVETAS",
  "flex-lcd": "FLEX LCD",
  "campainhas-auriculares": "CAMPAINHAS E AURICULARES",
  "flex-flash": "FLEX FLASH",
};

interface Product {
  id: string;
  modelo: string;
  preco: string;
  categoria: string;
}

async function fetchSheetData(apiKey: string, spreadsheetId: string, sheetName: string): Promise<Product[]> {
  const encodedSheetName = encodeURIComponent(sheetName);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodedSheetName}!A:B?key=${apiKey}`;
  
  console.log(`Fetching data from sheet: ${sheetName}`);
  console.log(`Spreadsheet ID: ${spreadsheetId}`);
  console.log(`API Key (first 10 chars): ${apiKey?.substring(0, 10)}...`);
  
  try {
    const response = await fetch(url);
    const responseText = await response.text();
    
    if (!response.ok) {
      console.error(`Error fetching sheet ${sheetName}: ${response.status} ${response.statusText}`);
      console.error(`Response body: ${responseText}`);
      return [];
    }
    
    const data = JSON.parse(responseText);
    
    if (!data.values || data.values.length === 0) {
      console.log(`No data found in sheet: ${sheetName}`);
      return [];
    }
    
    // Find the category ID from sheet name
    const categoryId = Object.entries(categoryToSheetName)
      .find(([_, name]) => name === sheetName)?.[0] || "";
    
    // Skip header row and map data
    const products: Product[] = [];
    for (let i = 1; i < data.values.length; i++) {
      const row = data.values[i];
      if (row[0] && row[0].toString().trim()) {
        const modelo = row[0].toString().trim();
        // Keep the original price format from the spreadsheet (already in R$)
        const preco = row[1] ? row[1].toString().trim() : "Consulte";
        
        products.push({
          id: `${categoryId}-${i}`,
          modelo,
          preco,
          categoria: categoryId,
        });
      }
    }
    
    console.log(`Found ${products.length} products in sheet: ${sheetName}`);
    return products;
  } catch (error) {
    console.error(`Exception fetching sheet ${sheetName}:`, error);
    return [];
  }
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('GOOGLE_SHEETS_API_KEY');
    const spreadsheetId = Deno.env.get('GOOGLE_SHEETS_SPREADSHEET_ID');

    if (!apiKey || !spreadsheetId) {
      console.error('Missing required environment variables');
      return new Response(
        JSON.stringify({ error: 'Missing configuration' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Starting to fetch products from all sheets...');
    
    // Fetch all sheets in parallel
    const allSheetNames = Object.values(categoryToSheetName);
    const promises = allSheetNames.map(sheetName => 
      fetchSheetData(apiKey, spreadsheetId, sheetName)
    );
    
    const results = await Promise.all(promises);
    const allProducts = results.flat();
    
    console.log(`Total products fetched: ${allProducts.length}`);

    return new Response(
      JSON.stringify({ products: allProducts }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  } catch (error) {
    console.error('Error in get-products function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
