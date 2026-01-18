import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-midnight-deep py-20 border-t border-royal-gold/20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                <a href="#" className="text-3xl font-display font-bold tracking-tighter text-white mb-8 block">
                    BLACK<span className="text-royal-gold">HORSE</span>
                </a>
                
                <div className="flex gap-8 mb-10">
                    <a href="#" className="text-royal-gold hover:text-white transition-colors flex items-center gap-2 group">
                        <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="text-royal-gold hover:text-white transition-colors flex items-center gap-2 group">
                        <Twitter size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="text-royal-gold hover:text-white transition-colors flex items-center gap-2 group">
                        <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                </div>

                <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em]">
                    © 2024 BLACKHORSE MOBILITY GROUP. ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    );
};

export default Footer;