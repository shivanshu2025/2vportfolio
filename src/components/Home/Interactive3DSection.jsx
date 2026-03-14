import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const Interactive3DSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 150,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 150,
    damping: 20
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-[#FDFBF3] via-[#F5EFE0] to-[#FDFBF3] py-24 px-6 overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4b46a]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C5A059]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="w-16 h-1 bg-[#d4b46a] mx-auto mb-6 rounded-full" />
            <h2 className="text-4xl md:text-6xl font-bold text-[#6D5D44] mb-4">
              Interactive Experience
            </h2>
            <p className="text-[#8B7355] text-lg max-w-2xl mx-auto">
              Hover and explore the 3D interactive elements below
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          {[
            { title: "Design", icon: "🎨", color: "#d4b46a" },
            { title: "Develop", icon: "💻", color: "#C5A059" },
            { title: "Deploy", icon: "🚀", color: "#B5A48B" }
          ].map((item, index) => (
            <motion.div
              key={index}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }}
              whileHover={{ scale: 1.05, z: 50 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-[#F5EFE0] rounded-3xl transform translate-y-2 group-hover:translate-y-4 transition-transform duration-300"
                   style={{ filter: 'blur(20px)', opacity: 0.5 }} />

              <motion.div
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-[#d4b46a]/20 shadow-xl"
                style={{
                  transform: "translateZ(50px)",
                  transformStyle: "preserve-3d"
                }}
              >
                <motion.div
                  style={{ transform: "translateZ(75px)" }}
                  className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300"
                >
                  {item.icon}
                </motion.div>

                <motion.h3
                  style={{ transform: "translateZ(50px)" }}
                  className="text-2xl font-bold text-[#6D5D44] mb-4"
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  style={{ transform: "translateZ(25px)" }}
                  className="text-[#8B7355] leading-relaxed"
                >
                  Creating exceptional experiences through modern technology and creative innovation.
                </motion.p>

                <motion.div
                  style={{
                    transform: "translateZ(100px)",
                    backgroundColor: item.color
                  }}
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotateZ: 5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-[#d4b46a] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-r from-[#d4b46a] to-[#C5A059] text-white px-12 py-5 rounded-full font-bold text-sm tracking-widest uppercase">
                Explore More
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute top-1/4 left-10 w-4 h-4 bg-[#d4b46a]/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-[#C5A059]/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-[#B5A48B]/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-[#d4b46a]/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      ` }} />
    </section>
  );
};

export default Interactive3DSection;
