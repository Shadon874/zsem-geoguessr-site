import { useState } from "react";
import data from "../../familiada.json";
import "./familiada.scss";

export default function Familiada() {
    const [revealed, setRevealed] = useState(Array(5).fill(false));
    const [points, setPoints] = useState(0);

    const handleReveal = (index) => {
        if (revealed[index]) return;
        const updated = [...revealed];
        updated[index] = true;
        setRevealed(updated);
        setPoints(points + data.answers[index].points);
    };

    return (
        <div className="familiada">
            <h1 className="question">{data.question}</h1>

            <div className="answers-container">
                {data.answers.map((ans, i) => (
                    <div
                        key={i}
                        className={`answer ${revealed[i] ? "show" : ""}`}
                        onClick={() => handleReveal(i)}
                    >
                        <span className="index">{i + 1}</span>

                        <span className="text">
                            {revealed[i] ? ans.text : "........................."}
                        </span>

                        <span className="pts">
                            {revealed[i] ? ans.points : ""}
                        </span>
                    </div>
                ))}
            </div>

            <h3 className="points">PUNKTY: {points}</h3>
        </div>
    );
}
