import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBenchmarkContext } from "@/context/benchmark";

export default function HistoricalResults() {
  const { benchmarks } = useBenchmarkContext();
  const latestBenchmarks = benchmarks.slice(-4).reverse();

  const formatDate = (date: Date) => {
    return date.toLocaleString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Benchmarks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-6">
          {latestBenchmarks.map((benchmark, index) => (
            <li key={index} className="border-b pb-4 last:border-b-0">
              <h4 className="font-semibold text-sm mb-1">{benchmark.url}</h4>
              <div className="text-xs text-muted-foreground space-y-1 mb-2">
                <p>{formatDate(benchmark.timestamp)}</p>
                <p>Browser: {benchmark.browser}</p>
              </div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs">
                <div>TTFB: {benchmark.data.ttfb.toFixed(2)}s</div>
                <div>Size: {benchmark.data.pageSize.toFixed(1)} MB</div>
                <div>Load: {benchmark.data.loadTime.toFixed(1)}s</div>
                <div>Requests: {benchmark.data.requests}</div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

