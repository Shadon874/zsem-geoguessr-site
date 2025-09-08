import { motion } from "framer-motion";
import { MapPin, Gamepad2, Trophy } from "lucide-react";

import "./ReadMore.scss";
import section1IMG from "./section1.jpg";
import section2IMG from "./section2.jpg"
import sectiom3IMG from "./section3.jpg"

import galaxyIMG from "./galaxy.png"  

import Description from "../components/Description";
import Podium from "../components/Podium";

import TopBar from "../components/top-bar";
import Foot from "../components/footer";

export default function ReadMore() {
  return (
    <div className="more-container" style={{
      backgroundImage: `url(${galaxyIMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          padding: 0,
    }}>
    <TopBar/>
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
            Forma i przebieg gry <Gamepad2 size={40}/>
        </motion.h1>
      </motion.div>

      <div className="przebieg">
        <Description />
      </div>
    </section>
    <section className="section">
      <motion.div className="image-container"
        initial={{y: 20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5}}
      >
        <img src={sectiom3IMG} className="banner" alt="lokalizacja"/>
        <motion.h1
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5}}
        >
            Nagrody i sponsorzy <Trophy size={40}/>
        </motion.h1>
      </motion.div>
        <Podium/>
        <div className="sponsorzy">
          <h2>Nasi sponsorzy</h2>
        </div>
    </section>
    <Foot />
    </div>
  );
}
