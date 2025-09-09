import React from "react"
import TopBar from "../components/top-bar"
import galaxyIMG from "./galaxy.png";
import "./wyniki.scss"
import { motion } from 'framer-motion';

export default function Wyniki() {
    return (
        <div
            style={{
                backgroundImage: `url(${galaxyIMG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                minHeight: "100vh",
                padding: 0,
            }}
        >
            <TopBar />
            <motion.div className="wyniki"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>Wyniki II Etapu zjawią się 22.10.25</h1>
            </motion.div>
        </div>
    )
}