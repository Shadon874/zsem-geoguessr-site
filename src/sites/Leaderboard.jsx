import React, { useState, useRef } from "react";
import "./leaderboard.scss";
import Podium from "../components/Podium.jsx";
import Table from "../components/table.jsx";
import TopBar from "../components/top-bar.jsx";
import Foot from "../components/footer.jsx";
import galaxyIMG from "./galaxy.png";
import { FinalTimer } from "../components/Timer.jsx";
import Bracket from "../components/brackets/Bracket.jsx";

const leftRounds = [
  {
    id: 1,
    title: "Round 1",
    games: [
      { id: 1, player1: { name: "A" }, player2: { name: "B" } },
      { id: 2, player1: { name: "C" }, player2: { name: "D" } },
      { id: 3, player1: { name: "E" }, player2: { name: "F" } },
      { id: 4, player1: { name: "G" }, player2: { name: "H" } },
    ],
  },
  {
    id: 2,
    title: "Quarterfinals",
    games: [
      { id: 5, player1: { name: "Winner 1" }, player2: { name: "Winner 2" } },
      { id: 6, player1: { name: "Winner 3" }, player2: { name: "Winner 4" } },
    ],
  },
  {
    id: 3,
    title: "Semifinal",
    games: [{ id: 7, player1: { name: "Winner Q1" }, player2: { name: "Winner Q2" } }],
  },
];

const rightRounds = [
  {
    id: 1,
    title: "Round 1",
    games: [
      { id: 8, player1: { name: "I" }, player2: { name: "J" } },
      { id: 9, player1: { name: "K" }, player2: { name: "L" } },
      { id: 10, player1: { name: "M" }, player2: { name: "N" } },
      { id: 11, player1: { name: "O" }, player2: { name: "P" } },
    ],
  },
  {
    id: 2,
    title: "Quarterfinals",
    games: [
      { id: 12, player1: { name: "Winner 5" }, player2: { name: "Winner 6" } },
      { id: 13, player1: { name: "Winner 7" }, player2: { name: "Winner 8" } },
    ],
  },
  {
    id: 3,
    title: "Semifinal",
    games: [{ id: 14, player1: { name: "Winner Q3" }, player2: { name: "Winner Q4" } }],
  },
];

const finalGame = {
  player1: { name: "Left Finalist" },
  player2: { name: "Right Finalist" },
};


export default function Leaderboard() {

  const [activeTab, setActiveTab] = useState("quarter");
  const quarterRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <div
      style={{
        backgroundImage: `url(${galaxyIMG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        padding: 0,
      }}
    >
      <TopBar />
      <div className="leaderboard-container">
        <div className="stats-tabs">
          <div
            ref={quarterRef}
            className={`tab ${activeTab === "quarter" ? "active" : ""}`}
            onClick={() => setActiveTab("quarter")}
          >
            Półfinał
          </div>
          <div
            ref={finalRef}
            className={`tab ${activeTab === "final" ? "active" : ""}`}
            onClick={() => setActiveTab("final")}
          >
            Finał
          </div>
        </div>

        {activeTab === "quarter" ? (
          <>
            <div className="podium-container">
              <Podium/>
            </div>
            <div className="table-container">
              <Table />
            </div>
          </>
        ) : (
          <div>
            <FinalTimer final={true} data={new Date(2025, 10, 20, -1, 0, 0)}/>
            {/* <Bracket leftRounds={leftRounds} rightRounds={rightRounds} finalGame={finalGame}/> */}
          </div>
        )}
      </div>
      <Foot />
    </div>
  );
}
