"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Waitlist: React.FC = () => {
    return (
        <section className="py-32 bg-surface relative overflow-hidden flex items-center justify-center">
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-champagne/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <span className="text-champagne text-[10px] font-bold uppercase tracking-[0.4em] block mb-6">Expansion</span>
                    <h2 className="text-4xl md:text-6xl font-display text-white mb-2">
                        Coming Soon to <span className="text-gradient-gold italic">Accra</span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 font-light text-lg mb-10"
                >
                    Secure your position on the priority access list for our inaugural launch in Ghana.
                </motion.p>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto border-b border-white/20 focus-within:border-champagne transition-colors"
                    onSubmit={(e) => {
                        e.preventDefault();
                        window.open('https://divinettettey.typeform.com/to/VIH88iPh', '_blank');
                    }}
                >
                    <input
                        type="email"
                        placeholder="Business Email Address"
                        className="flex-grow bg-transparent border-none px-4 py-4 text-white placeholder-gray-600 focus:ring-0 text-sm focus:outline-none"
                    />
                    <button type="submit" className="text-champagne text-[10px] font-bold uppercase tracking-widest px-6 py-4 hover:text-white transition-colors">
                        Join List
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Waitlist;