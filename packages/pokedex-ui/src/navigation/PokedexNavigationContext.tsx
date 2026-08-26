import { createContext, useContext } from "react";

export interface PokedexNavigation {
  navigateToHome: () => void;
  navigateToDetail: (id: number) => void;
  goBack: () => void;
}

const PokedexNavigationContext = createContext<PokedexNavigation | null>(null);

export function usePokedexNavigation(): PokedexNavigation {
  const ctx = useContext(PokedexNavigationContext);
  if (!ctx) {
    throw new Error("usePokedexNavigation must be used within a PokedexNavigationProvider");
  }
  return ctx;
}

export { PokedexNavigationContext };
