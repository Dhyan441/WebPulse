"use client"

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/context";
import config from "../../config";

type PerformanceData = {
  ttfb: number;
  pageSize: number;
  loadTime: number;
  requests: number;
};

export default function ResultsDisplay() {
  const [results, setResults] = useState<PerformanceData | null>(null);
  const [benchmark, setBenchmark] = useState<PerformanceData | null>(null);
  const { url, browser, setUrl, setBrowser } = useGlobalContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data for URL:", url);
        console.log("Using browser:", browser);
        const response = await fetch(`${config.apiBaseUrl}/performanceData?url=${url}&browser=${browser}`);
        console.log(response);
        const temp = await response.json();
        console.log("temp ", temp);
        temp.pageSize = temp.pageSize["renderSize"];
        const data: PerformanceData = temp;
        setResults(data);
      } catch (error) {
        console.error("Error fetching performance data:", error);
      }
    };

    if (url && browser) {
      fetchData();
      setUrl("");
      setBrowser("");
    }
  }, [url, browser, setUrl, setBrowser]);

  if (!results) {
    return <div>Loading...</div>;
  }
  const toggleBenchmark = () => {
    setBenchmark(benchmark ? null : results);
  };

  const formatValue = (value: number) => {
    const valueStr = value.toString();
    const decimalIndex = valueStr.indexOf('.');
    if (decimalIndex === -1) {
      return valueStr;
    }
    const decimals = valueStr.length - decimalIndex - 1;
    return decimals > 3 ? value.toFixed(2) : valueStr;
  };

  const ResultCard = ({ title, value, unit, benchmarkValue }: { title: string; value: number; unit: string; benchmarkValue?: number }) => (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{formatValue(value)} {unit}</div>
        {benchmarkValue && (
          <div className="text-sm text-muted-foreground mt-2">
            Benchmarked: {formatValue(benchmarkValue)} {unit}
          </div>
        )}
      </CardContent>
    </Card>
  );

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
  );
}