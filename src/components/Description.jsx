import { motion, AnimatePresence } from "framer-motion";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useState } from "react";
import "./Description.scss";

const descriptionContent = [
  { id: 0, title: "Etap szkolny", content: "Uczniowie grają klasyczną rozgrywkę w Geoguessr, w postaci 3 rund, najlepszy gracz z każdej grupy przechodzi do następnego etapu" },
  { id: 1, title: "Etap w ZSEM", content: "z pośrod wszystkich z poprzedniego etapu zostaną wybrani najlepsi do finału" },
  { id: 2, title: "Finał", content: "Wiele rund... Wygywa jeden" },
];

export default function Description() {
  const [step, setStep] = useState(0);

  const handleNext = () => setStep(prev => (prev + 1) % descriptionContent.length);
  const handlePrev = () => setStep(prev => (prev - 1 + descriptionContent.length) % descriptionContent.length);

  return (
    <motion.div className="description-container"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.3}}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={descriptionContent[step].id}
          className="description-box"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2>{descriptionContent[step].title}</h2>
          <p>{descriptionContent[step].content}</p>
        </motion.div>
      </AnimatePresence>

      <div className="navigation">
        <ArrowBigLeft size={30} className="arrow" onClick={handlePrev} />
        <div className="dots">
          {descriptionContent.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === step ? "active" : ""}`}
              onClick={() => setStep(index)}
            />
          ))}
        </div>
        <ArrowBigRight size={30} className="arrow" onClick={handleNext} />
      </div>
    </motion.div>
  );
}
