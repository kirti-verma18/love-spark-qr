import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import WelcomeScreen from "@/components/WelcomeScreen";
import LoveSlider from "@/components/LoveSlider";
import LoveQuestions from "@/components/LoveQuestions";
import FunScreen from "@/components/FunScreen";
import BirthdayMessage from "@/components/BirthdayMessage";

type Screen = "welcome" | "slider" | "questions" | "fun" | "birthday";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("welcome");

  return (
    <div className="min-h-screen bg-gradient-soft overflow-hidden relative">
      <FloatingHearts />
      <AnimatePresence mode="wait">
        {screen === "welcome" && <WelcomeScreen key="welcome" onNext={() => setScreen("slider")} />}
        {screen === "slider" && <LoveSlider key="slider" onNext={() => setScreen("questions")} />}
        {screen === "questions" && <LoveQuestions key="questions" onNext={() => setScreen("fun")} />}
        {screen === "fun" && <FunScreen key="fun" onNext={() => setScreen("birthday")} />}
        {screen === "birthday" && <BirthdayMessage key="birthday" />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
