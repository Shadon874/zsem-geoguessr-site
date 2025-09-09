import React, { useState } from "react";
import "./footer.scss";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Foot() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const containerVariants = {
    open: {
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
    closed: {
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 20 }}
      transition={{ duration: 0.5, y: 0 }}
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
          <a onClick={()=> {alert("Mamy za dobrych programistów by były jakieś problemy. Supportu nie ma")}}>Support</a>
          <div className="github-links">
            <a onClick={() => setIsDropdownVisible((prev) => !prev)}>
              Github
            </a>
            <AnimatePresence>
              {isDropdownVisible && (
                <motion.div
                  className="dropdown"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={containerVariants}
                >
                  <motion.a onClick={() => open("https://github.com/TenObcy125")} variants={itemVariants}>Mariusz Gruca</motion.a>
                  <motion.a onClick={() => open("https://github.com/Shadon874")} variants={itemVariants}>Hubert Wróbel</motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="footer-section">
          <h3>Bądź na bieżąco</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/zsemtv/" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100063594517495" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} />
            </a>
            <a href="https://www.youtube.com/@ZSEMTVOFFICIAL" target="_blank" rel="noopener noreferrer">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="sponsors">
        <img src="../zsem.png" alt="zsem" />
        <img
          className="stow"
          src="../stow.png"
          alt="stowarzyszenie sądecki elektryk"
        />
      </div>
    </motion.footer>
  );
}
