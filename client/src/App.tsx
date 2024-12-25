import './App.css'
import Header from "@/components/header"
import WebPulseForm from "@/components/web-pulse-form"
import ResultsDisplay from "@/components/results-display"
import HistoricalResults from "@/components/historical-results"



function App() {

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2 text-center">PulseCheck</h1>
        <h2 className="text-2xl mb-8 text-center">Website Performance Analysis</h2>
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-3 space-y-8">
            <WebPulseForm />
            <ResultsDisplay />
          </div>
          <div className="lg:col-span-1">
            <HistoricalResults />
          </div>
        </div>
      </main>
      <footer className="bg-muted py-4 text-center text-sm">
        © 2024 WebPulse.
      </footer>
    </div>
  )
}

export default App
