import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Props {
  onNext: () => void;
}

const questions = [
  {
    q: "Since it's your special day... what's your ultimate birthday wish today? 🎂",
    options: [
      "A huge cake all for myself 🍰",
      "Unlimited cuddles and kisses from you 😘",
      "A crazy surprise adventure ✈️",
      "Just spending the whole day with you ❤️",
    ],
  },
  {
    q: "You're a whole year older! What's the best part about being you right now? 👑",
    options: [
      "Looking like absolute perfection every day 💅",
      "Being the literal main character ✨",
      "Having the most amazing partner (me! 😎)",
      "Unapologetically getting exactly what I want 😌",
    ],
  },
  {
    q: "What do you think is the best gift I could possibly give you today? 🎁",
    options: [
      "Something shiny and expensive ✨",
      "A handwritten emotional love letter 📝",
      "Me. Obviously, I am the gift. 🎀",
      "A promise to annoy you forever 😈",
    ],
  },
  {
    q: "What's your favorite thing about us? 💫",
    options: [
      "The way we can talk for hours about nothing 🗣️",
      "How you always know what I'm thinking 🧠",
      "Our late night conversations 🌙",
      "Everything. Literally everything. ❤️",
    ],
  },
  {
    q: "Are you ready to make this next year of your life the best one yet? 🥺",
    options: [
      "Obviously! With you by my side 🚀",
      "Only if every day feels like today ✨",
      "I already know it will be, because of you 🥹",
      "We're going to be unstoppable together 💪❤️",
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
            className={`h-1.5 rounded-full transition-all duration-500 ${i <= current ? "w-8 bg-love-pink" : "w-4 bg-love-glow/40"
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
                className={`w-full py-4 px-6 rounded-2xl font-body font-medium text-left transition-all duration-300 ${selected === opt
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
