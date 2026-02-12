import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArtworkPage from "./pages/ArtworkPage";
import ExhibitionsPage from "./pages/ExhibitionsPage";
import BiographyPage from "./pages/BiographyPage";
import BibliographyPage from "./pages/BibliographyPage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artwork" element={<ArtworkPage />} />
          <Route path="/exhibitions" element={<ExhibitionsPage />} />
          <Route path="/biography" element={<BiographyPage />} />
          <Route path="/bibliography" element={<BibliographyPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
