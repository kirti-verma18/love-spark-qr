import { useEffect, useState } from "react";

interface Star {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

const ShootingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated: Star[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 2 + Math.random() * 2,
    }));
    setStars(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-0.5 h-16 bg-gradient-to-b from-white/60 to-transparent rounded-full"
          style={{
            left: `${star.left}%`,
            top: '-64px',
            animation: `shooting-star ${star.duration}s linear ${star.delay}s infinite`,
            transform: 'rotate(35deg)',
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
