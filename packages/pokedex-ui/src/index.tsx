import { App } from "@/App";
import type { PokedexNavigation } from "@/navigation/PokedexNavigationContext";
import { DetailPage } from "@/pages/DetailPage";
import { HomePage } from "@/pages/HomePage";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function AppRouter() {
  const navigate = useNavigate();

  const navigation: PokedexNavigation = {
    navigateToHome: () => navigate("/"),
    navigateToDetail: (id: number) => navigate(`/pokemon/${id}`),
    goBack: () => navigate(-1),
  };

  return (
    <App navigation={navigation}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<DetailPage />} />
      </Routes>
    </App>
  );
}

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </React.StrictMode>,
  );
}