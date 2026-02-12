import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FeaturedWorksPage from "./pages/FeaturedWorksPage";
import ViewingRoomsPage from "./pages/ViewingRoomsPage";
import VaultPage from "./pages/VaultPage";
import StudioPage from "./pages/StudioPage";
import ExhibitionsPage from "./pages/ExhibitionsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/featured-works" element={<FeaturedWorksPage />} />
          <Route path="/viewing-rooms" element={<ViewingRoomsPage />} />
          <Route path="/vault" element={<VaultPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/exhibitions" element={<ExhibitionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
