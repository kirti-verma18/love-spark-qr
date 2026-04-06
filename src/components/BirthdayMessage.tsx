import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BirthdayMessage = () => {
  const [showCake, setShowCake] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowCake(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center relative z-10"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
        className="text-7xl mb-4 animate-heartbeat"
      >
        🎂
      </motion.div>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-5xl md:text-7xl font-display text-gradient-love mb-6"
      >
        Happy Birthday!
      </motion.h1>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="max-w-md space-y-4 mb-8"
      >
        <p className="text-lg font-body text-foreground leading-relaxed">
          Mere sabse special insaan ko, <span className="text-love-pink font-semibold">Happy Birthday!</span> 🎉
        </p>
        <p className="text-base font-body text-muted-foreground leading-relaxed">
          Tum meri duniya ho. Tumhare bina kuch adhoora sa lagta hai. 
          Har pal tumhare saath bitaya hua mere liye sabse khoobsurat hota hai. 💫
        </p>
        <p className="text-base font-body text-muted-foreground leading-relaxed">
          Meri wish yahi hai ki tum hamesha khush raho, hamesha waise hi muskurao 
          jaise ab muskura rahe ho padhke ye sab... 🥰
        </p>
        <p className="text-base font-body text-muted-foreground leading-relaxed">
          Aur haan... <span className="text-love-pink font-bold">I love you more than you'll ever know!</span> 💕💕💕
        </p>
      </motion.div>

      {showCake && (
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gradient-love text-primary-foreground rounded-3xl px-8 py-6 shadow-love glow-love"
        >
          <p className="font-display text-3xl mb-2">Forever Yours</p>
          <p className="font-body text-sm opacity-90">— Tumhari wali ❤️</p>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="mt-8 flex gap-2 text-4xl"
      >
        {["🎈", "🎊", "💖", "🎁", "✨"].map((e, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
          >
            {e}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BirthdayMessage;
