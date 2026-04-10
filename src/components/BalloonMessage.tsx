import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Props {
  onNext: () => void;
}

const words = [
  { text: "I", color: "hsl(330, 85%, 60%)" },
  { text: "Love", color: "hsl(350, 90%, 55%)" },
  { text: "You", color: "hsl(280, 70%, 55%)" },
];

const BalloonMessage = ({ onNext }: Props) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowButton(true), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10"
    >
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl md:text-4xl font-display text-gradient-purple mb-3"
      >
        This is what I wanted to say for so long...
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-base font-body text-muted-foreground mb-16 italic"
      >
        Watch the balloons carry my message to you 💕
      </motion.p>

      <div className="flex gap-6 items-end mb-16">
        {words.map((word, i) => (
          <motion.div
            key={word.text}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: [200, -10, 0], opacity: 1 }}
            transition={{ delay: 1 + i * 0.7, duration: 1.2, type: "spring", stiffness: 100 }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, -12 - i * 4, 0], rotate: [0, i % 2 === 0 ? 2 : -2, 0] }}
              transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
              className="relative"
            >
              <svg width="90" height="100" viewBox="0 0 90 100">
                <defs>
                  <radialGradient id={`grad-${i}`} cx="35%" cy="35%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                    <stop offset="100%" stopColor={word.color} />
                  </radialGradient>
                </defs>
                <path
                  d="M45 95 Q45 75 45 70 Q15 65 10 40 Q5 15 30 5 Q45 -5 55 5 Q80 15 75 40 Q70 65 45 70"
                  fill={`url(#grad-${i})`}
                  filter="drop-shadow(0 0 15px rgba(200,100,200,0.5))"
                />
                <line x1="45" y1="70" x2="45" y2="95" stroke="hsl(280,30%,40%)" strokeWidth="1.5" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-primary-foreground font-display text-2xl font-bold drop-shadow-lg" style={{ paddingBottom: '20px' }}>
                {word.text}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {showButton && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-gradient-love text-primary-foreground font-body font-semibold px-10 py-4 rounded-full shadow-love text-lg"
        >
          Continue 💫
        </motion.button>
      )}
    </motion.div>
  );
};

export default BalloonMessage;
