import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutSection = () => {
  // Parallax Setup
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="min-h-screen bg-[#FFFBF2] py-20 px-8 md:px-24 flex flex-col justify-center font-sans text-[#5D4E2C]">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-xl font-bold border-t-2 border-[#C5A059] pt-2 inline-block">
          A Little About Us.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        
        {/* Main Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-8 text-lg leading-relaxed max-w-2xl"
        >
          <p>
            <span className="text-4xl font-serif font-bold">W</span>e are a modern real estate brand dedicated to redefining the way people discover and experience properties. With years of industry insight, we combine design, technology, and trust to deliver exceptional living spaces.
          </p>

          <p className="hover:text-[#C5A059] transition-colors duration-300 cursor-default">
            Every project we present is carefully selected for quality, location, and long-term value. We believe a home is more than just a place — it's a lifestyle, an investment, and a future.
          </p>

          <p>
            Our mission is simple: provide transparency, elegance, and innovation in every interaction. <span className="underline decoration-[#C5A059] underline-offset-4">Building lasting relationships with our clients</span> is at the heart of everything we do.
          </p>
        </motion.div>

        {/* Quote Section with Parallax */}
        <motion.div 
          style={{ y: yParallax }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative p-12 border border-[#5D4E2C] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] hover:scale-105 transition-transform duration-500 ease-in-out">
            <div className="absolute -top-6 -left-2 text-6xl text-[#C5A059] opacity-80">
              “
            </div>
            
            <div className="text-center italic">
              <p className="text-lg mb-4">We don’t just sell properties, we create experiences.</p>
              <p className="font-bold text-[#C5A059]">- Our Philosophy</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;