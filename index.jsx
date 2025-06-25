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
          </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
