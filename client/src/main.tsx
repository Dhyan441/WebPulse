import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'next-themes';
import './index.css';
import App from './App.tsx';
import { GlobalProvider } from './context/context.tsx';
import { BenchmarkProvider } from './context/benchmark.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="class">
      <GlobalProvider>
        <BenchmarkProvider>
          <App />
        </BenchmarkProvider>
      </GlobalProvider>
    </ThemeProvider>
  </StrictMode>,
);