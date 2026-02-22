import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import FeaturedWorksPage from "./pages/FeaturedWorksPage";
import ViewingRoomsPage from "./pages/ViewingRoomsPage";
import VaultPage from "./pages/VaultPage";
import StudioPage from "./pages/StudioPage";
import ExhibitionsPage from "./pages/ExhibitionsPage";
import ContactPage from "./pages/ContactPage";
import CVPage from "./pages/CVPage";
import PrivacyPage from "./pages/PrivacyPage";
import CookiesPage from "./pages/CookiesPage";
import TermsPage from "./pages/TermsPage";
import SubscribedPage from "./pages/SubscribedPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/featured-works" element={<FeaturedWorksPage />} />
          <Route path="/viewing-rooms" element={<ViewingRoomsPage />} />
          <Route path="/vault" element={<VaultPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/exhibitions" element={<ExhibitionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/subscribed" element={<SubscribedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
