import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Hand, MousePointer2, Mail } from 'lucide-react';

const HeroSection = () => {
    const stars = [
        { top: '12%', left: '20%' },
        { top: '18%', left: '70%' },
        { top: '55%', left: '12%' },
        { top: '75%', left: '82%' },
    ];

    return (
        <div
            id="intro"
            className="relative min-h-screen w-full bg-[#FDFBF3] flex items-center justify-center px-4 md:px-6 overflow-hidden"
        >
            {/* Stars – reduced on mobile */}
            {stars.map((pos, i) => (
                <span
                    key={i}
                    className="absolute text-[#B5A48B] text-[10px] opacity-30 hidden sm:block"
                    style={pos}
                >
                    ✧
                </span>
            ))}

            {/* Social Icons – bottom center on mobile */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 md:bottom-12 flex gap-5 md:flex-col text-[#B5A48B] z-30">
                <motion.a
                    href="https://github.com/shivanshu2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, color: '#8D7B5F' }}
                    className="p-2 bg-white/30 rounded-full backdrop-blur-sm border border-[#B5A48B]/10"
                >
                    <FaGithub size={18} />
                </motion.a>
                <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, color: '#8D7B5F' }}
                    className="p-2 bg-white/30 rounded-full backdrop-blur-sm border border-[#B5A48B]/10"
                >
                    <FaLinkedin size={18} />
                </motion.a>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-12">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <motion.img
                        src="/img/pic-removebg-preview.png"
                        alt="Jatin Singh"
                        className="relative z-10 w-44 sm:w-56 md:w-[400px] lg:w-[450px]"
                        whileHover={{ y: -8, rotate: -1 }}
                    />
                </motion.div>

                {/* Text */}
                <div className="flex-1 max-w-xl text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center md:justify-start gap-2 text-[#8D7B5F] mb-3">
                            <span className="w-6 h-[1px] bg-[#8D7B5F]/50" />
                            <p className="flex items-center gap-2 text-sm md:text-lg">
                                Hi, I’m <Hand size={16} className="animate-pulse" /> Jatin Singh
                            </p>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-[#5C4D38] mb-2">
                            Jatin Singh
                        </h1>

                        <h2 className="text-lg md:text-3xl font-bold text-[#8D7B5F] mb-4">
                            a passionate Web Developer.
                        </h2>

                        <p className="text-[#7A6B54] text-sm md:text-lg leading-relaxed mb-8 mx-auto md:mx-0">
                            I specialize in building modern, responsive, and user-friendly web
                            applications with clean and efficient code.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
                            <motion.a
                                href="/resume.pdf"
                                download
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#8D7B5F] text-white px-8 py-4 rounded-sm font-bold tracking-widest text-xs"
                            >
                                <FaFilePdf /> RESUME
                            </motion.a>

                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => {
                                    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
                                }}
                                className="w-full sm:w-auto flex items-center justify-center gap-3 border border-[#B5A48B]/40 bg-white/40 px-8 py-4 rounded-sm text-[#8D7B5F] font-bold tracking-widest text-xs"
                            >
                                <Mail size={16} /> CONTACT
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-16 md:bottom-4 left-1/2 -translate-x-1/2 opacity-40"
            >
                <MousePointer2 size={18} className="text-[#8D7B5F]" />
            </motion.div>
        </div>
    );
};

export default HeroSection;