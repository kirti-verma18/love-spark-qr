import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import ConfettiExplosion from "./ConfettiExplosion";

/* ─── Firework Particle ─── */
const Firework = ({ delay, x, color }: { delay: number; x: number; color: string }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        angle: (i / 12) * 360,
        distance: 40 + Math.random() * 60,
        size: 3 + Math.random() * 4,
      })),
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{ delay, duration: 2, times: [0, 0.1, 0.7, 1], repeat: Infinity, repeatDelay: Math.random() * 3 + 2 }}
      style={{ position: "absolute", left: `${x}%`, top: "15%" }}
    >
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{
            x: Math.cos((p.angle * Math.PI) / 180) * p.distance,
            y: Math.sin((p.angle * Math.PI) / 180) * p.distance,
            opacity: [1, 1, 0],
          }}
          transition={{ delay: delay + 0.1, duration: 1.5, repeat: Infinity, repeatDelay: Math.random() * 3 + 2 }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            backgroundColor: color,
            boxShadow: `0 0 6px ${color}, 0 0 12px ${color}`,
          }}
        />
      ))}
    </motion.div>
  );
};

/* ─── Floating Lantern ─── */
const Lantern = ({ delay, x }: { delay: number; x: number }) => (
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: -800, opacity: [0, 0.9, 0.9, 0] }}
    transition={{ delay, duration: 12 + Math.random() * 6, repeat: Infinity, repeatDelay: Math.random() * 4 }}
    style={{ position: "absolute", left: `${x}%`, bottom: "-5%" }}
  >
    <div
      style={{
        width: 16,
        height: 22,
        borderRadius: "50% 50% 45% 45%",
        background: "radial-gradient(circle at 50% 40%, hsl(35, 95%, 75%), hsl(20, 90%, 55%))",
        boxShadow: "0 0 20px hsl(35, 95%, 65%, 0.6), 0 0 40px hsl(20, 90%, 50%, 0.3)",
      }}
    />
  </motion.div>
);

/* ─── Sparkle Star ─── */
const Sparkle = ({ delay, x, y, size }: { delay: number; x: number; y: number; size: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], rotate: [0, 180] }}
    transition={{ delay, duration: 1.5, repeat: Infinity, repeatDelay: Math.random() * 3 + 1 }}
    style={{
      position: "absolute",
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
      color: "hsl(45, 95%, 75%)",
      fontSize: size,
    }}
  >
    ✦
  </motion.div>
);

/* ─── Birthday Cake SVG ─── */
const BirthdayCake = () => (
  <motion.div
    initial={{ scale: 0, y: 50 }}
    animate={{ scale: 1, y: 0 }}
    transition={{ delay: 0.5, type: "spring", stiffness: 150, damping: 12 }}
    className="relative"
  >
    <svg width="160" height="180" viewBox="0 0 160 180">
      {/* Candle Flames */}
      {[40, 60, 80, 100, 120].map((cx, i) => (
        <g key={i}>
          <motion.ellipse
            cx={cx}
            cy={22}
            rx={5}
            ry={8}
            fill="url(#flameGrad)"
            animate={{ ry: [8, 10, 7, 9, 8], rx: [5, 4, 6, 5, 5], cy: [22, 20, 23, 21, 22] }}
            transition={{ duration: 0.8 + i * 0.1, repeat: Infinity }}
          />
          <rect x={cx - 2} y={30} width={4} height={30} rx={2} fill={`hsl(${330 + i * 20}, 70%, 65%)`} />
        </g>
      ))}
      {/* Cake Body */}
      <rect x={20} y={60} width={120} height={35} rx={6} fill="hsl(340, 60%, 55%)" />
      <rect x={20} y={60} width={120} height={10} rx={6} fill="hsl(340, 70%, 65%)" />
      <rect x={10} y={95} width={140} height={40} rx={8} fill="hsl(330, 50%, 50%)" />
      <rect x={10} y={95} width={140} height={12} rx={8} fill="hsl(330, 60%, 58%)" />
      <rect x={0} y={135} width={160} height={45} rx={10} fill="hsl(320, 45%, 45%)" />
      <rect x={0} y={135} width={160} height={14} rx={10} fill="hsl(320, 55%, 52%)" />
      {/* Frosting Drips */}
      {[20, 45, 70, 95, 120, 140].map((x, i) => (
        <motion.ellipse
          key={`drip-${i}`}
          cx={x}
          cy={137}
          rx={6}
          ry={8 + i * 1.5}
          fill="hsl(340, 80%, 75%)"
          animate={{ ry: [8 + i * 1.5, 10 + i * 1.5, 8 + i * 1.5] }}
          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
      {/* Sprinkles */}
      {[30, 50, 75, 100, 130].map((x, i) => (
        <circle key={`spr-${i}`} cx={x} cy={110 + (i % 2) * 15} r={2.5} fill={`hsl(${i * 60}, 80%, 70%)`} />
      ))}
      <defs>
        <radialGradient id="flameGrad" cx="50%" cy="70%">
          <stop offset="0%" stopColor="hsl(55, 100%, 90%)" />
          <stop offset="40%" stopColor="hsl(40, 100%, 65%)" />
          <stop offset="100%" stopColor="hsl(15, 100%, 50%)" />
        </radialGradient>
      </defs>
    </svg>
  </motion.div>
);

/* ─── Main Component ─── */
const BirthdayMessage = () => {
  const [phase, setPhase] = useState(0);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1500),
      setTimeout(() => setPhase(2), 3500),
      setTimeout(() => setPhase(3), 5500),
      setTimeout(() => setPhase(4), 7500),
      setTimeout(() => setShowConfetti(false), 5000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const fireworkColors = [
    "hsl(340, 90%, 65%)",
    "hsl(280, 80%, 65%)",
    "hsl(200, 85%, 65%)",
    "hsl(45, 95%, 70%)",
    "hsl(15, 90%, 65%)",
    "hsl(160, 70%, 55%)",
  ];

  const sparkles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 8 + Math.random() * 14,
        delay: Math.random() * 4,
      })),
    []
  );

  const lanterns = useMemo(
    () => Array.from({ length: 10 }, (_, i) => ({ x: Math.random() * 90 + 5, delay: i * 1.2 + Math.random() * 2 })),
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 py-8 text-center relative z-10 overflow-hidden"
    >
      {/* Confetti */}
      {showConfetti && <ConfettiExplosion />}

      {/* Fireworks */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {fireworkColors.map((c, i) => (
          <Firework key={i} delay={i * 0.8 + 1} x={10 + i * 15} color={c} />
        ))}
      </div>

      {/* Floating Lanterns */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {lanterns.map((l, i) => (
          <Lantern key={i} delay={l.delay} x={l.x} />
        ))}
      </div>

      {/* Sparkles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {sparkles.map((s, i) => (
          <Sparkle key={i} delay={s.delay} x={s.x} y={s.y} size={s.size} />
        ))}
      </div>

      {/* ─── PHASE 0: Cake Entry ─── */}
      <AnimatePresence>
        {phase >= 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4"
          >
            <BirthdayCake />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── PHASE 1: Big Title ─── */}
      <AnimatePresence>
        {phase >= 1 && (
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
          >
            <h1
              className="font-display text-gradient-love mb-2"
              style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
            >
              Happy Birthday, Baby! 🎂
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1 }}
              style={{
                height: 3,
                background: "linear-gradient(90deg, transparent, hsl(330, 85%, 60%), hsl(280, 70%, 55%), transparent)",
                borderRadius: 4,
                margin: "0 auto",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── PHASE 2: Personal Message ─── */}
      <AnimatePresence>
        {phase >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md mt-6 space-y-3"
          >
            <p className="text-lg font-body text-foreground leading-relaxed">
              To the most <span className="text-love-pink font-bold">amazing, lovable</span> human I know 🎉
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-base font-body text-muted-foreground leading-relaxed"
            >
              You make every single day feel like an adventure. Whether we're doing something crazy or just doing absolutely nothing together — it's always perfect with you. 💫
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-base font-body text-muted-foreground leading-relaxed"
            >
              Thank you for being my partner in crime, my 3 AM therapist, my favourite person to annoy, and the one who makes my heart go 📈📈📈 every single day.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-lg font-body text-love-pink font-bold leading-relaxed"
            >
              You're the reason I believe in forever. I'm so grateful the universe gave me you. I love you endlessly, today and every day. 💖✨
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>



      {/* ─── PHASE 4: Closing Extras ─── */}
      <AnimatePresence>
        {phase >= 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 space-y-3"
          >
            <p className="text-sm font-body text-muted-foreground italic">
              P.S. — Your real gift is on the way... this was just to make you smile 😘
            </p>
            <p className="text-xs font-body text-love-glow">
              Made with too much love and not enough sleep 💻❤️
            </p>

            {/* Bouncy Emoji Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-3 text-3xl pt-2"
            >
              {["🎈", "💖", "🎁", "✨", "🥂", "🎂", "🪄"].map((e, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -18, 0], rotate: [0, 12, -12, 0] }}
                  transition={{ duration: 2.2, delay: i * 0.2, repeat: Infinity }}
                >
                  {e}
                </motion.span>
              ))}
            </motion.div>

            {/* Replay Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setPhase(0);
                setShowConfetti(true);
                setTimeout(() => setPhase(1), 1500);
                setTimeout(() => setPhase(2), 3500);
                setTimeout(() => setPhase(3), 5500);
                setTimeout(() => setPhase(4), 7500);
                setTimeout(() => setShowConfetti(false), 5000);
              }}
              className="mt-3 font-body text-sm px-6 py-2.5 rounded-full border border-love-pink/40 text-love-pink hover:bg-love-pink/10 transition-colors"
            >
              🔄 Replay the magic
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BirthdayMessage;
