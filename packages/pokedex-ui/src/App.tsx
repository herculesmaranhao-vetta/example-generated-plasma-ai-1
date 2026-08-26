import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import type { PokedexNavigation } from "@/navigation/PokedexNavigationContext";
import { PokedexNavigationContext } from "@/navigation/PokedexNavigationContext";
import { antdTheme as customTheme } from "@/styles/antdTheme";
import "@/styles/tokens.css";
import { ConfigProvider, theme as antdTheme } from "antd";
import React from "react";
import "./fontawesome";

interface AppProps {
  navigation: PokedexNavigation;
  children: React.ReactNode;
}

const AppContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isDark } = useTheme();
  return (
    <ConfigProvider theme={{ ...customTheme, algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm }}>
      {children}
    </ConfigProvider>
  );
};

export const App: React.FC<AppProps> = ({ navigation, children }) => (
  <ThemeProvider>
    <PokedexNavigationContext.Provider value={navigation}>
      <AppContent>{children}</AppContent>
    </PokedexNavigationContext.Provider>
  </ThemeProvider>
);