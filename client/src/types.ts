export type PerformanceData = {
    ttfb: number;
    pageSize: number;
    loadTime: number;
    requests: number;
  };
  
  export type BenchmarkData = {
    timestamp: Date;
    url: string;
    browser: string;
    data: PerformanceData;
  };