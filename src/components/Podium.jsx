import React from 'react';
import "./Podium.scss"
import { motion } from 'framer-motion';
import { leaderboardData } from "../data/ScoresV1.jsx";

const sortedData = [...leaderboardData].sort((a, b) => b.score - a.score);

const podiumData = [
    { place: 2, price: sortedData[1].name, height: 200 },
    { place: 1, price: sortedData[0].name, height: 250 },
    { place: 3, price: sortedData[2].name, height: 150 },
];

export default function Podium() {
    return (
        <div className="podium-container">
            <motion.h1
                initial={{opacity: 0, y: 10}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.3}}
            >
                Podium
            </motion.h1>
            {/* Ceny w jednej linii */}
            <div className="prices-row">
                {podiumData.map((item, index) => (
                    <motion.div className="price" 
                        key={index}
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                    >
                        <p>{item.price}</p>
                    </motion.div>
                ))}
            </div>

            {/* Słupki podium */}
            <div className="bars-row">
                {podiumData.map((item, index) => (
                    <motion.div className="podium-element" key={index}>
                        <motion.div className="podium-place"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                            style={{ height: `${item.height}px`, transformOrigin: "bottom" }}
                        >
                            <h3 className='place'>{item.place}</h3>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
