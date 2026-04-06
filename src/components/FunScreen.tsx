import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  onNext: () => void;
}

const loveNotes = [
  "Tum meri zindagi ki sabse achi decision ho 💖",
  "Tumhare saath har din celebration hai 🎉",
  "Tumhari smile dekh ke sab theek ho jata hai ✨",
  "Main bhagwan se sirf tumhe maangti hu 🤲",
  "Tum mere liye duniya se bhi zyada ho 🌍",
  "Tumse milke lagta hai ki kismat sach me hoti hai 🍀",
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
        className="text-3xl md:text-4xl font-display text-gradient-love mb-3"
      >
        Love Letters 💌
      </motion.h2>
      <p className="text-sm text-muted-foreground font-body mb-8">
        Har envelope me ek surprise hai... tap karo! 🤫
      </p>

      <div className="grid grid-cols-2 gap-4 max-w-sm w-full mb-8">
        {loveNotes.map((note, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleReveal(i)}
            className={`p-4 rounded-2xl cursor-pointer min-h-[120px] flex items-center justify-center transition-all duration-500 ${
              revealed.includes(i)
                ? "bg-gradient-love shadow-love"
                : "bg-card border-2 border-dashed border-love-pink"
            }`}
          >
            {revealed.includes(i) ? (
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-primary-foreground font-body text-sm font-medium"
              >
                {note}
              </motion.p>
            ) : (
              <span className="text-4xl">💌</span>
            )}
          </motion.div>
        ))}
      </div>

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
          Aur ek surprise! 🎁
        </motion.button>
      )}
    </motion.div>
  );
};

export default FunScreen;
