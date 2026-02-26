import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("intro");

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
    { name: "Intro", path: "intro" },
    { name: "About", path: "About" },
    { name: "Skills", path: "Skills" },
    { name: "Open Source", path: "open-source" },
    { name: "Contact", path: "contact" },
  ];

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <motion.nav
      style={{ backgroundColor, borderBottom, borderBottomWidth: "1px" }}
      className="flex justify-between items-center px-6 md:px-12 py-5 md:py-6 sticky top-0 z-[100] transition-all duration-300 backdrop-blur-md"
    >
      {/* LOGO */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: -2 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-[110] flex items-center cursor-pointer"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#d4b46a] tracking-tighter italic">
          2v<span className="text-[10px] align-top not-italic">©</span>
        </h1>
      </motion.div>

      {/* DESKTOP */}
      <div className="hidden md:flex items-center gap-12">
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onSetActive={() => setActive(link.path)}
                className={`group relative py-2 text-[11px] font-bold uppercase tracking-[0.2em] cursor-pointer transition-colors duration-300 ${
                  active === link.path
                    ? "text-[#d4b46a]"
                    : "text-[#7a736a] hover:text-[#d4b46a]"
                }`}
              >
                <span className="relative z-10">{link.name}</span>

                {active === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#d4b46a]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <motion.span className="absolute inset-0 bg-[#d4b46a]/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-sm -z-0" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsDark(!isDark)}
          className="ml-4 p-2.5 rounded-full border border-[#d4b46a]/20 transition-all shadow-sm"
        >
          {isDark ? (
            <Moon size={18} className="text-[#d4b46a]" />
          ) : (
            <Sun size={18} className="text-[#d4b46a]" />
          )}
        </motion.button>
      </div>

      {/* MOBILE BUTTON */}
      <div className="flex md:hidden items-center gap-2 relative z-[110]">
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 text-[#d4b46a] bg-[#FDFBF3] rounded-full shadow-lg border border-[#d4b46a]/20"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-[#FDFBF3] z-[105] flex flex-col p-10 md:hidden"
          >
            <div className="absolute top-20 right-10 text-[#d4b46a]/10 rotate-12">
              <Sparkles size={200} />
            </div>

            <div className="mt-24 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-light tracking-tighter text-[#7a736a] hover:text-[#d4b46a] cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}