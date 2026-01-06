import React from "react";
import { motion } from "framer-motion"; 
import { FaWhatsapp, FaArrowRight } from "react-icons/fa"; 

const WHATSAPP_LINK = "https://wa.me/message/7D6Z6X5765URN1";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-16">
      {/* --- Background Ambient Glow Effects --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Gold Glow Top Left */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-yellow-600/20 rounded-full blur-[120px] opacity-60 animate-pulse" />
        {/* Purple/Dark Glow Bottom Right for Contrast */}
        <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-yellow-900/10 rounded-full blur-[100px] opacity-40" />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.03)_1px,transparent_1px)] bg-size[40px_40px] mask-[radial-linear(ellipse_at_center,black,transparent_80%)]"></div>
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/5 backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <span className="text-yellow-200 text-xs font-orbitron tracking-widest uppercase">
              Premium Trading Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6">
            SECURE YOUR <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-yellow-100 via-yellow-400 to-yellow-700 drop-shadow-[0_0_25px_rgba(255,215,0,0.3)]">
              DIGITAL ASSETS
            </span>
          </h1>

          {/* Subtext */}
          <p className="font-rajdhani text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Experience seamless trading with
            <span className="text-yellow-400 font-bold"> Don-3xchange</span>.
            Secure, anonymous, and instant transfers across Crypto, PayPal,
            CashApp, and Zelle.
          </p>
          {/* <p className="font-rajdhani text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            The ultimate gateway for Crypto, CashApp, PayPal, and Wire
            transfers. Fast, anonymous, and secured by industry-leading
            standards.
          </p> */}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Primary CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-linear-to-r from-yellow-600 to-yellow-400 text-black font-bold font-orbitron tracking-wider text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,215,0,0.4)]"
            >
              START TRADING
              <FaWhatsapp className="text-xl group-hover:rotate-20 transition-transform duration-300" />
            </a>

            {/* Secondary CTA */}
            {/* <a
              href="#services"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-yellow-500/30 bg-white/5 backdrop-blur-md text-white font-rajdhani font-bold text-lg hover:bg-white/10 hover:border-yellow-500/60 transition-all duration-300"
            >
              View Market
              <FaArrowRight className="text-yellow-500 group-hover:translate-x-1 transition-transform" />
            </a> */}
          </div>
        </motion.div>
      </div>

      {/* --- Scroll Indicator --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-yellow-500/50 text-xs font-orbitron tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-linear-to-b from-yellow-500/0 via-yellow-500/50 to-yellow-500/0"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
