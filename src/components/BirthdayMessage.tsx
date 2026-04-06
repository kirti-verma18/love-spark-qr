import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BirthdayMessage = () => {
  const [showCard, setShowCard] = useState(false);
  const [showExtras, setShowExtras] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowCard(true), 2500);
    const t2 = setTimeout(() => setShowExtras(true), 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center relative z-10"
    >
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 150, delay: 0.3 }}
        className="text-7xl mb-2"
      >
        🎂
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex gap-1 text-3xl mb-4"
      >
        {"🎈🎊🥳🎊🎈".split("").map((e, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1, delay: i * 0.15, repeat: Infinity }}
          >
            {e}
          </motion.span>
        ))}
      </motion.div>

      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
        className="text-5xl md:text-7xl font-display text-gradient-love mb-6"
      >
        Happy Birthday!
      </motion.h1>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="max-w-md space-y-4 mb-8"
      >
        <p className="text-lg font-body text-foreground leading-relaxed">
          To the most <span className="text-love-pink font-bold">amazing, annoying, lovable</span> human I know — <span className="font-display text-xl text-love-pink">Happy Birthday baby!</span> 🎉
        </p>
        <p className="text-base font-body text-muted-foreground leading-relaxed">
          You make every single day feel like an adventure. Whether we're doing something crazy or just doing absolutely nothing together — it's always perfect with you. 💫
        </p>
        <p className="text-base font-body text-muted-foreground leading-relaxed">
          Thank you for being my partner in crime, my 3 AM therapist, my favourite person to annoy, and the one who makes my heart go 📈📈📈 every single day.
        </p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-lg font-body text-love-pink font-bold leading-relaxed"
        >
          I love you more than pizza, and you KNOW that's saying something. 🍕💕
        </motion.p>
      </motion.div>

      {showCard && (
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gradient-love text-primary-foreground rounded-3xl px-10 py-8 shadow-love glow-love mb-6 max-w-sm"
        >
          <p className="font-display text-4xl mb-2">Forever & Always</p>
          <p className="font-body text-sm opacity-90 mb-3">yours truly, your favourite person ❤️</p>
          <div className="text-3xl animate-heartbeat">💖</div>
        </motion.div>
      )}

      {showExtras && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <p className="text-sm font-body text-muted-foreground italic">
            P.S. — Your real gift is on the way... this was just to make you smile 😘
          </p>
          <p className="text-xs font-body text-love-glow">
            Made with too much love and not enough sleep 💻❤️
          </p>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="mt-6 flex gap-3 text-3xl"
      >
        {["🎈", "💖", "🎁", "✨", "🥂"].map((e, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, delay: i * 0.25, repeat: Infinity }}
          >
            {e}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BirthdayMessage;
