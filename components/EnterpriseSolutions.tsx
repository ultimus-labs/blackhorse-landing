"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Shield, BarChart3, Map } from 'lucide-react';
import { SolutionProps } from '../types';

const solutions: SolutionProps[] = [
    {
        title: "Global Management",
        description: "Centralized controls for teams across multiple regions.",
        icon: Settings,
        delay: 0.1
    },
    {
        title: "Duty of Care",
        description: "Rigorous safety standards and vetted chauffeur network.",
        icon: Shield,
        delay: 0.2
    },
    {
        title: "Spend Visibility",
        description: "Transparent billing and real-time project coding.",
        icon: BarChart3,
        delay: 0.3
    },
    {
        title: "Events & Roadshows",
        description: "Efficient mobility for consultants and organizers.",
        icon: Map,
        delay: 0.4
    }
];

const EnterpriseSolutions: React.FC = () => {
    return (
        <section id="business" className="py-32 bg-obsidian">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20 border-b border-white/10 pb-10 flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <span className="text-champagne text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">For Business</span>
                        <h2 className="text-3xl md:text-4xl font-display text-white">Enterprise Standards</h2>
                    </div>
                    <a href="#" className="hidden md:block text-xs font-bold uppercase tracking-widest text-white hover:text-champagne transition-colors mt-6 md:mt-0">
                        View Case Studies &rarr;
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
                                <Icon className="w-6 h-6 text-gray-500 group-hover:text-champagne mb-6 transition-colors duration-300" strokeWidth={1} />
                                <h4 className="text-lg font-display text-white mb-3">{solution.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{solution.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EnterpriseSolutions;