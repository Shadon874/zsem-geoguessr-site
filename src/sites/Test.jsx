import "./Test.scss"
import { motion } from "framer-motion"
import { BellDotIcon } from "lucide-react"

export default function Test() {
    return (
        <>
            <motion.div 
                className="event-date"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="event-day">
                    <h1 className="day">10 paź</h1>
                    <p>10:00 - 14:00</p>
                </div>
                <button>
                    Przypomnij mi 
                    <span className="bell"><BellDotIcon/></span>
                </button>
            </motion.div>
        </>
    )
}
