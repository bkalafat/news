export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-pulse">
        {/* Header skeleton */}
        <div className="text-center mb-8">
          <div className="h-10 bg-muted rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-6 bg-muted rounded w-1/2 mx-auto"></div>
        </div>

        {/* Content skeleton */}
        <div className="mb-6">
          <div className="h-8 bg-muted rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="h-48 bg-muted rounded-md mb-4"></div>
                <div className="h-6 bg-muted rounded mb-2"></div>
                <div className="h-4 bg-muted rounded mb-2"></div>
                <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-muted rounded w-1/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}