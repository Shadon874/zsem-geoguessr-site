import React from "react";
import { motion } from "framer-motion";
import "./Table.scss";
import { leaderboardData } from "../data/ScoresV1.jsx";


const sortedData = [...leaderboardData].sort((a, b) => b.score - a.score);

export default function Table() {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Miejsce</th>
                        <th>Imie i nazwisko</th>
                        <th>Wynik</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.slice(3).map((item, index) => (
                        <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.2 }}
                        >
                            <td>{index + 4}</td>
                            <td>{item.name}</td>
                            <td>{item.score}</td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}