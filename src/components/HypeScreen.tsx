import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Props {
  onNext: () => void;
}

const messages = [
  "Wait... do you feel that? ✨",
  "Something's coming your way...",
  "And no, it's not another generic surprise. 😉",
  "It's something personal. Something purely 'US'.",
  "Ready to enter our tiny world? ❤️"
];

const HypeScreen = ({ onNext }: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < messages.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10"
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2 - (index * 0.2),
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-8xl mb-12 cursor-default select-none"
      >
        <span className="drop-shadow-[0_0_15px_rgba(255,105,180,0.8)]">✨</span>
      </motion.div>

      <div className="h-32 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ y: -20, opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-md"
          >
            <h2 className="text-3xl md:text-5xl font-display text-gradient-love leading-tight">
              {messages[index]}
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>

      {index === messages.length - 1 ? (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,105,180,0.6)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="mt-12 bg-gradient-love text-primary-foreground font-body font-bold px-12 py-4 rounded-full shadow-love text-xl transition-all hover:brightness-110"
        >
          Reveal the Magic 💘
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 text-sm font-body text-muted-foreground tracking-widest uppercase flex items-center gap-2"
        >
          <span className="w-8 h-[1px] bg-white/20"></span>
          Something special is unfolding... 🗝️🏮🤫
          <span className="w-8 h-[1px] bg-white/20"></span>
        </motion.div>
      )}

      {/* Progress indicators at bottom */}
      <div className="absolute bottom-12 flex gap-3">
        {messages.map((_, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{
              width: i === index ? 32 : 8,
              backgroundColor: i === index ? "hsl(var(--love-pink))" : "rgba(255,255,255,0.2)"
            }}
            className="h-1.5 rounded-full transition-all duration-500"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default HypeScreen;
