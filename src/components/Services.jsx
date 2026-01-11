// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa";
// import { ServiceData } from "../constant/data";

// const WHATSAPP_LINK = "https://wa.me/message/7D6Z6X5765URN1";

// // --- Individual Card Component ---
// const ServiceCard = ({ data, onHoverStart, onHoverEnd }) => {
//   const Icon = data.icon;

//   return (
//     <motion.a
//       href={WHATSAPP_LINK}
//       target="_blank"
//       rel="noopener noreferrer"
//       onHoverStart={onHoverStart}
//       onHoverEnd={onHoverEnd}
//       whileHover={{
//         scale: 1.02,
//         y: -8,
//         transition: { type: "spring", stiffness: 300, damping: 20 },
//       }}
//       whileTap={{ scale: 0.98 }}
//       className="group relative block shrink-0 w-75 sm:w-85 md:w-95 h-76 sm:h-80"
//     >
//       {/* Card Glow Effect */}
//       <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

//       {/* Card Body */}
//       <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-white/5 border border-yellow-500/10 backdrop-blur-md transition-all duration-300 hover:border-yellow-500/40 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] flex flex-col">
//         {/* Icon Circle */}
//         <motion.div
//           className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 bg-black/50 border border-white/10 ${data.bgGlow}`}
//           whileHover={{
//             rotate: 360,
//             scale: 1.1,
//             transition: { duration: 0.6 },
//           }}
//         >
//           <Icon className={`text-3xl sm:text-4xl ${data.color}`} />
//         </motion.div>

//         {/* Text Content */}
//         <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-white mb-2 sm:mb-3 group-hover:text-yellow-400 transition-colors">
//           {data.title}
//         </h3>
//         <p className="text-gray-400 font-rajdhani text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 grow line-clamp-3">
//           {data.desc}
//         </p>

//         {/* Call to Action Footer */}
//         <div className="flex items-center text-yellow-500 font-bold font-orbitron text-xs sm:text-sm tracking-widest uppercase mt-auto">
//           <span className="relative overflow-hidden">
//             TRADE NOW
//             <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
//           </span>
//           <motion.div
//             animate={{ x: [0, 5, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//           >
//             <FaArrowRight className="ml-2" />
//           </motion.div>
//         </div>

//         {/* Corner Accent */}
//         <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-tr-2xl pointer-events-none">
//           <div className="absolute top-0 right-0 w-full h-full bg-linear-to-bl from-yellow-500/20 to-transparent" />
//         </div>
//       </div>
//     </motion.a>
//   );
// };

// // --- Marquee Component ---
// const Marquee = ({ direction = "left", speed = 40 }) => {
//   const [isPaused, setIsPaused] = useState(false);

//   // Duplicate data for seamless loop
//   const items = [...ServiceData, ...ServiceData];

//   return (
//     <div
//       className="relative overflow-hidden py-4"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       {/* Gradient Fade Masks */}
//       <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-40 bg-linear-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
//       <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-40 bg-linear-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

//       {/* Marquee Track */}
//       <div
//         className={`flex gap-6 sm:gap-8 w-fit ${
//           isPaused
//             ? "[animation-play-state:paused]"
//             : "[animation-play-state:running]"
//         }`}
//         style={{
//           animation: `${
//             direction === "left" ? "scroll-left" : "scroll-right"
//           } ${speed}s linear infinite`,
//         }}
//       >
//         {items.map((service, index) => (
//           <ServiceCard
//             key={`${service.id}-${index}`}
//             data={service}
//             onHoverStart={() => setIsPaused(true)}
//             onHoverEnd={() => setIsPaused(false)}
//           />
//         ))}
//       </div>

//       {/* CSS Keyframes */}
//       <style>{`
//         @keyframes scroll-left {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         @keyframes scroll-right {
//           0% {
//             transform: translateX(-50%);
//           }
//           100% {
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// // --- Main Section Component ---
// const Services = () => {
//   return (
//     <section
//       id="services"
//       className="relative py-16 sm:py-20 md:py-24 bg-[#050505] overflow-hidden"
//     >
//       {/* Background Effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-yellow-500/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-yellow-600/5 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-12 sm:mb-16 px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="font-orbitron text-2xl sm:text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-yellow-200 via-yellow-500 to-yellow-700 mb-4"
//           >
//             WHAT WE DO
//           </motion.h2>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="h-1 w-20 sm:w-24 bg-yellow-600 mx-auto rounded-full shadow-[0_0_15px_rgba(255,215,0,0.6)] origin-center"
//           />
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg font-rajdhani max-w-2xl mx-auto"
//           >
//             Discover our premium trading services designed for your success
//           </motion.p>
//         </div>

//         {/* Marquee Row 1 - Scrolls Left */}
//         <div className="mb-4 sm:mb-6">
//           <Marquee direction="left" speed={45} />
//         </div>

//         {/* Marquee Row 2 - Scrolls Right */}
//         <div>
//           <Marquee direction="right" speed={50} />
//         </div>

//         {/* CTA Button */}
//         <motion.div
//           className="text-center mt-12 sm:mt-16 px-4"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <motion.a
//             href={WHATSAPP_LINK}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-yellow-500 to-yellow-600 text-black font-orbitron font-bold text-sm sm:text-lg rounded-full"
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 0 40px rgba(255, 215, 0, 0.5)",
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span>GET STARTED TODAY</span>
//             <FaArrowRight />
//           </motion.a>
//         </motion.div>
//       </div>

//       {/* Top & Bottom Lines */}
//       <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-yellow-500/30 to-transparent" />
//       <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-yellow-500/30 to-transparent" />
//     </section>
//   );
// };

// export default Services;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { ServiceData } from "../constant/data";

const WHATSAPP_LINK = "https://wa.me/message/7D6Z6X5765URN1";

// --- Individual Card Component ---
const ServiceCard = ({ data, onHoverStart, onHoverEnd }) => {
  const Icon = data.icon;

  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{
        scale: 1.02,
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative blockshrink-0 w-75 sm:w-85 md:w-75 h-75 sm:h-80"
    >
      {/* Card Body */}
      <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-white/5 border border-yellow-500/10 backdrop-blur-md transition-all duration-300 hover:border-yellow-500/40 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] flex flex-col">
        {/* Icon Circle */}
        <div
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 bg-black/50 border border-white/10 ${data.bgGlow}`}
        >
          <Icon className={`text-3xl sm:text-4xl ${data.color}`} />
        </div>

        {/* Text Content */}
        <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-white mb-2 sm:mb-3 group-hover:text-yellow-400 transition-colors">
          {data.title}
        </h3>
        <p className="text-gray-400 font-rajdhani text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 grow line-clamp-3">
          {data.desc}
        </p>

        {/* Call to Action Footer */}
        <div className="flex items-center text-yellow-500 font-bold font-orbitron text-xs sm:text-sm tracking-widest uppercase mt-auto">
          <span className="relative overflow-hidden">
            TRADE NOW
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
          <FaArrowRight className="ml-2" />
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-tr-2xl pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-linear-to-bl from-yellow-500/20 to-transparent" />
        </div>
      </div>
    </motion.a>
  );
};

// --- Marquee Component ---
const Marquee = ({ direction = "left", speed = 40 }) => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate data for seamless loop
  const items = [...ServiceData, ...ServiceData];

  return (
    <div
      className="relative overflow-hidden py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Marquee Track */}
      <div
        className={`flex gap-6 sm:gap-8 w-fit ${
          isPaused
            ? "[animation-play-state:paused]"
            : "[animation-play-state:running]"
        }`}
        style={{
          animation: `${
            direction === "left" ? "scroll-left" : "scroll-right"
          } ${speed}s linear infinite`,
        }}
      >
        {items.map((service, index) => (
          <ServiceCard
            key={`${service.id}-${index}`}
            data={service}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
          />
        ))}
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

// --- Main Section Component ---
const Services = () => {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 md:py-24 bg-[#050505] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-yellow-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-orbitron text-2xl sm:text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-yellow-200 via-yellow-500 to-yellow-700 mb-4"
          >
            WHAT WE DO
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-20 sm:w-24 bg-yellow-600 mx-auto rounded-full shadow-[0_0_15px_rgba(255,215,0,0.6)] origin-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg font-rajdhani max-w-2xl mx-auto"
          >
            Discover our premium trading services designed for your success
          </motion.p>
        </div>

        {/* Marquee Row 1 - Scrolls Left */}
        <div className="mb-4 sm:mb-6">
          <Marquee direction="left" speed={45} />
        </div>

        {/* Marquee Row 2 - Scrolls Right */}
        <div>
          <Marquee direction="right" speed={50} />
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12 sm:mt-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-yellow-500 to-yellow-600 text-black font-orbitron font-bold text-sm sm:text-lg rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>GET STARTED TODAY</span>
            <FaArrowRight />
          </motion.a>
        </motion.div>
      </div>

      {/* Top & Bottom Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-yellow-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-yellow-500/30 to-transparent" />
    </section>
  );
};

export default Services;