import { motion } from "framer-motion";

const ThankYouScreen = () => {
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
        className="w-32 h-32 rounded-full border-4 border-love-pink flex items-center justify-center mb-8 shadow-love bg-card/80 backdrop-blur-sm"
      >
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-6xl"
        >
          💌
        </motion.span>
      </motion.div>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-4xl md:text-5xl font-display text-gradient-love mb-4"
      >
        Thank You! ❤️
      </motion.h1>

      <div className="space-y-4 max-w-md px-4 mb-8">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-lg font-body text-foreground"
        >
          Thank you for being the most beautiful part of my life.
        </motion.p>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-lg font-body text-foreground"
        >
          Thank you for making me the person I am today. You are my constant support system, my safe place, my everything.
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-lg font-body text-foreground"
        >
          I am so incredibly grateful that the universe gave me you. 
        </motion.p>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-lg font-display text-love-pink leading-relaxed mt-4"
        >
          No matter where life takes us, or what the future holds, you will forever be my most important and favorite part of it. ✨
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.3 }}
          className="text-2xl font-display font-bold text-gradient-love mt-8"
        >
          I love you endlessly. ❤️
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ThankYouScreen;
