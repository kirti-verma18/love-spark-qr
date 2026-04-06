import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import ShootingStars from "@/components/ShootingStars";
import WelcomeScreen from "@/components/WelcomeScreen";
import DoYouLikeMe from "@/components/DoYouLikeMe";
import LoveSlider from "@/components/LoveSlider";
import LoveQuestions from "@/components/LoveQuestions";
import FunScreen from "@/components/FunScreen";
import BalloonMessage from "@/components/BalloonMessage";
import LoveLetter from "@/components/LoveLetter";
import BirthdayMessage from "@/components/BirthdayMessage";

type Screen = "welcome" | "doyoulikeme" | "slider" | "questions" | "fun" | "balloons" | "letter" | "birthday";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("welcome");

  return (
    <div className="min-h-screen bg-gradient-soft overflow-hidden relative">
      <FloatingHearts />
      <ShootingStars />
      <AnimatePresence mode="wait">
        {screen === "welcome" && <WelcomeScreen key="welcome" onNext={() => setScreen("doyoulikeme")} />}
        {screen === "doyoulikeme" && <DoYouLikeMe key="doyoulikeme" onNext={() => setScreen("slider")} />}
        {screen === "slider" && <LoveSlider key="slider" onNext={() => setScreen("questions")} />}
        {screen === "questions" && <LoveQuestions key="questions" onNext={() => setScreen("fun")} />}
        {screen === "fun" && <FunScreen key="fun" onNext={() => setScreen("balloons")} />}
        {screen === "balloons" && <BalloonMessage key="balloons" onNext={() => setScreen("letter")} />}
        {screen === "letter" && <LoveLetter key="letter" onNext={() => setScreen("birthday")} />}
        {screen === "birthday" && <BirthdayMessage key="birthday" />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
