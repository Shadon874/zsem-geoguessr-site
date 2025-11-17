import { motion } from "framer-motion";
import Earth from "./components/globe";
import DarkVeil from "./components/DarkVeil";
import GlassSurface from "./components/GlassSurface";
import { RainbowButton } from "@/components/ui/rainbow-button";

function hexToRgbFloat(hex) {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = ((bigint >> 16) & 255) / 255;
  const g = ((bigint >> 8) & 255) / 255;
  const b = (bigint & 255) / 255;
  return [r, g, b];
}

// Animacja dla pojedynczego słowa
const wordAnimation = {
  hidden: { opacity: 0, filter: "blur(4px)", y: 20 },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)", 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function App2() {
  const headline = "Konkurs GeoGuessr Rywalizuj, wygrywaj nagrody";

  return (
    <div className="min-h-screen bg-black text-white relative overflow-y-auto">
      <div className="fixed inset-0 z-0">
        <DarkVeil />
      </div>

      <nav className="relative z-20 py-4">
        <div className="flex justify-center">
          <GlassSurface width={800} borderRadius={50}>
            <div className="flex w-full justify-between items-center px-8 py-4">
              <h1 className="text-2xl font-semibold tracking-tight">GEOGUESSR</h1>
              <ul className="flex flex-row gap-6 text-lg">
                <li className="hover:text-blue-400 cursor-pointer transition">Harmonogram</li>
                <li className="hover:text-blue-400 cursor-pointer transition">Regulamin</li>
                <li className="hover:text-blue-400 cursor-pointer transition">Wyniki II etapu</li>
                <li className="hover:text-blue-400 cursor-pointer transition">Rok 2024</li>
              </ul>
            </div>
          </GlassSurface>
        </div>
      </nav>

      <main className="relative z-10 flex flex-col items-center text-center px-6">
        <article className="max-w-3xl mt-20 mb-32">
          <motion.h1
  className="text-6xl mb-6 font-bold leading-[100%] tracking-tighter flex flex-wrap justify-center"
  initial="hidden"
  animate="visible"
>
  {headline.split(" ").map((word, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="inline-block mr-2 bg-gradient-to-b from-[#c9a0ff] to-[#6b21a8] bg-clip-text text-transparent"
    >
      {word}
    </motion.span>
  ))}
</motion.h1>




          <span className="inline-block text-lg border p-2 px-6 mt-4 w-fit mx-auto rounded-full border-[#6b21a8] bg-[#8052bdf3] hover:bg-[#193266] transition">
            Dołącz
          </span>

          <div className="mt-16">
            <Earth
              glowColor={hexToRgbFloat("#8052bd")}
              baseColor={hexToRgbFloat("#6b21a8")}
              className="w-[500px] max-w-xl mx-auto"
            />
          </div>
        </article>
      </main>
    </div>
  );
}
