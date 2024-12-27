import React, { createContext, useContext, useState } from "react";

type GlobalState = {
  url: string;
  browser: string;
  setUrl: (url: string) => void;
  setBrowser: (browser: string) => void;
};

const GlobalContext = createContext<GlobalState | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [url, setUrl] = useState<string>("");
  const [browser, setBrowser] = useState<string>("");

  return (
    <GlobalContext.Provider value={{ url, browser, setUrl, setBrowser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};