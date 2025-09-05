import React, { useRef, useState, Suspense } from "react";
import "./App.scss";
import {
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Stars } from "@react-three/drei";

function Loader() {
  return (
    <div className="earth-loader">
      <div className="spinner"></div>
      <p>Ładowanie Ziemi...</p>
    </div>
  );
}

function GradualSpacing({ text = "Konkurs GeoGuessr ZSEM", isEarthLoaded }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const shouldAnimate = isInView && isEarthLoaded;

  return (
    <div className="gradual-spacing">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.span
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="gradual-char"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

function FadeInButton({ children, isEarthLoaded }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const shouldAnimate = isInView && isEarthLoaded;

  return (
    <motion.button
      ref={ref}
      className="read-more"
      initial={{ opacity: 0, y: 20 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.button>
  );
}

function BackgroundScene({ earthScale = 10, onLoaded }) {
  const [earthMap, bumpMap, cloudMap, galaxyMap] = useLoader(TextureLoader, [
    "./earth.jpg",
    "./earthbump.jpg",
    "./earthCloud.png",
    "./galaxy.png"
  ]);

  const earthRef = useRef();
  const cloudRef = useRef();
  const galaxyRef = useRef();

  useFrame(() => {
    if (galaxyRef.current) galaxyRef.current.rotation.y -= 0.002;
    if (earthRef.current) earthRef.current.rotation.y -= 0.0015;
    if (cloudRef.current) cloudRef.current.rotation.y -= 0.001;
  });

  // Notify parent that textures are loaded
  React.useEffect(() => {
    if (earthMap && bumpMap && cloudMap && galaxyMap) {
      onLoaded();
    }
  }, [earthMap, bumpMap, cloudMap, galaxyMap, onLoaded]);

  return (
    <>
      <directionalLight
        position={[5, 3, 5]}
        intensity={1.5}
        color="#ffffff"
        castShadow
      />

      <ambientLight intensity={0.4} color="#404060" />

      <directionalLight
        position={[-3, -2, -3]}
        intensity={0.3}
        color="#304080"
      />

      <pointLight position={[2, 1, 2]} intensity={0.5} distance={10} />

      <mesh ref={galaxyRef}>
        <sphereGeometry args={[80, 64, 64]} />
        <meshBasicMaterial map={galaxyMap} side={2} transparent opacity={0.8} />
      </mesh>

      <mesh ref={earthRef} position={[0, 0, 0]} scale={[earthScale, earthScale, earthScale]}>
        <sphereGeometry args={[0.6, 64, 64]} />
        <meshStandardMaterial
          map={earthMap}
          bumpMap={bumpMap}
          bumpScale={0.3}
          roughness={0.7}
          metalness={0.3}
        />
      </mesh>

      <mesh ref={cloudRef} scale={[earthScale, earthScale, earthScale]}>
        <sphereGeometry args={[0.63, 64, 64]} />
        <meshStandardMaterial
          map={cloudMap}
          transparent
          opacity={0.8}
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>

      <Stars radius={100} depth={50} count={3000} factor={2} saturation={0} fade speed={0.5} />
    </>
  );
}

function App() {
  const navigate = useNavigate();
  const destinationsRef = useRef(null);
  const [earthScale, setEarthScale] = useState(3);
  const [isEarthLoaded, setIsEarthLoaded] = useState(false);
  const [canvasVisible, setCanvasVisible] = useState(false);

  const handleEarthLoaded = () => {
    setIsEarthLoaded(true);
    // Start fade-in animation after textures are loaded
    setTimeout(() => setCanvasVisible(true), 100);
  };

  return (
    <div className="container">
      <motion.div 
        className="canvas-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: canvasVisible ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <Canvas className="background-canvas" dpr={[1, 2]}>
          <Suspense fallback={null}>
            <BackgroundScene
              earthScale={earthScale}
              onLoaded={handleEarthLoaded}
            />
          </Suspense>
        </Canvas>

      </motion.div>

        <div className="header-container">
          <header className="header">
            <div onClick={() => navigate("/")} className="logo">
              <span>Geoguessr</span> ZSEM
            </div>

            <nav className="navigation">
              <a href="harmonogram">Harmonogram</a>
              <a href="">Regulamin</a>
              <a href="">Wyniki I Etapu</a>
              <a href="2024">Rok 2024</a>
            </nav>
          </header>
        </div>

        <GradualSpacing
          text="Konkurs GeoGuessr ZSEM"
          isEarthLoaded={isEarthLoaded}
        />

        <div className="read-more-wrapper">
          <FadeInButton isEarthLoaded={isEarthLoaded}>Read More</FadeInButton>
        </div>

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
    </div>
  );
}

export default App;