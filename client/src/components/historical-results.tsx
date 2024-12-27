import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type HistoricalResult = {
  url: string
  ttfb: number
  pageSize: number
  loadTime: number
  requests: number
}

const historicalData: HistoricalResult[] = [
  {
    url: "example.com",
    ttfb: 0.22,
    pageSize: 1.8,
    loadTime: 2.5,
    requests: 50,
  },
  {
    url: "another-site.com",
    ttfb: 0.18,
    pageSize: 1.3,
    loadTime: 2.1,
    requests: 42,
  },
  {
    url: "test-website.org",
    ttfb: 0.25,
    pageSize: 2.1,
    loadTime: 2.8,
    requests: 55,
  },
]

export default function HistoricalResults() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Benchmarks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {historicalData.map((result, index) => (
            <li key={index} className="border-b pb-2 last:border-b-0">
              <h4 className="font-semibold text-sm">{result.url}</h4>
              <div className="grid grid-cols-2 gap-x-2 text-xs text-muted-foreground mt-1">
                <div>TTFB: {result.ttfb.toFixed(2)}s</div>
                <div>Size: {result.pageSize.toFixed(1)} MB</div>
                <div>Load: {result.loadTime.toFixed(1)}s</div>
                <div>Requests: {result.requests}</div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

