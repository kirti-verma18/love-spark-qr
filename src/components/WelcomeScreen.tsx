import { motion } from "framer-motion";

interface Props {
  onNext: () => void;
}

const WelcomeScreen = ({ onNext }: Props) => {
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
        transition={{ type: "spring", delay: 0.3, stiffness: 200 }}
        className="text-8xl mb-6"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ willChange: "transform", backfaceVisibility: "hidden", WebkitFontSmoothing: "antialiased" }}
          className="w-28 h-28 rounded-full border-4 border-love-purple flex items-center justify-center glow-purple transform-gpu"
        >
          <span style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}>💜</span>
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-4xl md:text-5xl font-display text-gradient-love mb-4"
      >
        My Pookie... ❤️
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-lg font-body text-muted-foreground max-w-sm mb-3"
      >
        To the one who holds my heart and makes my entire world brighter just by existing in it... ✨
      </motion.p>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-base font-body text-muted-foreground max-w-sm mb-5"
      >
        I have so much to say and share with you, but before we dive in I want to say...
      </motion.p>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-md font-body text-love-deep italic max-w-md mb-8 px-4"
      >
        "I love you not only for what you are, but for who I am when I am with you." 💕 Ready for a little journey?
      </motion.p>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="bg-gradient-love text-primary-foreground font-body font-semibold px-10 py-4 rounded-full shadow-love text-lg transition-all hover:shadow-lg"
      >
        Take My Hand 💘
      </motion.button>
    </motion.div>
  );
};

export default WelcomeScreen;
