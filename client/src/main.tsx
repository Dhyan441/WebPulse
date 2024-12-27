import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'next-themes';
import './index.css';
import App from './App.tsx';
import { GlobalProvider } from './context';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="class">
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </ThemeProvider>
  </StrictMode>,
);