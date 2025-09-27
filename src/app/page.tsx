import { Metadata } from 'next'
// Import existing components that we'll modernize later
// For now, we'll create a simple homepage structure

export const metadata: Metadata = {
  title: 'Home',
  description: 'Latest news and updates from HaberiBul',
}

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center font-playfair">
          Welcome to HaberiBul
        </h1>
        <p className="text-xl text-muted-foreground text-center mt-4">
          Your source for the latest news and updates
        </p>
      </header>

      <main>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Breaking News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder news cards - we'll integrate real data later */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item}
                className="bg-card rounded-lg p-6 shadow-sm border"
              >
                <div className="h-48 bg-muted rounded-md mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">
                  News Article Title {item}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  This is a placeholder for news article content. Real content will be integrated during the component modernization phase.
                </p>
                <div className="text-xs text-muted-foreground">
                  {new Date().toLocaleDateString('tr-TR')}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}