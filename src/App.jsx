import React from "react";

import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import MarketPlace from "./components/market/MarketPlace";
import ScrollToTop from "./components/scroll/ScrollToTop";

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Home />
      <MarketPlace />
      <Footer />
    </div>
  );
}
