import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhp, FaJs, FaLaravel, FaVuejs, FaJava, FaGitAlt, FaHtml5, FaCss3Alt, 
  FaSass, FaBootstrap, FaGithub, FaFigma, FaDatabase 
} from 'react-icons/fa';
import { 
  SiSpringboot, SiJquery, SiGulp, SiRollupdotjs, 
  SiAdobephotoshop, SiAdobeillustrator, SiAdobexd 
} from 'react-icons/si';

const skillData = [
  {
    category: "Focus In",
    skills: [
      { name: "PHP", icon: <FaPhp size={22} color="#777BB4" /> },
      { name: "JavaScript", icon: <FaJs size={22} color="#F7DF1E" /> },
      { name: "Laravel", icon: <FaLaravel size={22} color="#FF2D20" /> },
      { name: "Vue JS", icon: <FaVuejs size={22} color="#4FC08D" /> },
      { name: "Java", icon: <FaJava size={22} color="#007396" /> },
      { name: "Spring Boot", icon: <SiSpringboot size={22} color="#6DB33F" /> }
    ]
  },
  {
    category: "Good Knowledge",
    skills: [
      { name: "Git", icon: <FaGitAlt size={22} color="#F05032" /> },
      { name: "jQuery", icon: <SiJquery size={22} color="#0769AD" /> },
      { name: "Gulp", icon: <SiGulp size={22} color="#CF4647" /> },
      { name: "Rollup", icon: <SiRollupdotjs size={22} color="#FF3333" /> },
      { name: "HTML5", icon: <FaHtml5 size={22} color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3Alt size={22} color="#1572B6" /> },
      { name: "SASS", icon: <FaSass size={22} color="#CC6699" /> },
      { name: "Bootstrap", icon: <FaBootstrap size={22} color="#7952B3" /> },
      { name: "MySQL", icon: <FaDatabase size={22} color="#4479A1" /> },
      { name: "GitHub", icon: <FaGithub size={22} color="#181717" /> }
    ]
  },
  {
    category: "Design Tools",
    skills: [
      { name: "Photoshop", icon: <SiAdobephotoshop size={22} color="#31A8FF" /> },
      { name: "Illustrator", icon: <SiAdobeillustrator size={22} color="#FF9A00" /> },
      { name: "Adobe XD", icon: <SiAdobexd size={22} color="#FF61F6" /> },
      { name: "Figma", icon: <FaFigma size={22} color="#F24E1E" /> }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 }
  }
};

const SkillItem = ({ name, icon }) => (
  <motion.div 
    variants={itemVariants}
    whileHover={{ y: -8 }}
    className="flex items-center gap-4 cursor-default group"
  >
    {/* 🔵 Circle Icon Container */}
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-14 h-14 flex items-center justify-center 
                 bg-white rounded-full shadow-md 
                 border border-stone-100 
                 group-hover:border-[#b59461]/50 
                 group-hover:shadow-lg 
                 group-hover:shadow-[#b59461]/20 
                 transition-all duration-300"
    >
      <div className="grayscale group-hover:grayscale-0 transition-all duration-300">
        {icon}
      </div>
    </motion.div>

    <span className="text-[#5c4b37] font-semibold text-sm lg:text-[15px] opacity-80 group-hover:opacity-100 transition-opacity">
      {name}
    </span>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section className="py-24 px-8 bg-[#FCF9F2]">
      <div className="max-w-6xl mx-auto">
        
        <motion.header 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="w-14 h-1 bg-[#8B7355] mb-6 rounded-full" />
          <h2 className="text-4xl font-bold text-[#6D5D44] tracking-tight">
            Skills & Tools.
          </h2>
        </motion.header>

        <div className="space-y-20">
          {skillData.map((section, sIdx) => (
            <div key={sIdx}>
              <div className="flex items-center gap-6 mb-12">
                <h3 className="text-[#8B7355] font-bold text-xs uppercase tracking-[0.3em] whitespace-nowrap">
                  {section.category}
                </h3>
                <div className="w-full h-[1px] bg-[#8B7355]/10" />
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-y-10 gap-x-6"
              >
                {section.skills.map((skill, kIdx) => (
                  <SkillItem key={kIdx} {...skill} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;