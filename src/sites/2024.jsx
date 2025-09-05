import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import "./2024.scss"

export default function Rok2024() {
    return (
       <div className="memories">
        <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
        >
            Edycja 2024
        </motion.h1>

        <div className="sociale">
            <motion.div 
                className="left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <video controls >
                    <source src="./2025.mp4" type="video/mp4"/>
                </video>
            </motion.div>

            <motion.div 
                className="right"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h3>Zobacz jak się wtedy bawiliśmy</h3>
                <p>Filmik i zdjęcia z tego wydarzenia można obejrzeć na Instagramie ZSEMTV</p>
                <div className="social-links">
                    <a href="#"><Instagram size={18}/> Instagram Elektryka</a>
                    <a href="#"><Instagram size={18}/> Instagram ZSEM TV</a>
                </div>
            </motion.div>
        </div>
       </div>
    )
}
