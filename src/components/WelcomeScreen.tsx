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
        className="text-8xl mb-6 animate-heartbeat"
      >
        💖
      </motion.div>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-5xl md:text-6xl font-display text-gradient-love mb-4"
      >
        Hey Handsome!
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-lg font-body text-muted-foreground max-w-sm mb-2"
      >
        So today is YOUR special day... 🎂
      </motion.p>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="text-base font-body text-muted-foreground max-w-sm mb-4"
      >
        But before we get to the good stuff, you gotta prove something first... 😏
      </motion.p>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="text-sm font-body text-love-deep italic max-w-xs mb-8"
      >
        Yes yes, I know it's YOUR day... but honestly? Every single day of mine belongs to you anyway 💕
      </motion.p>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.7 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="bg-gradient-love text-primary-foreground font-body font-semibold px-10 py-4 rounded-full shadow-love text-lg"
      >
        Alright, Let's Go! 💘
      </motion.button>
    </motion.div>
  );
};

export default WelcomeScreen;
