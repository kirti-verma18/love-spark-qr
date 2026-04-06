import { motion } from "framer-motion";
import { useMemo } from "react";

const colors = [
  "hsl(330, 85%, 60%)",
  "hsl(280, 70%, 55%)",
  "hsl(350, 90%, 65%)",
  "hsl(15, 90%, 65%)",
  "hsl(45, 95%, 65%)",
  "hsl(200, 80%, 60%)",
];

const ConfettiExplosion = () => {
  const pieces = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 500,
        y: Math.random() * -600 - 100,
        rotate: Math.random() * 720,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 4 + Math.random() * 8,
        delay: Math.random() * 0.5,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
          animate={{
            x: p.x,
            y: [0, p.y, p.y + 800],
            rotate: p.rotate,
            opacity: [1, 1, 0],
          }}
          transition={{ duration: 2.5, delay: p.delay, ease: "easeOut" }}
          style={{
            width: p.size,
            height: p.size * 0.6,
            backgroundColor: p.color,
            borderRadius: 2,
            position: "absolute",
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiExplosion;
