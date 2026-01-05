import React from "react";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
  FaTwitter,
  FaShieldAlt,
} from "react-icons/fa"; // Requires: npm install react-icons

const WHATSAPP_LINK = "https://wa.me/message/7D6Z6X5765URN1";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020202] border-t border-yellow-500/20 pt-16 pb-8 font-rajdhani overflow-hidden">
      {/* --- Background Decorative Glow --- */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* 1. Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="public\don.jpeg"
                alt="Don-3xchange Logo"
                className="h-10 w-auto rounded border border-yellow-500/30"
              />
              <span className="font-orbitron font-bold text-xl text-yellow-500 tracking-wider">
                Don-3xchange
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The premier platform for secure, anonymous, and instant digital
              asset exchanges. We bridge the gap between Crypto and Fiat.
            </p>
            <div className="flex items-center gap-2 text-yellow-500/80 text-sm">
              <FaShieldAlt />
              <span>256-bit SSL Secured</span>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="font-orbitron font-bold text-white text-lg mb-6">
              Market
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#services"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Buy Bitcoin
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Sell USDT
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-yellow-400 transition-colors"
                >
                  CashApp Trades
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-yellow-400 transition-colors"
                >
                  PayPal Exchange
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Support Links */}
          <div>
            <h4 className="font-orbitron font-bold text-white text-lg mb-6">
              Support
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  className="hover:text-yellow-400 transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  className="hover:text-yellow-400 transition-colors"
                >
                  Contact Agent
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Connect / Socials */}
          <div>
            <h4 className="font-orbitron font-bold text-white text-lg mb-6">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-yellow-500/20 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black hover:scale-110 transition-all duration-300"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-yellow-500/20 flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 hover:scale-110 transition-all duration-300"
              >
                <FaTelegramPlane size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-yellow-500/20 flex items-center justify-center text-white hover:bg-pink-600 hover:border-pink-600 hover:scale-110 transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-yellow-500/20 flex items-center justify-center text-white hover:bg-sky-500 hover:border-sky-500 hover:scale-110 transition-all duration-300"
              >
                <FaTwitter size={20} />
              </a>
            </div>
            <div className="mt-6">
              <a
                href={WHATSAPP_LINK}
                className="inline-block w-full text-center py-3 rounded-lg bg-white/5 border border-yellow-500/30 text-yellow-400 font-bold hover:bg-yellow-500 hover:text-black transition-all"
              >
                Start Chat
              </a>
            </div>
          </div>
        </div>

        {/* --- Copyright Bar --- */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Don-3xchange. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs font-orbitron tracking-widest uppercase">
            Designed for the Future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
