import React, { useRef } from "react";
import "./App.scss";
import { useNavigate } from 'react-router-dom';
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  LogIn,
  UserPlus,
} from "lucide-react";

function App() {
  const navigate = useNavigate();
  const destinationsRef = useRef(null);

  const scrollLeft = () => {
    if (destinationsRef.current) {
      destinationsRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (destinationsRef.current) {
      destinationsRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      {/* Canvas with content above it */}
      <div className="canvas-container">
        <canvas className="background-canvas">
        </canvas>
        
        <div className="header-container">
          <header className="header">
            <div className="logo"><span>Geoguessr</span> ZSEM</div>
            <nav className="navigation">
              <a href="#destinations">Harmonogram</a>
              <a href="#tours">Regulamin</a>
              <a href="#blog">Jak grać?</a>
              <a href="#contact">Wyniki I Etapu</a>
            </nav>
          </header>
        </div>
      </div>

      {/* Stopka - now placed below the canvas container */}
      <footer className="footer">
        <div className="footer-section">
          <h3>O nas</h3>
          <p>
          Konkurs międzyszkolny GeoGuessr organizowany przez Zespół Szkół Elektro-Mechanicznych to wyjątkowa okazja, by połączyć zabawę z nauką geografii.
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
    </div>
  );
}

export default App;