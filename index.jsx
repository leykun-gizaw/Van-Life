import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./server";
import VanDetail from "./pages/VanDetail";
import HostLayout from "./components/HostLayout";

import HostDashboard from "./pages/Host/HostDashboard";
import HostIncome from "./pages/Host/HostIncome";
import HostVans from "./pages/Host/HostVans";
import HostReviews from "./pages/Host/HostReviews";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanPricing from "./pages/Host/HostVanDetails/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanDetails/HostVanPhotos";
import HostVanInfo from "./pages/Host/HostVanDetails/HostVanInfo";

function App() {
  return (
    <BrowserRouter>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<HostDashboard />} />
              <Route path="income" element={<HostIncome />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
              <Route path="reviews" element={<HostReviews />} />
            </Route>
          </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
