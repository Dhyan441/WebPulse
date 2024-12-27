"use client"

import { useState, useEffect } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type PerformanceData = {
  ttfb: number
  pageSize: number
  loadTime: number
  requests: number
}

// const sampleData: PerformanceData = {
//   ttfb: 0.20,
//   pageSize: 1.50,
//   loadTime: 2.30,
//   requests: 45,
// }

// const benchmarkData: PerformanceData = {
//   ttfb: 0.15,
//   pageSize: 1.2,
//   loadTime: 1.8,
//   requests: 40,

// }



export default function ResultsDisplay() {
  const [results, setResults] = useState<PerformanceData | null>(null)
  const [benchmark, setBenchmark] = useState<PerformanceData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/performanceData/")
        const data: PerformanceData = await response.json()
        setResults(data)
      } catch (error) {
        console.error("Error fetching performance data:", error)
      }
    }

    fetchData()
  }, [])

  if (!results) {
    return <div>Loading...</div>
  }

  const toggleBenchmark = () => {
    setBenchmark(benchmark ? null : results)
  }

  const ResultCard = ({ title, value, unit, benchmarkValue }: { title: string; value: number; unit: string; benchmarkValue?: number }) => (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value} {unit}</div>
        {benchmarkValue && (
          <div className="text-sm text-muted-foreground mt-2">
            Benchmarked: {benchmarkValue} {unit}
          </div>
        )}
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Analysis Results</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ResultCard title="Time to First Byte" value={results.ttfb} unit="s" benchmarkValue={benchmark?.ttfb} />
        <ResultCard title="Page Size" value={results.pageSize} unit="MB" benchmarkValue={benchmark?.pageSize} />
        <ResultCard title="Load Time" value={results.loadTime} unit="s" benchmarkValue={benchmark?.loadTime} />
        <ResultCard title="Requests" value={results.requests} unit="" benchmarkValue={benchmark?.requests} />
      </div>
      <div className="flex justify-center">
        <Button onClick={toggleBenchmark} size="lg">
          {benchmark ? "Remove Benchmark" : "Add Benchmark"}
        </Button>
      </div>
    </div>
  )
}

