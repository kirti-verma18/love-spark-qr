import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  onNext: () => void;
}

const loveNotes = [
  "You're the best decision my heart ever made 💖",
  "Every day with you feels like a plot twist I never saw coming 😂✨",
  "You're my 2 AM thought and my 8 AM smile ☀️",
  "If loving you is wrong, I don't wanna be right (cheesy but TRUE) 🧀",
  "You make my heart do that stupid fluttery thing 🦋",
  "I'd choose you in every universe, every timeline, every life 🌌",
  "You're literally the human version of a warm blanket 🥰",
  "My favourite notification is still your name on my screen 📱💕",
];

const FunScreen = ({ onNext }: Props) => {
  const [revealed, setRevealed] = useState<number[]>([]);
  const allRevealed = revealed.length === loveNotes.length;

  const handleReveal = (i: number) => {
    if (!revealed.includes(i)) {
      setRevealed([...revealed, i]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center relative z-10"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl md:text-4xl font-display text-gradient-love mb-2"
      >
        Secret Love Notes 💌
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-sm text-muted-foreground font-body mb-8"
      >
        Each envelope hides a little truth... tap them all! 🤫
      </motion.p>

      <div className="grid grid-cols-2 gap-3 max-w-sm w-full mb-8">
        {loveNotes.map((note, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: revealed.includes(i) ? 1 : 1.05, rotate: revealed.includes(i) ? 0 : 2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleReveal(i)}
            className={`p-4 rounded-2xl cursor-pointer min-h-[110px] flex items-center justify-center transition-all duration-500 ${
              revealed.includes(i)
                ? "bg-gradient-love shadow-love"
                : "bg-card border-2 border-dashed border-love-pink hover:border-love-warm"
            }`}
          >
            {revealed.includes(i) ? (
              <motion.p
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                className="text-primary-foreground font-body text-xs font-medium leading-relaxed"
              >
                {note}
              </motion.p>
            ) : (
              <motion.span
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="text-4xl"
              >
                💌
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground font-body mb-4">
        {revealed.length}/{loveNotes.length} notes revealed ✨
      </p>

      {allRevealed && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-gradient-love text-primary-foreground font-body font-semibold px-10 py-4 rounded-full shadow-love text-lg"
        >
          One Last Surprise! 🎁
        </motion.button>
      )}
    </motion.div>
  );
};

export default FunScreen;
