interface ResultsCounterProps {
  count: number;
  categoryName?: string;
}

const ResultsCounter = ({ count, categoryName }: ResultsCounterProps) => {
  return (
    <div className="flex items-center justify-between py-2">
      <p className="text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">{count}</span>{" "}
        {count === 1 ? "produto encontrado" : "produtos encontrados"}
        {categoryName && (
          <span className="text-muted-foreground"> em {categoryName}</span>
        )}
      </p>
    </div>
  );
};

export default ResultsCounter;
