import React from "react";
import "../App.scss";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export default function Foot() {
  return (
    <motion.footer className="footer"
    initial={{opacity: 0}}
      whileInView={{opacity: 1, y: 20}}
      transition={{duration: 0.5, y: 0}}
    >
      <div className="main-footer">
        <div className="footer-section">
          <h3>O nas</h3>
          <p>
            Konkurs międzyszkolny GeoGuessr organizowany przez Zespół Szkół
            Elektryczno-Mechanicznych to wyjątkowa okazja, by połączyć zabawę z
            nauką geografii.
          </p>
        </div>
        <div className="footer-section">
          <h3>Linki</h3>
          <a href="https://zsem.edu.pl">Strona ZSEM</a>
          <a href="#tours">Support</a>
          <a href="#blog">Blog</a>
        </div>
        <div className="footer-section">
          <h3>Bądź na bierząco</h3>
          <div className="social-icons">
            <Instagram size={20} />
            <Facebook size={20} />
            <Youtube size={20} />
          </div>
        </div>
      </div>
      <div className="sponsors">
        <img src="../zsem.png" alt="zsem" />
        <img className="stow" src="../stow.png" alt="stowarzyszenie sądecki elektryk" />
      </div>
    </motion.footer>
  );
}