import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Hand, MousePointer2, Mail } from 'lucide-react';

const HeroSection = () => {
    const stars = [
        { top: '10%', left: '15%' }, { top: '20%', left: '45%' },
        { top: '15%', left: '75%' }, { top: '40%', left: '10%' },
        { top: '65%', left: '18%' }, { top: '80%', left: '42%' },
        { top: '75%', left: '85%' }, { top: '30%', left: '92%' },
    ];

    return (
        <div id="intro" className="relative min-h-screen w-full bg-[#FDFBF3] flex items-center justify-center p-6 overflow-hidden selection:bg-[#8D7B5F] selection:text-white">

            {/* Decorative Background Stars - Hidden on very small screens to reduce clutter */}
            {stars.map((pos, i) => (
                <span key={i} className="absolute text-[#B5A48B] text-[10px] opacity-40 hidden sm:block" style={pos}>✧</span>
            ))}

            {/* Social Sidebar - Moved to bottom on mobile or kept as is if you prefer the floating look */}
            <div className="absolute left-4 md:left-12 bottom-12 flex flex-col gap-6 text-[#B5A48B] z-30">
                <motion.a
                    href="https://github.com/shivanshu2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, color: '#8D7B5F' }}
                    className="transition-colors p-2 bg-white/20 rounded-full backdrop-blur-sm border border-[#B5A48B]/10 shadow-sm"
                >
                    <FaGithub size={20} />
                </motion.a>
                <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, color: '#8D7B5F' }}
                    className="transition-colors p-2 bg-white/20 rounded-full backdrop-blur-sm border border-[#B5A48B]/10 shadow-sm"
                >
                    <FaLinkedin size={20} />
                </motion.a>
            </div>

            {/* Main Content: Changed flex-col (mobile) to flex-row (desktop) */}
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-12 mt-10 md:mt-0">

                {/* Profile Illustration Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative group order-1 md:order-none"
                >
                    {/* Responsive Glow Size */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] md:w-[120%] md:h-[120%] bg-[#E9DCC0] rounded-full blur-[60px] md:blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-700" />

                    <motion.img
                        src="./public/img/pic-removebg-preview.png"
                        alt="jatin singh"
                        className="relative z-10 w-48 sm:w-64 md:w-[400px] lg:w-[450px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                        whileHover={{ y: -10, rotate: -1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    />
                </motion.div>

                {/* Text Area */}
                <div className="flex-1 max-w-2xl z-20 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex items-center justify-center md:justify-start gap-3 text-[#8D7B5F] text-lg md:text-xl font-medium mb-4">
                            <span className="w-6 md:w-10 h-[1px] bg-[#8D7B5F]/50" />
                            <p className="flex items-center gap-2">
                                Hi, I’m <Hand size={18} className="text-[#B5A48B] animate-pulse" /> Jatin Singh,
                            </p>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#5C4D38] leading-tight mb-2 tracking-tight">
                            Jatin singh,
                        </h1>

                        <h2 className="text-xl md:text-3xl font-bold text-[#8D7B5F] mb-6">
                            a passionate Web Developer.
                        </h2>

                        <p className="text-[#7A6B54] text-base md:text-lg leading-relaxed max-w-lg mb-10 font-light mx-auto md:mx-0">
                            I specialize in building modern, responsive, and user-friendly web applications. 
                            I enjoy understanding how things work behind the scenes to solve problems efficiently.
                        </p>

                        {/* Buttons with Icons - Centered on mobile */}
                        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-4">
                            <motion.a
                                href="./public/resume.pdf"
                                download
                                whileHover={{ scale: 1.02, backgroundColor: '#7A6B54' }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#8D7B5F] text-white px-8 py-4 rounded-sm shadow-xl font-bold tracking-widest text-xs"
                            >
                                <FaFilePdf className="text-base" /> RESUME
                            </motion.a>

                            <motion.button
                                whileHover={{ scale: 1.02, borderColor: '#8D7B5F', color: '#8D7B5F' }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-white bg-white/40 backdrop-blur-sm text-[#B5A48B] px-8 py-4 rounded-sm font-bold tracking-widest text-xs transition-colors"
                            >
                                <Mail size={16} /> CONTACT ME
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Language Switcher - Hidden or adjusted for mobile */}
            <div className="absolute top-6 right-6 md:top-auto md:bottom-10 md:right-10 flex flex-row md:flex-col border border-[#B5A48B]/30 overflow-hidden rounded-sm z-30">
                <button className="bg-[#8D7B5F] text-white px-3 py-1 text-[10px] font-black tracking-tighter">EN</button>
                <button className="text-[#B5A48B] px-3 py-1 text-[10px] font-black tracking-tighter hover:bg-[#E9DCC0] bg-white md:bg-transparent transition-colors">FR</button>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
            >
                <MousePointer2 size={18} className="text-[#8D7B5F]" />
                <div className="w-[1px] h-6 md:h-8 bg-gradient-to-b from-[#8D7B5F] to-transparent" />
            </motion.div>
        </div>
    );
};

export default HeroSection;