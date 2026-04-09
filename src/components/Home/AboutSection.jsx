import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutSection = () => {
  // Parallax Setup
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="About" className="min-h-screen bg-[#FFFBF2] py-5 px-8 md:px-24 flex flex-col justify-center font-sans text-[#5D4E2C]">
      
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
            <span className="text-4xl font-serif font-bold">W</span>e are a modern real estate brand committed to redefining how people discover and experience
            exceptional properties. Backed by years of industry expertise, we seamlessly blend design, technology, 
            and trust to deliver distinctive living spaces that inspire.
          </p>

          <p className="hover:text-[#C5A059] transition-colors duration-300 cursor-default">
            Each project we showcase is carefully curated for its quality, prime location, and long-term value. We believe
            a home is more than just a space — it’s a lifestyle, a smart investment, and the foundation for your future.
          </p>

          <p>
            a home is more than just a space — it’s a lifestyle, a smart investment, and the foundation for your future. <span className="underline decoration-[#C5A059] underline-offset-4">By building meaningful and lasting relationships, we ensure that every client’s journey is as remarkable as the property they choose.</span> is at the heart of everything we do.
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