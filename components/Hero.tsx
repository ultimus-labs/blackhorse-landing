"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Minimalist Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/20 to-obsidian z-20"></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image
            src="https://images.unsplash.com/photo-1764090317623-06968349ad23?q=80&w=2670&auto=format&fit=crop"
            alt="Luxury Executive Ride"
            fill
            priority
            className="object-cover opacity-60 grayscale-[30%]"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-5xl mx-auto px-6 flex flex-col items-center text-center ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 mb-6 border border-cyan-300/30 px-4 py-2 rounded-full backdrop-blur-md bg-black/20">
            Executive Chauffeur Services
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-56l font-display font-medium text-white leading-[1.05] tracking-tight mb-8 nano">
            Find On-Demand, Business-Grade Vehicles for Corporate Errands
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg  text-gray-100 mb-12 leading-relaxed max-w-2xl font-light"
        >
          Our platform aggregates corporate fleet demand and supply all in one
          place, making it easy for teams to move around in real time and at
          less cost.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <button
            onClick={() =>
              window.open(
                "https://divinettettey.typeform.com/to/VIH88iPh",
                "_blank",
              )
            }
            className="min-w-[180px] px-8 py-4 text-xs rounded-sm font-bold uppercase tracking-widest text-center bg-cyan-300 text-black border border-cyan-300 hover:bg-transparent hover:text-cyan-300 transition-all duration-300"
          >
            Businesses
          </button>
          <button
            onClick={() =>
              window.open(
                "https://divinettettey.typeform.com/to/VIH88iPh",
                "_blank",
              )
            }
            className="min-w-[180px] px-8 py-4 text-xs rounded-sm font-bold uppercase tracking-widest text-center bg-transparent text-cyan-300 border border-cyan-300 hover:bg-cyan-300 hover:text-black transition-all duration-300"
          >
            Transport Businesses
          </button>
        </motion.div>
      </div>

      {/* Scroll Line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 60 }}
        transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent z-30 opacity-30"
      ></motion.div>
    </section>
  );
};

export default Hero;
