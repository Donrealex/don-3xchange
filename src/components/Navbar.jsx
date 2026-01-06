import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Requires: npm install react-icons

const WHATSAPP_LINK = "https://wa.me/message/7D6Z6X5765URN1";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-yellow-500/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* --- Logo Section --- */}
          <div className="shrink-0 flex items-center gap-3 cursor-pointer">
            <img
              className="h-10 w-auto rounded border border-yellow-500/50 shadow-[0_0_10px_rgba(255,215,0,0.3)]"
              src="/don.jpeg"
              alt="Don-3xchange Logo"
            />
            <span className="font-orbitron font-bold text-xl tracking-wider text-transparent bg-clip-text bg-linear-to-r from-yellow-300 via-yellow-500 to-yellow-700">
              Don-3xchange
            </span>
          </div>

          {/* --- Desktop Menu --- */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 font-rajdhani font-medium text-lg">
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                Services
              </a>

              {/* CTA Button */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-orbitron text-sm font-bold bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,215,0,0.4)]"
              >
                P2P Trading
              </a>
            </div>
          </div>

          {/* --- Mobile Menu Button --- */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-yellow-500 hover:text-white hover:bg-white/10 focus:outline-none transition-all"
            >
              {isOpen ? (
                <HiX className="h-8 w-8" />
              ) : (
                <HiMenuAlt3 className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-yellow-500/20 shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-4 font-rajdhani text-center">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-yellow-400 text-lg"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-yellow-400 text-lg"
            >
              Services
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center font-orbitron font-bold bg-yellow-500 text-black px-4 py-3 rounded-lg mt-4"
            >
              P2P Trading
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
