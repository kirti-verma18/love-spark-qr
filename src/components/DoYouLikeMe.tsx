import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useMemo } from "react";

interface Props {
  onNext: () => void;
}

/* ─── Flying Hearts Burst ─── */
const HeartBurst = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        emoji: ["💖", "💕", "💗", "💓", "❤️", "🩷", "😍", "🥰", "😘"][i % 9],
        x: (Math.random() - 0.5) * 600,
        y: Math.random() * -800 - 100,
        rotate: Math.random() * 720 - 360,
        size: 16 + Math.random() * 24,
        delay: Math.random() * 0.6,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 0 }}
          animate={{
            x: h.x,
            y: [0, h.y * 0.4, h.y],
            rotate: h.rotate,
            opacity: [1, 1, 0],
            scale: [0, 1.5, 0.8],
          }}
          transition={{ duration: 2.5, delay: h.delay, ease: "easeOut" }}
          style={{ position: "absolute", fontSize: h.size }}
        >
          {h.emoji}
        </motion.div>
      ))}
    </div>
  );
};

/* ─── Drama Texts that flash ─── */
const dramaSequence = [
  { text: "OMG OMG OMG!!! 😱", size: "3rem" },
  { text: "WAIT... REALLY?! 🤯", size: "3.5rem" },
  { text: "YOU SAID YES!! 🥹💖", size: "3rem" },
  { text: "I'M LITERALLY DYING RN 😭💕", size: "2.5rem" },
  { text: "brb, screaming into a pillow 🫠", size: "2rem" },
  { text: "okay okay I'm cool... 😎", size: "2.2rem" },
  { text: "...no I'm NOT 🥰🥰🥰", size: "2.5rem" },
];

const DoYouLikeMe = ({ onNext }: Props) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [clickedYes, setClickedYes] = useState(false);
  const [noAttempts, setNoAttempts] = useState(0);
  const [dramaPhase, setDramaPhase] = useState(-1);
  const [showHearts, setShowHearts] = useState(false);
  const [yesSize, setYesSize] = useState(1);

  const noTexts = [
    "No 😒",
    "Are you sure? 🥺",
    "Really really sure? 😢",
    "Think again! 💔",
    "You're breaking my heart 😭",
    "Last chance... 🥹",
    "Okay fine, but I'll cry 😿",
    "PLEASEEE 🙏",
  ];

  const moveNoButton = useCallback(() => {
    const x = (Math.random() - 0.5) * 250;
    const y = (Math.random() - 0.5) * 300;
    setNoPos({ x, y });
    setNoAttempts((prev) => Math.min(prev + 1, noTexts.length - 1));
    // Yes button grows every time No is attempted
    setYesSize((prev) => Math.min(prev + 0.12, 1.8));
  }, []);

  const handleYes = () => {
    setClickedYes(true);
    setShowHearts(true);

    // Drama sequence — flash each text one by one
    dramaSequence.forEach((_, i) => {
      setTimeout(() => setDramaPhase(i), i * 800);
    });

    // Move to next after all drama
    setTimeout(onNext, dramaSequence.length * 800 + 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10 overflow-hidden"
    >
      {/* Heart Burst on Yes */}
      {showHearts && <HeartBurst />}

      {/* Screen shake on yes */}
      <motion.div
        animate={
          clickedYes
            ? {
                x: [0, -8, 8, -6, 6, -4, 4, 0],
                y: [0, 4, -4, 3, -3, 2, -2, 0],
              }
            : {}
        }
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        {/* Heart Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={
            clickedYes
              ? { scale: [1, 2, 1.5], rotate: [0, 360] }
              : { scale: 1 }
          }
          transition={
            clickedYes
              ? { duration: 0.8, type: "spring" }
              : { type: "spring", stiffness: 200 }
          }
          className="w-28 h-28 rounded-full border-4 border-love-purple flex items-center justify-center mb-8 glow-purple"
        >
          <motion.span
            animate={
              clickedYes
                ? { scale: [1, 1.5, 1], rotate: [0, 20, -20, 0] }
                : { scale: [1, 1.2, 1] }
            }
            transition={{ duration: clickedYes ? 0.5 : 1.5, repeat: Infinity }}
            className="text-5xl"
          >
            {clickedYes ? "🥰" : "💜"}
          </motion.span>
        </motion.div>

        {!clickedYes ? (
          <>
            {/* Question */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-display text-foreground mb-3"
            >
              Do you like me?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg font-body text-muted-foreground mb-12"
            >
              Be honest with me... 🥺
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-6 relative"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: yesSize }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={handleYes}
                className="bg-emerald-500 text-primary-foreground font-body font-bold px-12 py-5 rounded-full text-xl shadow-lg shadow-emerald-500/30"
              >
                Yes 💕
              </motion.button>

              <motion.button
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                onHoverStart={moveNoButton}
                onClick={moveNoButton}
                className="bg-red-500 text-primary-foreground font-body font-bold px-12 py-5 rounded-full text-xl shadow-lg shadow-red-500/30"
              >
                {noTexts[noAttempts]}
              </motion.button>
            </motion.div>

            {/* Sass text on too many No attempts */}
            {noAttempts >= 3 && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-body text-love-pink mt-8 italic"
              >
                {noAttempts >= 6
                  ? "The Yes button is getting bigger... just saying 👀"
                  : noAttempts >= 4
                  ? "You're really testing me rn 😤"
                  : "That button has commitment issues just like you 😏"}
              </motion.p>
            )}
          </>
        ) : (
          /* ─── DRAMA SEQUENCE ─── */
          <div className="relative flex flex-col items-center">
            {/* Background pulse rings */}
            {[0, 1, 2].map((ring) => (
              <motion.div
                key={ring}
                initial={{ scale: 0, opacity: 0.6 }}
                animate={{ scale: [0, 3, 5], opacity: [0.6, 0.2, 0] }}
                transition={{
                  duration: 2,
                  delay: ring * 0.3,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                style={{
                  position: "absolute",
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  border: "2px solid hsl(330, 85%, 60%)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            {/* Drama text flashing */}
            <AnimatePresence mode="wait">
              {dramaPhase >= 0 && dramaPhase < dramaSequence.length && (
                <motion.div
                  key={dramaPhase}
                  initial={{ scale: 0, rotate: -15, opacity: 0 }}
                  animate={{ scale: [0, 1.3, 1], rotate: [dramaPhase % 2 === 0 ? -10 : 10, 0], opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0, y: -30 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="text-center"
                >
                  <p
                    className="font-display text-gradient-love font-bold leading-tight"
                    style={{ fontSize: dramaSequence[dramaPhase].size }}
                  >
                    {dramaSequence[dramaPhase].text}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Emoji rain during drama */}
            <div className="fixed inset-0 pointer-events-none z-40">
              {clickedYes &&
                Array.from({ length: 15 }, (_, i) => (
                  <motion.div
                    key={`rain-${i}`}
                    initial={{ y: -50, x: `${Math.random() * 100}%`, opacity: 1 }}
                    animate={{ y: "110vh", rotate: 360 }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      delay: Math.random() * 3,
                      repeat: Infinity,
                      repeatDelay: Math.random() * 2,
                    }}
                    style={{
                      position: "absolute",
                      fontSize: 20 + Math.random() * 16,
                      left: `${Math.random() * 95}%`,
                    }}
                  >
                    {["💖", "🎉", "🥳", "✨", "🎊", "💃", "🕺", "🫶"][i % 8]}
                  </motion.div>
                ))}
            </div>

            {/* Spinning emojis around the heart */}
            {["💕", "✨", "🥰", "💗"].map((emoji, i) => (
              <motion.div
                key={`orbit-${i}`}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  top: -80,
                  width: 120,
                  height: 120,
                }}
              >
                <motion.span
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: `rotate(${i * 90}deg) translateY(-60px)`,
                    fontSize: 24,
                  }}
                >
                  {emoji}
                </motion.span>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default DoYouLikeMe;
