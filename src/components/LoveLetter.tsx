import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Props {
  onNext: () => void;
}

const letterLines = [
  "From the moment you came into my life,",
  "everything changed for the better.",
  "",
  "You make me laugh when I want to cry.",
  "You hold me when the world feels heavy.",
  "Every challenge feels easier because",
  "I imagine you by my side.",
  "",
  "You are not just my person,",
  "you're the most special part of my life.",
  "You make me smile, you make my heart race,",
  "and you make me want to be a better",
  "version of myself.",
  "",
  "I don't know what the future holds,",
  "but I know one thing for sure.",
  "I want that future with you. 💕",
];

const LoveLetter = ({ onNext }: Props) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (visibleLines < letterLines.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 350);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setShowButton(true), 1000);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center relative z-10"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-md w-full rounded-3xl border border-love-pink/30 bg-card/80 backdrop-blur-sm p-8 glow-love"
      >
        <div className="text-left space-y-1 min-h-[350px]">
          {letterLines.slice(0, visibleLines).map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`font-display text-lg leading-relaxed ${
                line === "" ? "h-4" : "text-foreground"
              }`}
            >
              {line}
            </motion.p>
          ))}
          {visibleLines < letterLines.length && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-0.5 h-5 bg-love-pink ml-1"
            />
          )}
        </div>
      </motion.div>

      {showButton && (
        <>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-display text-gradient-purple mt-8 mb-4"
          >
            So, will you be mine forever? 💜
          </motion.p>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="bg-gradient-love text-primary-foreground font-body font-semibold px-10 py-4 rounded-full shadow-love text-lg"
          >
            💛 Yes, forever! 💛
          </motion.button>
        </>
      )}
    </motion.div>
  );
};

export default LoveLetter;
