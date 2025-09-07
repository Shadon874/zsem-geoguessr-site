import React from "react";
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import "./Creators.scss";

import obcyImage from "./obcy.jpg"

export default function Creators() {
  return (
    <motion.div
      className="creator-card"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, boxShadow: '0 18px 40px rgba(15, 23, 42, 0.15)' }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="card-top">
        <div className="avatar">
          <img className="avatar-fallback" src={obcyImage} alt="avatar" />
        </div>
        <div className="card-info">
          <h3 className="name">TenObcy125</h3>
          <p className="role">Programista • Nowy Sącz</p>
        </div>
        <button onClick={() => open("https://github.com/TenObcy125")} className="follow github-btn">
          <Github size={16} />
          <span>Github</span>
        </button>
      </div>

      <p className="bio">
        Programuje aplikacje webowe w technologiach React i tailwindCSS oraz backend w expressJS.
      </p>

      <div className="stats">
        <div className="stat">
          <div className="stat-num">1.2k</div>
          <div className="stat-label">Followers</div>
        </div>
        <div className="stat">
          <div className="stat-num">284</div>
          <div className="stat-label">Following</div>
        </div>
        <div className="stat">
          <div className="stat-num">56</div>
          <div className="stat-label">Projects</div>
        </div>
      </div>
    </motion.div>
  );
}
