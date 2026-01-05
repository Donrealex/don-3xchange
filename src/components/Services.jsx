import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight,} from "react-icons/fa";
import { ServiceData } from "../constant/data";

const WHATSAPP_LINK = "https://wa.me/message/7D6Z6X5765URN1";

// --- Individual Card Component ---
const ServiceCard = ({ data, index }) => {
  const Icon = data.icon;

  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative block h-full"
    >
      {/* Card Body */}
      <div className="h-full p-8 rounded-2xl bg-white/5 border border-yellow-500/10 backdrop-blur-md transition-all duration-300 hover:border-yellow-500/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,215,0,0.1)]">
        {/* Icon Circle */}
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-black/50 border border-white/10 transition-colors duration-300 ${data.bgGlow}`}
        >
          <Icon className={`text-4xl ${data.color}`} />
        </div>

        {/* Text Content */}
        <h3 className="text-2xl font-orbitron font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
          {data.title}
        </h3>
        <p className="text-gray-400 font-rajdhani text-lg leading-relaxed mb-6">
          {data.desc}
        </p>

        {/* Call to Action Footer */}
        <div className="flex items-center text-yellow-500 font-bold font-orbitron text-sm tracking-widest uppercase">
          <span className="relative overflow-hidden">
            TRADE NOW
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
          <FaArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </motion.a>
  );
};

// --- Main Section Component ---
const Services = () => {
  return (
    <section id="services" className="relative py-24 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700 mb-4"
          >
            WE OFFER THESE SERVICES
          </motion.h2>
          <div className="h-1 w-24 bg-yellow-600 mx-auto rounded-full shadow-[0_0_15px_rgba(255,215,0,0.6)]"></div>
          {/* <p className="mt-4 text-gray-400 font-rajdhani text-xl">
            Select a method to start your transaction
          </p> */}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServiceData.map((service, index) => (
            <ServiceCard key={service.id} data={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
