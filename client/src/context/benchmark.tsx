import React, { createContext, useContext, useState } from "react";
import { PerformanceData, BenchmarkData } from "@/types"; // Import the types

type BenchmarkContextType = {
  benchmarks: BenchmarkData[];
  addBenchmark: (url: string, browser:string, data: PerformanceData) => void;
  removeBenchmark: () => void;
};

const BenchmarkContext = createContext<BenchmarkContextType | undefined>(undefined);

export const BenchmarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [benchmarks, setBenchmarks] = useState<BenchmarkData[]>([]);

  const addBenchmark = (url:string, browser:string, data: PerformanceData) => {
    setBenchmarks((prev) => [...prev, { timestamp: new Date(), url, browser, data }]);
  };

  const removeBenchmark = () => {
    setBenchmarks((prev) => prev.slice(0, -1));
  };

  return (
    <BenchmarkContext.Provider value={{ benchmarks, addBenchmark: (url: string, browser:string, data: PerformanceData) => addBenchmark( url, browser, data), removeBenchmark }}>
      {children}
    </BenchmarkContext.Provider>
  );
};

export const useBenchmarkContext = () => {
  const context = useContext(BenchmarkContext);
  if (!context) {
    throw new Error("useBenchmarkContext must be used within a BenchmarkProvider");
  }
  return context;
};