"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function FlipWords({ words, duration = 3000 }: { words: string[]; duration?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % words.length), duration);
    return () => window.clearInterval(timer);
  }, [duration, words.length]);

  return (
    <span className="relative inline-block align-baseline">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
          transition={{ duration: 0.25 }}
          className="inline-block whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
