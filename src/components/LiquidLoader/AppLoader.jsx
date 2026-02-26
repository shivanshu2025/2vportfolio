import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LiquidLoader from "./LiquidLoader";

const AppLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ⏱ Loader ab jaldi hat jayega
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900); // 👈 900ms (fast, premium feel)

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }} // fast fade-out
        >
          <LiquidLoader />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppLoader;