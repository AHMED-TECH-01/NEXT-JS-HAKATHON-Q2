export default function ProductsLoading() {
  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          {/* Filters skeleton */}
          <div className="space-y-6 animate-pulse">
            <div className="h-8 w-32 bg-muted rounded"></div>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-6 w-full bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-8">
            <div className="h-8 w-40 bg-muted rounded animate-pulse"></div>
            <div className="h-8 w-32 bg-muted rounded animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-square bg-muted rounded-lg mb-4"></div>
                <div className="h-6 w-3/4 bg-muted rounded mb-2"></div>
                <div className="h-4 w-full bg-muted rounded mb-2"></div>
                <div className="h-6 w-1/4 bg-muted rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}