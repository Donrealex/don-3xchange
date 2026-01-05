import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-yellow-500 selection:text-black font-rajdhani">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
