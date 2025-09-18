import { useEffect, useState } from "react";
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import "./Timer.scss";

export function FinalTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [prevTimeLeft, setPrevTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const finalDate = new Date(2025, 9, 30, 15, 0, 0);

        const interval = setInterval(() => {
            const now = new Date();

            const days = Math.max(0, differenceInDays(finalDate, now));
            const hours = Math.max(0, differenceInHours(finalDate, now) % 24);
            const minutes = Math.max(0, differenceInMinutes(finalDate, now) % 60);
            const seconds = Math.max(0, differenceInSeconds(finalDate, now) % 60);

            setPrevTimeLeft({ ...timeLeft });
            setTimeLeft({
                days,
                hours,
                minutes,
                seconds,
            });

            if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    const splitNumber = (num) => {
        const str = String(num).padStart(2, "0");
        return {
            tens: parseInt(str[0]),
            ones: parseInt(str[1]),
        };
    };

    const digitAnimation = {
        initial: {
            rotateX: -90,
            opacity: 0,
            transformOrigin: "bottom center",
        },
        animate: {
            rotateX: 0,
            opacity: 1,
            transformOrigin: "bottom center",
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
        exit: {
            rotateX: 90,
            opacity: 0,
            transformOrigin: "top center",
            transition: {
                duration: 0.8,
                ease: "easeIn",
            },
        },
    };

    const AnimatedDigit = ({ digit, prevDigit, unit, position, isAnimating }) => {
        return (
            <div className="digit-container">
                <AnimatePresence mode="popLayout">
                    {isAnimating && (
                        <motion.span
                            key={`${unit}-${position}-${digit}`}
                            className="digit"
                            variants={digitAnimation}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            {digit}
                        </motion.span>
                    )}
                    {!isAnimating && <span className="digit">{digit}</span>}
                </AnimatePresence>
            </div>
        );
    };

    const TimeUnit = ({ value, prevValue, label, isSecond }) => {
        const currentDigits = splitNumber(value);
        const prevDigits = splitNumber(prevValue);

        const isOnesChanged = currentDigits.ones !== prevDigits.ones;
        const isTensChanged = currentDigits.tens !== prevDigits.tens;

        return (
            <div className="time-item">
                <div className="time-value">
                    <AnimatedDigit
                        digit={currentDigits.tens}
                        prevDigit={prevDigits.tens}
                        unit={label}
                        position="tens"
                        isAnimating={isSecond && isTensChanged}
                    />
                    <AnimatedDigit
                        digit={currentDigits.ones}
                        prevDigit={prevDigits.ones}
                        unit={label}
                        position="ones"
                        isAnimating={isSecond && isOnesChanged}
                    />
                </div>
                <div className="time-label">{label}</div>
            </div>
        );
    };

    return (
        <div className="timer-container">
            <h1>Finały odbędą się za</h1>
            <motion.div
                className="time-box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <TimeUnit value={timeLeft.days} prevValue={prevTimeLeft.days} label="Dni" isSecond={false} />
                <TimeUnit value={timeLeft.hours} prevValue={prevTimeLeft.hours} label="Godz" isSecond={false} />
                <TimeUnit value={timeLeft.minutes} prevValue={prevTimeLeft.minutes} label="Min" isSecond={false} />
                <TimeUnit value={timeLeft.seconds} prevValue={prevTimeLeft.seconds} label="Sek" isSecond={true} />
            </motion.div>
        </div>
    );
}
