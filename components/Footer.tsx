import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-obsidian py-20 border-t border-champagne/20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                <a href="#" className="text-3xl font-display font-bold tracking-tighter text-white mb-8 block">
                    BLACK<span className="text-champagne">HORSE</span>
                </a>

                <div className="flex gap-8 mb-10">
                    <a href="#" className="text-champagne hover:text-white transition-colors flex items-center gap-2 group">
                        <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="text-champagne hover:text-white transition-colors flex items-center gap-2 group">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="group-hover:scale-110 transition-transform">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                        </svg>
                    </a>
                    <a href="#" className="text-champagne hover:text-white transition-colors flex items-center gap-2 group">
                        <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                </div>

                <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em]">
                    © 2026 BLACKHORSE MOBILITY GROUP. ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    );
};

export default Footer;