import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Mapping between CSV categories and our category IDs
// The CSV uses category names that should match the app's filter buttons
const categoryMapping: Record<string, string> = {
  // Exact matches (lowercase normalized)
  "telas e frontais": "telas-frontais",
  "tela e frontal": "telas-frontais",
  "sub placa, conectores e docks": "sub-placa-conectores",
  "sub-placa, conectores e docks": "sub-placa-conectores",
  "conectores soltos": "conectores-soltos",
  "conector solto": "conectores-soltos",
  "ferramentas e colas": "ferramentas-colas",
  "ferramenta e cola": "ferramentas-colas",
  "baterias": "baterias",
  "bateria": "baterias",
  "aro chassi, tampas e carcaças": "aro-chassi-tampas",
  "aro chassi, tampas e carcacas": "aro-chassi-tampas",
  "aro, chassi, tampas e carcaças": "aro-chassi-tampas",
  "flex power e flex volume": "flex-power-volume",
  "lentes e vidro da câmera": "lentes-vidro-camera",
  "lentes e vidro da camera": "lentes-vidro-camera",
  "botoes externos e botoes power": "botoes-externos-power",
  "botões externos e botões power": "botoes-externos-power",
  "botoes externos e botao power": "botoes-externos-power",
  "botão externo e botão power": "botoes-externos-power",
  "digitais e biometrias": "digitais-biometrias",
  "digital e biometria": "digitais-biometrias",
  "câmeras": "cameras",
  "cameras": "cameras",
  "câmera": "cameras",
  "camera": "cameras",
  "gavetas": "gavetas",
  "gaveta": "gavetas",
  "flex lcd": "flex-lcd",
  "campainhas e auriculares": "campainhas-auriculares",
  "campainha e auricular": "campainhas-auriculares",
  "flex flash": "flex-flash",
};

interface Product {
  id: string;
  modelo: string;
  preco: string;
  categoria: string;
}

function parseCSV(csvText: string): string[][] {
  const lines = csvText.split('\n');
  const result: string[][] = [];
  
  for (const line of lines) {
    if (line.trim()) {
      // CSV parsing that handles quoted fields
      const cells: string[] = [];
      let current = '';
      let inQuotes = false;
      
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          cells.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }
      cells.push(current.trim());
      result.push(cells);
    }
  }
  
  return result;
}

function normalizeCategoryName(name: string): string {
  return name.toLowerCase().trim();
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Public CSV URL
    const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRgbH5V636CdwX4-5j7IvvwkDPMa_7MtigYxCOb5laRARo-Y2RjSnH8YCZYnKgLC_oSL3NknQY3gyBr/pub?output=csv";

    console.log('Fetching products from public CSV...');
    
    const response = await fetch(csvUrl);
    
    if (!response.ok) {
      console.error(`Error fetching CSV: ${response.status} ${response.statusText}`);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch products' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }
    
    const csvText = await response.text();
    const rows = parseCSV(csvText);
    
    console.log(`Parsed ${rows.length} rows from CSV`);
    
    if (rows.length === 0) {
      return new Response(
        JSON.stringify({ products: [] }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // Get header indices
    const headerRow = rows[0].map(h => h.toLowerCase().trim());
    const categoriaIndex = headerRow.indexOf('categoria');
    const modeloIndex = headerRow.indexOf('modelo');
    const precoIndex = headerRow.indexOf('preco');
    // variacao column removed from spreadsheet
    
    console.log(`Headers: ${headerRow.join(', ')}`);
    console.log(`Indices - categoria: ${categoriaIndex}, modelo: ${modeloIndex}, preco: ${precoIndex}`);
    
    if (modeloIndex === -1) {
      console.error('MODELO column not found');
      return new Response(
        JSON.stringify({ error: 'Invalid CSV format - MODELO column not found' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }
    
    // Process all rows
    const products: Product[] = [];
    const categoryCount: Record<string, number> = {};
    const unmappedCategories: Set<string> = new Set();
    
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const rawCategoria = categoriaIndex !== -1 ? row[categoriaIndex] : '';
      const modelo = row[modeloIndex]?.trim();
      const preco = precoIndex !== -1 && row[precoIndex] ? row[precoIndex].trim() : 'Consulte';
      
      if (!modelo) continue;
      
      // Map the CSV category to our category ID
      const normalizedCat = normalizeCategoryName(rawCategoria);
      const categoriaId = categoryMapping[normalizedCat] || 'outros';
      
      // Track unmapped categories
      if (categoriaId === 'outros' && rawCategoria) {
        unmappedCategories.add(rawCategoria);
      }
      
      // Track category counts for logging
      categoryCount[categoriaId] = (categoryCount[categoriaId] || 0) + 1;
      
      products.push({
        id: `${categoriaId}-${i}`,
        modelo,
        preco,
        categoria: categoriaId,
      });
    }
    
    console.log('Products by category:', JSON.stringify(categoryCount));
    console.log('Unmapped categories:', Array.from(unmappedCategories).join(', '));
    console.log(`Total products fetched: ${products.length}`);

    return new Response(
      JSON.stringify({ products }),
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