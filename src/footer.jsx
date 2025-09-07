import React from "react";
import "./App.scss";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Foot() {
  return (
    <footer className="footer">
            <div className="footer-section">
              <h3>O nas</h3>
              <p>
                Konkurs międzyszkolny GeoGuessr organizowany przez Zespół Szkół
                Elektro-Mechanicznych to wyjątkowa okazja, by połączyć zabawę z
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
          </footer>
  );
}