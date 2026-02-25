import { NavLink } from "react-router-dom";
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  
  // Scroll animation for the glass background
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(253, 251, 243, 0)", "rgba(253, 251, 243, 0.8)"]
  );
  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ["rgba(212, 180, 106, 0)", "rgba(212, 180, 106, 0.2)"]
  );

  const navLinks = [
    { name: "Intro", path: "/" },
    { name: "Career", path: "/career" },
    { name: "Projects", path: "/projects" },
    { name: "Open Source", path: "/open-source" },
    { name: "Contact", path: "/contact" },
  ];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <motion.nav 
      style={{ backgroundColor, borderBottom, borderBottomWidth: "1px" }}
      className="flex justify-between items-center px-6 md:px-12 py-5 md:py-6 sticky top-0 z-[100] transition-all duration-300 backdrop-blur-md"
    >
      {/* --- LOGO AREA --- */}
      <motion.div 
        whileHover={{ scale: 1.1, rotate: -2 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-[110] flex items-center cursor-pointer"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#d4b46a] tracking-tighter italic">
          2v<span className="text-[10px] align-top not-italic">©</span>
        </h1>
      </motion.div>

      {/* --- DESKTOP MENU --- */}
      <div className="hidden md:flex items-center gap-12">
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `group relative py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive ? "text-[#d4b46a]" : "text-[#7a736a] hover:text-[#d4b46a]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#d4b46a]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <motion.span 
                      className="absolute inset-0 bg-[#d4b46a]/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-sm -z-0"
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "rgba(212, 180, 106, 0.1)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsDark(!isDark)}
          className="ml-4 p-2.5 rounded-full border border-[#d4b46a]/20 transition-all shadow-sm"
        >
          <motion.div 
            initial={false}
            animate={{ rotate: isDark ? 0 : 45, scale: isDark ? 1 : 1.1 }}
          >
            {isDark ? (
              <Moon size={18} className="text-[#d4b46a] fill-[#d4b46a]" />
            ) : (
              <Sun size={18} className="text-[#d4b46a]" />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* --- MOBILE TOGGLE --- */}
      <div className="flex md:hidden items-center gap-2 relative z-[110]">
        <motion.button 
          whileTap={{ scale: 0.8 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 text-[#d4b46a] bg-[#FDFBF3] rounded-full shadow-lg border border-[#d4b46a]/20"
        >
          {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </motion.button>
      </div>

      {/* --- AMAZING MOBILE OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-[#FDFBF3] z-[105] flex flex-col p-10 md:hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-20 right-10 text-[#d4b46a]/10 rotate-12">
              <Sparkles size={200} />
            </div>

            <div className="mt-24 flex flex-col gap-6">
              <p className="text-[10px] uppercase tracking-[0.5em] text-[#d4b46a]/60 font-bold mb-4">Navigation</p>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-4xl font-light tracking-tighter transition-all ${
                        isActive ? "text-[#d4b46a] pl-4 border-l-4 border-[#d4b46a]" : "text-[#7a736a] hover:pl-2"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-auto pb-10 flex flex-col gap-6"
            >
              <div className="h-[1px] w-full bg-[#d4b46a]/20" />
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#7a736a] tracking-widest uppercase">Toggle Theme</span>
                <button 
                  onClick={() => setIsDark(!isDark)}
                  className="p-4 bg-[#d4b46a]/10 rounded-2xl text-[#d4b46a]"
                >
                  {isDark ? <Moon size={24} /> : <Sun size={24} />}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}