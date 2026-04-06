import { motion } from "framer-motion";
import { useState, useCallback } from "react";

interface Props {
  onNext: () => void;
}

const DoYouLikeMe = ({ onNext }: Props) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [clickedYes, setClickedYes] = useState(false);
  const [noAttempts, setNoAttempts] = useState(0);

  const noTexts = [
    "No 😒",
    "Are you sure? 🥺",
    "Really really sure? 😢",
    "Think again! 💔",
    "You're breaking my heart 😭",
    "Last chance... 🥹",
    "Okay fine, but I'll cry 😿",
    "PLEASEEE 🙏",
  ];

  const moveNoButton = useCallback(() => {
    const x = (Math.random() - 0.5) * 250;
    const y = (Math.random() - 0.5) * 300;
    setNoPos({ x, y });
    setNoAttempts((prev) => Math.min(prev + 1, noTexts.length - 1));
  }, []);

  const handleYes = () => {
    setClickedYes(true);
    setTimeout(onNext, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-28 h-28 rounded-full border-4 border-love-purple flex items-center justify-center mb-8 glow-purple"
      >
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-5xl"
        >
          💜
        </motion.span>
      </motion.div>

      {!clickedYes ? (
        <>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-display text-foreground mb-3"
          >
            Do you like me?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg font-body text-muted-foreground mb-12"
          >
            Be honest with me... 🥺
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-6 relative"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYes}
              className="bg-emerald-500 text-primary-foreground font-body font-bold px-12 py-5 rounded-full text-xl shadow-lg shadow-emerald-500/30"
            >
              Yes 💕
            </motion.button>

            <motion.button
              animate={{ x: noPos.x, y: noPos.y }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              onHoverStart={moveNoButton}
              onClick={moveNoButton}
              className="bg-red-500 text-primary-foreground font-body font-bold px-12 py-5 rounded-full text-xl shadow-lg shadow-red-500/30"
            >
              {noTexts[noAttempts]}
            </motion.button>
          </motion.div>
        </>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          className="text-center"
        >
          <div className="text-7xl mb-4">🥰</div>
          <h2 className="text-4xl font-display text-gradient-love">
            I knew it! 💖
          </h2>
        </motion.div>
      )}
    </motion.div>
  );
};

export default DoYouLikeMe;
