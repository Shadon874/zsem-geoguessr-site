import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import "./ReadMore.scss";
import section1IMG from "./section1.jpg";
import section2IMG from "./section2.jpg"
import Description from "../components/Description";
import Podium from "../components/Podium";

export default function ReadMore() {
  return (
    <>
    <section className="section" id="section1">
      <motion.div className="image-container"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
      >
        <img src={section1IMG} className="banner" alt="lokalizacja"/>
        <motion.h1
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5}}
        >
            Lokalizacja <MapPin size={40}/>
        </motion.h1>
      </motion.div>

      <div className="location">
        <div className="steps">
          <motion.div className="step"
            initial={{x: -20, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.3}}
          >
            <div className="circle">1</div>
            <div className="line"></div>
            <div className="step-content">
              <h2>Lokalizacja eliminacji szkolnych</h2>
              <p>Eliminacje odbędą się na terenach poszczególnych szkół, więcej informacji podadzą szkoły prowadzące eliminacje</p>
            </div>
          </motion.div>
         <motion.div className="step"
            initial={{x: -20, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.6}}
          >
            <div className="circle">2</div>
            <div className="line"></div>
            <div className="step-content">
              <h2>Lokalizacja drugiej tury</h2>
              <p>Druga tura odbędzie się w <b>Technikum Elektryczno-Mechanicznym (ZSEM)</b></p>
            </div>
          </motion.div>
           <motion.div className="step"
            initial={{x: -20, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.9}}
          >
            <div className="circle">3</div>
            <div className="step-content">
              <h2>Lokalizacja finałów</h2>
              <p>Finały zawodów geoguessr'a odbędą się w <b>Wyższej Szkole Biznesu</b> w Nowym Sączu</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <section className="section" id="section2">
        <motion.div className="image-container"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5}}
      >
        <img src={section2IMG} className="banner" alt="lokalizacja"/>
        <motion.h1
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5}}
        >
            Forma i przebieg gry <MapPin size={40}/>
        </motion.h1>
      </motion.div>

      <div className="przebieg">
        <Description />
      </div>
    </section>
    <section className="section">
        <Podium/>
    </section>
    </>
  );
}
