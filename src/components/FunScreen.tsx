import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  onNext: () => void;
}

const loveNotes = [
  { text: "You're the absolute best thing that's ever happened to me, hands down. 🏆", emoji: "🤐" },
  { text: "I love you more than words could ever possibly explain. 🥺💕", emoji: "💎" },
  { text: "You make every single day feel like magic just by being in it. ✨", emoji: "🧩" },
  { text: "Being folded safely in your arms is my favorite place in the world. ❤️", emoji: "🏹" },
  { text: "You still give me those crazy little butterflies every single day. 🦋", emoji: "🔮" },
  { text: "You are my favorite late-night thought and my favorite morning text. ☀️", emoji: "📜" },
  { text: "I'd choose you in every lifetime, in every completely messed up universe. 🌌", emoji: "🌋" },
  { text: "Wait for the very last screen... I have something big to say. 🤫", emoji: "🗝️" },
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
            className={`p-4 rounded-2xl cursor-pointer min-h-[110px] flex items-center justify-center transition-all duration-500 border backdrop-blur-sm ${
              revealed.includes(i)
                ? "bg-gradient-love border-love-pink/50 shadow-love"
                : "bg-card/40 border-love-pink/30 hover:bg-card/60 hover:border-love-pink/50"
            }`}
          >
            {revealed.includes(i) ? (
              <motion.p
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                className="text-primary-foreground font-body text-[11px] font-medium leading-tight"
              >
                {note.text}
              </motion.p>
            ) : (
              <motion.span
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="text-4xl"
              >
                {note.emoji}
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
