"use client";

import React from "react";
import { motion } from "framer-motion";
import { Settings, Shield, BarChart3, Map } from "lucide-react";
import { SolutionProps } from "../types";

const solutions: SolutionProps[] = [
  {
    title: "Explore Transport Partners",
    description:
      "See verified providers ready for your corporate mobility needs.",
    icon: Settings,
    delay: 0.1,
  },
  {
    title: "Get Started",
    description:
      "Start connecting your business to professional transport providers",
    icon: Shield,
    delay: 0.2,
  },
  {
    title: "Request a Demo",
    description: "See how Black Horse works for your company",
    icon: BarChart3,
    delay: 0.3,
  },
  {
    title: "Learn About Pricing",
    description: "Understand transparent costs and billing",
    icon: Map,
    delay: 0.5,
  },
];

const EnterpriseSolutions: React.FC = () => {
  return (
    <section id="business" className="py-32 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 border-b border-white/10 pb-10 flex flex-col md:flex-row justify-between items-end">
          <div className="space-y-4">
            <span className="text-cyan-300 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
              For Business
            </span>
            <h2 className="text-3xl md:text-4xl font-display text-white max-w-2xl nano">
              Control Employee Mobility, Billing, and Reporting From One
              Platform
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl">
              Get safe, reliable corporate transport, manage billing, reporting
              and schedules from one platform.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:block text-xs font-bold uppercase tracking-widest text-white hover:text-cyan-300 transition-colors mt-6 md:mt-0"
          >
            Use Blackhorse For Business &rarr;
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: solution.delay, duration: 0.5 }}
                className="bg-obsidian p-10 hover:bg-surface transition-colors duration-500 group"
              >
                <Icon
                  className="w-6 h-6 text-gray-500 group-hover:text-cyan-300 mb-6 transition-colors duration-300"
                  strokeWidth={1}
                />
                <h4 className="text-lg font-display text-white mb-3">
                  {solution.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSolutions;
