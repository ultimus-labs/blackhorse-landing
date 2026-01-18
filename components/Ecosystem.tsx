"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { FeatureCardProps } from '../types';

const features: FeatureCardProps[] = [
    {
        title: "Passenger",
        description: "Seamless booking for high-profile travelers.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop",
        delay: 0.1
    },
    {
        title: "Chauffeur",
        description: "Tools for our elite driver network.",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1470&auto=format&fit=crop",
        delay: 0.2
    },
    {
        title: "Fleet",
        description: "Logistics management at scale.",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1530&auto=format&fit=crop",
        delay: 0.3
    },
    {
        title: "Enterprise",
        description: "Corporate controls and analytics.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop",
        delay: 0.4
    }
];

const Ecosystem: React.FC = () => {
    return (
        <section id="fleet" className="py-32 bg-obsidian relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-xl">
                        <span className="text-champagne text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
                            The Ecosystem
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-medium text-white">
                            Integrated Mobility <br />Infrastructure
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm max-w-sm leading-relaxed border-l border-white/10 pl-6">
                        One platform connecting passengers, chauffeurs, and enterprise managers in real-time.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: feature.delay, duration: 0.6 }}
                            className="group relative h-[400px] rounded-lg overflow-hidden cursor-pointer"
                        >
                            {/* Background Image */}
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                <div className="w-8 h-px bg-champagne mb-4 opacity-50 group-hover:w-16 group-hover:opacity-100 transition-all duration-300"></div>
                                <h3 className="text-2xl font-display text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                    {feature.description}
                                </p>
                                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowUpRight className="text-white w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;