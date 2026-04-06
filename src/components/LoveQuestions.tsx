import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Props {
  onNext: () => void;
}

const questions = [
  {
    q: "Sabse pehle meri konsi baat pasand aayi? 🤔",
    options: ["Teri smile 😊", "Teri aankhen 👀", "Teri baatein 💬", "Sab kuch! 💖"],
  },
  {
    q: "Agar mujhe ek word me describe karna ho toh? 🌟",
    options: ["Beautiful ✨", "Pagal 🤪", "Jaan 💕", "Everything 🌎"],
  },
  {
    q: "Mere bina ek din reh sakte ho? 😤",
    options: ["Never! 😭", "Try toh karunga... 😅", "Bas sochne me darr lagta hai 🥺", "Bilkul nahi! 💔"],
  },
  {
    q: "Meri favourite cheez kya hai mujhme? 💭",
    options: ["Teri hasi 😄", "Tera gussa 😠", "Tera pyaar 💗", "Tu puri ki puri! 🥰"],
  },
];

const LoveQuestions = ({ onNext }: Props) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleSelect = (opt: string) => {
    setSelected(opt);
    setTimeout(() => {
      setAnswers([...answers, opt]);
      setSelected(null);
      if (current < questions.length - 1) {
        setCurrent(current + 1);
      } else {
        onNext();
      }
    }, 800);
  };

  const q = questions[current];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10"
    >
      <div className="text-sm text-muted-foreground font-body mb-4">
        {current + 1} / {questions.length} 💕
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          className="w-full max-w-sm"
        >
          <h2 className="text-2xl md:text-3xl font-display text-gradient-love mb-8">
            {q.q}
          </h2>

          <div className="space-y-3">
            {q.options.map((opt) => (
              <motion.button
                key={opt}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSelect(opt)}
                className={`w-full py-4 px-6 rounded-2xl font-body font-medium text-left transition-all duration-300 ${
                  selected === opt
                    ? "bg-gradient-love text-primary-foreground shadow-love"
                    : "bg-card border border-border hover:border-love-pink"
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
