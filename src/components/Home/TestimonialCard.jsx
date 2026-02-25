import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Robert Fox",
    role: "Software Engineer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue ridiculus eget donec diam accumsan, metus.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert"
  },
  {
    name: "Brooklyn Simmons",
    role: "Full Stack JavaScript Developer",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc elementum a non rhoncus, phasellus proin ultrices porta vel. Sapien posuere velit consequat urna, id urna.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brooklyn"
  },
  {
    name: "Albert Flores",
    role: "JavaScript Expert",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nisl elementum gravida risus adipiscing felis, lacus adipiscing lectus.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Albert"
  }
];

const TestimonialCard = ({ item }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="flex flex-col p-6 min-h-[320px] bg-white/40 rounded-3xl backdrop-blur-sm border border-white/20 shadow-xl shadow-yellow-900/5"
    >
      <div style={{ transform: "translateZ(40px)" }} className="flex flex-col h-full">
        <Quote size={28} className="text-[#8B7355] mb-3 opacity-60" fill="#8B7355" strokeWidth={0} />
        <p className="text-[#6D5D44] text-base leading-relaxed mb-6 font-medium">
          {item.text}
        </p>
        <div className="flex items-center gap-3 mt-auto">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-[#8B7355]/20"
          />
          <div>
            <h4 className="text-[#6D5D44] font-bold text-sm leading-tight">{item.name}</h4>
            <p className="text-[#BDB19B] text-xs font-semibold">{item.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // For a real slider with many items, you'd calculate offset. 
  // Here we'll treat the 3 cards as one "page" or slide between them on mobile.
  return (
    <section className="bg-[#FCF9F2] py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6D5D44] mb-12">
          They Say About Me.
        </h2>
        
        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <motion.div 
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="flex md:grid md:grid-cols-3 gap-8 md:!transform-none"
          >
            {testimonials.map((t, index) => (
              <div key={index} className="min-w-full md:min-w-0">
                <TestimonialCard item={t} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Working Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveIndex(i)}
              animate={{ 
                width: activeIndex === i ? 48 : 24,
                backgroundColor: activeIndex === i ? "#8B7355" : "#E9E1D2" 
              }}
              className="h-2 rounded-full transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;