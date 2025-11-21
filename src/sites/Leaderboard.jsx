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
      { id: 1, player1: { name: "Jakub Rumin" }, player2: { name: "Jakub Derymacki" } },
      { id: 2, player1: { name: "Tomasz Warchoł" }, player2: { name: "Kamil Bodziony" } },
      { id: 3, player1: { name: "Damian Niemiec" }, player2: { name: "Piotr Gutkowski" } },
      { id: 4, player1: { name: "Igor Małek" }, player2: { name: "Adam Borek" } },
    ],
  },
  {
    id: 2,
    title: "Quarterfinals",
    games: [
      { id: 5, player1: { name: "Jakub Derymacki" }, player2: { name: "Tomasz Warchoł" } },
      { id: 6, player1: { name: "Piotr Gutowski" }, player2: { name: "Adam Borek" } },
    ],
  },
  {
    id: 3,
    title: "Semifinal",
    games: [{ id: 7, player1: { name: "Jakub Derymacki" }, player2: { name: "Piotr Gutowski" } }],
  },
];

const rightRounds = [
  {
    id: 1,
    title: "Round 1",
    games: [
      { id: 8, player1: { name: "Jakub Wójcik" }, player2: { name: "Konrad Matusik" } },
      { id: 9, player1: { name: "Wiktor Gruca" }, player2: { name: "Jan Sadecki" } },
      { id: 10, player1: { name: "Nikodem Chyc-Kuros" }, player2: { name: "Wojciech Hebda" } },
      { id: 11, player1: { name: "Oliwier Tokarczyk" }, player2: { name: "Kacper Stafin" } },
    ],
  },
  {
    id: 2,
    title: "Quarterfinals",
    games: [
      { id: 12, player1: { name: "Konrad Matusik" }, player2: { name: "Wiktor Gruca" } },
      { id: 13, player1: { name: "Wojciech Hebda" }, player2: { name: "Oliwier Tokarczyk" } },
    ],
  },
  {
    id: 3,
    title: "Semifinal",
    games: [{ id: 14, player1: { name: "Korad Matusik" }, player2: { name: "Wojciech Hebda" } }],
  },
];

const finalGame = {
  player1: { name: "Wojciech Hebda" },
  player2: { name: "Piotr Gutowski" },
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
            <Bracket leftRounds={leftRounds} rightRounds={rightRounds} finalGame={finalGame}/>
          </div>
        )}
      </div>
      <Foot />
    </div>
  );
}
