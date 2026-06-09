import {
  createContext,
  useContext,
  useState,
} from "react";

type PortfolioContextType = {
  recruiterMode: boolean;
  setRecruiterMode: (
    value: boolean
  ) => void;
};

const PortfolioContext =
  createContext<
    PortfolioContextType | undefined
  >(undefined);

export function PortfolioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [
    recruiterMode,
    setRecruiterMode,
  ] = useState(false);

  return (
    <PortfolioContext.Provider
      value={{
        recruiterMode,
        setRecruiterMode,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context =
    useContext(PortfolioContext);

  if (!context) {
    throw new Error(
      "usePortfolio must be used inside PortfolioProvider"
    );
  }

  return context;
}