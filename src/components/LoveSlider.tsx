import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  onNext: () => void;
}

const getFaceData = (value: number) => {
  if (value < 20) return { emoji: "😢", text: "Bas itna?! Dil tod diya...", color: "text-love-deep" };
  if (value < 40) return { emoji: "😿", text: "Itna kam?! Rula doge kya...", color: "text-love-deep" };
  if (value < 60) return { emoji: "🥺", text: "Hmm... thoda aur badha sakte ho...", color: "text-love-warm" };
  if (value < 80) return { emoji: "😊", text: "Aww! Ab baat ban rahi hai!", color: "text-love-pink" };
  if (value < 100) return { emoji: "🥰", text: "Yeh hui na baat! Almost there!", color: "text-love-rose" };
  return { emoji: "😍", text: "I LOVE YOU MORE! 💖💖💖", color: "text-love-pink" };
};

const LoveSlider = ({ onNext }: Props) => {
  const [value, setValue] = useState(0);
  const face = getFaceData(value);
  const showNext = value === 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl md:text-4xl font-display text-gradient-love mb-2"
      >
        Mujhse kitna pyaar karte ho?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-sm text-muted-foreground mb-8 font-body"
      >
        Slider se batao na... 🥺
      </motion.p>

      <motion.div
        key={face.emoji}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-8xl mb-4"
      >
        {face.emoji}
      </motion.div>

      <motion.p
        key={face.text}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-lg font-body font-semibold mb-2 ${face.color}`}
      >
        {face.text}
      </motion.p>

      <div className="text-4xl font-display text-love-pink font-bold mb-6">
        {value}%
      </div>

      <div className="w-full max-w-xs mb-10 relative">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full h-3 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, hsl(340 82% 55%) 0%, hsl(15 90% 65%) ${value}%, hsl(340 30% 92%) ${value}%)`,
          }}
        />
        <style>{`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: linear-gradient(135deg, hsl(340 82% 55%), hsl(350 90% 65%));
            box-shadow: 0 4px 15px hsl(340 82% 55% / 0.4);
            cursor: pointer;
            border: 3px solid white;
          }
          input[type="range"]::-moz-range-thumb {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: linear-gradient(135deg, hsl(340 82% 55%), hsl(350 90% 65%));
            box-shadow: 0 4px 15px hsl(340 82% 55% / 0.4);
            cursor: pointer;
            border: 3px solid white;
          }
        `}</style>
      </div>

      {showNext && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-gradient-love text-primary-foreground font-body font-semibold px-10 py-4 rounded-full shadow-love text-lg"
        >
          Yeh sahi jawab hai! 💕
        </motion.button>
      )}
    </motion.div>
  );
};

export default LoveSlider;
