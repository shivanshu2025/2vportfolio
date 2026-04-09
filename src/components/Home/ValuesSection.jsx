import React from 'react';
import { Rocket, ShieldCheck, Layout, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="flex flex-col items-start p-4 transition-all duration-300"
    >
      {/* Icon Container with Hover Effect */}
      <div className="mb-6 p-3 rounded-xl bg-amber-50 text-amber-700 group-hover:bg-amber-100 transition-colors">
        <Icon size={40} strokeWidth={1.5} />
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </motion.div>
  );
};

const ValuesSection = () => {
  const values = [
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing performance is essential. Implementing strategies such as caching and other efficiency measures should be a priority during software development."
    },
    {
      icon: ShieldCheck,
      title: "Security",
      description: "Insecure web applications can give a chance for attackers to get access to a database or to a whole hosting server, so every line of code should be thought through."
    },
    {
      icon: Layout,
      title: "User Experience",
      description: "User experience is key to a successful web application. Before typing code, I sketch out the user interfaces, if necessary, either on white paper or using Figma."
    },
    {
      icon: Code2,
      title: "Code Quality",
      description: "Mastering the programming language, following the best practices and writing tests (TDD) should be enough to ensure the best quality of the code."
    }
  ];

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto bg-[#fdfbf7]">
      {/* Header */}
      <div className="mb-16">
        <div className="w-12 h-1 bg-amber-600 mb-4"></div>
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          What I care about <span className="text-amber-600">.</span>
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <ValueCard key={index} {...value} />
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;