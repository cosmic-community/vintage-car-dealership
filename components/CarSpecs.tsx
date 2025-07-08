interface CarSpecsProps {
  specs: Record<string, any>;
}

export default function CarSpecs({ specs }: CarSpecsProps) {
  if (!specs || Object.keys(specs).length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="text-xl font-semibold text-vintage-gold mb-4">Specifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(specs).map(([key, value]) => {
          if (!value) return null;
          
          const formattedKey = key
            .replace(/_/g, ' ')
            .replace(/\b\w/g, (l) => l.toUpperCase());
          
          return (
            <div key={key} className="flex justify-between items-center py-2 border-b border-vintage-dark">
              <span className="text-vintage-gold font-medium">{formattedKey}:</span>
              <span className="text-vintage-cream">{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}