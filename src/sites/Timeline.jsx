import React from "react";
import { motion } from "framer-motion";
import { School, HandFist, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Timeline.scss";
import galaxyIMG from "./galaxy.png";
import TopBar from "../top-bar";
import Foot from "../footer";

const items = [
  {
    id: 1,
    date: "do 10 października",
    title: "Eliminacje szkolne",
    description: "w każdej szkole odbędą się eliminacje z pośród których wyłonieni zostaną najlepsi gracze",
    icon: School,
  },
  {
    id: 2,
    date: "x października",
    title: "Etap 2",
    description: "Wyłonieni z wcześniejszych etapów uczniowie walczą o dostanie się do finałowego etapu.",
    icon: HandFist,
  },
  {
    id: 3,
    date: "x listopada",
    title: "Wielki Finał",
    description: "Uczestbicy rywalizują w ostatnim etapie w Wyższej Szkole Biznesu.",
    icon: Trophy,
  },
];

// Animacje dla pojedynczego elementu
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3, // kolejność fade-in
      duration: 0.5,
    },
  }),
};

export default function Timeline() {
  const navigate = useNavigate();

  return (

    <div  style={{
    backgroundImage: `url(${galaxyIMG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: 0,
  }}>
      <TopBar />

      <div className="timeline">
        <h1>Harmonogram</h1>
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              className="timeline-item"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={index} // używamy index do delay
            >
              <div className="timeline-indicator">
                <Icon size={20} />
                {index < items.length - 1 && <span className="timeline-line" />}
              </div>
              <div className="timeline-content">
                {item.date && <span className="timeline-date">{item.date}</span>}
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <Foot />
    </div>
  );
}
