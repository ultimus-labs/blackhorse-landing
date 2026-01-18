"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ServiceTypes: React.FC = () => {
    return (
        <section id="services" className="py-32 bg-obsidian">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="text-champagne text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Fleet Classes</span>
                    <h2 className="text-3xl md:text-4xl font-display text-white">Select Your Class</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                    {/* Sedan */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group"
                    >
                        <div className="bg-white/5 rounded-sm p-12 h-full border border-white/5 hover:border-champagne/30 transition-colors duration-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-20 text-9xl font-display text-white select-none">01</div>

                            <img
                                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop"
                                alt="Executive Sedan"
                                className="w-full h-48 object-contain mb-10 mix-blend-lighten opacity-90 group-hover:scale-105 transition-transform duration-700"
                            />

                            <h3 className="text-2xl font-display text-white mb-2">Executive Sedan</h3>
                            <p className="text-gray-400 text-sm mb-8">Mercedes-Benz E-Class, BMW 5 Series, or similar</p>

                            <ul className="space-y-4 mb-10">
                                {['Max 3 Passengers', 'Hourly Booking (3hr Min)', 'On-board Wi-Fi', 'Bottled Water'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                        <span className="w-1 h-1 bg-champagne rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="w-full py-4 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                                onClick={() => window.open('https://divinettettey.typeform.com/to/VIH88iPh', '_blank')}
                            >
                                Reserve Sedan
                            </button>
                        </div>
                    </motion.div>

                    {/* SUV */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group"
                    >
                        <div className="bg-white/5 rounded-sm p-12 h-full border border-white/5 hover:border-champagne/30 transition-colors duration-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-20 text-9xl font-display text-white select-none">02</div>

                            <img
                                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2670&auto=format&fit=crop"
                                alt="Business SUV"
                                className="w-full h-48 object-contain mb-10 mix-blend-lighten opacity-90 group-hover:scale-105 transition-transform duration-700"
                            />

                            <h3 className="text-2xl font-display text-white mb-2">Business SUV</h3>
                            <p className="text-gray-400 text-sm mb-8">Cadillac Escalade, Lincoln Navigator, or similar</p>

                            <ul className="space-y-4 mb-10">
                                {['Max 6 Passengers', 'Hourly Booking (3hr Min)', 'On-board Wi-Fi', 'Privacy Tint'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                        <span className="w-1 h-1 bg-champagne rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="w-full py-4 bg-champagne text-black text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all"
                                onClick={() => window.open('https://divinettettey.typeform.com/to/VIH88iPh', '_blank')}
                            >
                                Reserve SUV
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServiceTypes;