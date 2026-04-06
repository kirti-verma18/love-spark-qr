import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Props {
  onNext: () => void;
}

const questions = [
  {
    q: "We've done SO many crazy things together... which one do you wanna do again? 🤪",
    options: [
      "That one late night adventure 🌙",
      "The time we almost got caught 😂",
      "Our spontaneous road trip 🚗",
      "ALL of them, obviously! 🔥",
    ],
  },
  {
    q: "Be honest — what's your favourite thing about me? 👀",
    options: [
      "Your smile that fixes everything 😊",
      "Your dramatic reactions 🎭",
      "How you steal my food 🍕",
      "Everything... I'm obsessed 💀",
    ],
  },
  {
    q: "If I went missing for a day, what would you do? 🕵️",
    options: [
      "Panic and call 47 times 📞",
      "Track my location like FBI 🔍",
      "Post missing posters immediately 📋",
      "Enjoy the peace and quiet 😂 (wrong answer btw)",
    ],
  },
  {
    q: "What's the most embarrassing thing I've caught you doing? 😏",
    options: [
      "Talking to yourself about me 🗣️",
      "Stalking my old photos 📸",
      "Practicing how to say 'I love you' 🥺",
      "I plead the fifth 🤐",
    ],
  },
  {
    q: "On a scale of crazy, how crazy are we together? 🤯",
    options: [
      "FBI watchlist level crazy 🚨",
      "Our parents would disown us 💀",
      "Perfectly chaotic 🌪️",
      "We're literally unhinged and I love it 😂",
    ],
  },
];

const LoveQuestions = ({ onNext }: Props) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (opt: string) => {
    setSelected(opt);
    setTimeout(() => {
      setSelected(null);
      if (current < questions.length - 1) {
        setCurrent(current + 1);
      } else {
        onNext();
      }
    }, 900);
  };

  const q = questions[current];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10"
    >
      <div className="text-sm text-muted-foreground font-body mb-2">
        Question {current + 1} of {questions.length} 💕
      </div>

      <div className="flex gap-1.5 mb-6">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i <= current ? "w-8 bg-love-pink" : "w-4 bg-love-glow/40"
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          className="w-full max-w-sm"
        >
          <h2 className="text-2xl md:text-3xl font-display text-gradient-love mb-8 leading-snug">
            {q.q}
          </h2>

          <div className="space-y-3">
            {q.options.map((opt, i) => (
              <motion.button
                key={opt}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, x: 5 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSelect(opt)}
                className={`w-full py-4 px-6 rounded-2xl font-body font-medium text-left transition-all duration-300 ${
                  selected === opt
                    ? "bg-gradient-love text-primary-foreground shadow-love"
                    : "bg-card border border-border hover:border-love-pink hover:shadow-love/20"
                }`}
              >
                {opt}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default LoveQuestions;
