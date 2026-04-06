import { useEffect, useState } from "react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    const h = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: 12 + Math.random() * 20,
      duration: 4 + Math.random() * 6,
    }));
    setHearts(h);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute text-love-pink opacity-20"
          style={{
            left: `${h.left}%`,
            fontSize: h.size,
            animation: `floatUp ${h.duration}s ease-in-out ${h.delay}s infinite`,
            bottom: "-20px",
          }}
        >
          💕
        </div>
      ))}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
          50% { opacity: 0.4; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default FloatingHearts;
