import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";

// // --- Constants ---
// const WHATSAPP_LINK = "https://wa.me/message/7D6Z6X5765URN1";

// const BRAND_COLORS = {
//   gold: "text-yellow-400",
//   goldBg: "bg-yellow-500",
//   goldBorder: "border-yellow-500/30",
// };

// // --- Reusable Components ---

// const GlassContainer = ({ children, className = "" }) => (
//   <div
//     className={`backdrop-blur-xl bg-black/40 border ${BRAND_COLORS.goldBorder} ${className}`}
//   >
//     {children}
//   </div>
// );

// const GoldButton = ({ text, icon: Icon }) => (
//   <a
//     href={WHATSAPP_LINK}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-linear-to-r from-yellow-600 to-yellow-400 text-black font-bold font-orbitron tracking-wider hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
//   >
//     {text}
//     {Icon && (
//       <Icon className="text-lg group-hover:rotate-12 transition-transform" />
//     )}
//   </a>
// );


export default function App() {
  

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-yellow-500 selection:text-black font-rajdhani">
      <Navbar />

      <main>
        <Hero />
<Services />
      </main>
      <Footer />
    </div>
  );
}
