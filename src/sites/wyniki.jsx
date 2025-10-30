import React from "react";
import TopBar from "../components/top-bar";
import galaxyIMG from "./galaxy.png";
import "./wyniki.scss";
import Foot from "../components/footer";
import { Bracket } from "@oliverlooney/react-brackets";

const leftRounds = [
  {
    title: "Round of 32",
    seeds: [
      { id: 1, teams: [{ name: "Player 1" }, { name: "Player 2" }] },
      { id: 2, teams: [{ name: "Player 3" }, { name: "Player 4" }] },
      { id: 3, teams: [{ name: "Player 5" }, { name: "Player 6" }] },
      { id: 4, teams: [{ name: "Player 7" }, { name: "Player 8" }] },
      { id: 5, teams: [{ name: "Player 9" }, { name: "Player 10" }] },
      { id: 6, teams: [{ name: "Player 11" }, { name: "Player 12" }] },
      { id: 7, teams: [{ name: "Player 13" }, { name: "Player 14" }] },
      { id: 8, teams: [{ name: "Player 15" }, { name: "Player 16" }] },
    ],
  },
  {
    title: "Round of 16",
    seeds: [
      { id: 17, teams: [{ name: "Winner M1" }, { name: "Winner M2" }] },
      { id: 18, teams: [{ name: "Winner M3" }, { name: "Winner M4" }] },
      { id: 19, teams: [{ name: "Winner M5" }, { name: "Winner M6" }] },
      { id: 20, teams: [{ name: "Winner M7" }, { name: "Winner M8" }] },
    ],
  },
  {
    title: "Quarterfinals",
    seeds: [
      { id: 21, teams: [{ name: "Winner M17" }, { name: "Winner M18" }] },
      { id: 22, teams: [{ name: "Winner M19" }, { name: "Winner M20" }] },
    ],
  },
  {
    title: "Semifinals",
    seeds: [
      { id: 23, teams: [{ name: "Winner Q1" }, { name: "Winner Q2" }] },
    ],
  },
];

const rightRounds = [
  {
    title: "Round of 32",
    seeds: [
      { id: 9,  teams: [{ name: "Player 17" }, { name: "Player 18" }] },
      { id: 10, teams: [{ name: "Player 19" }, { name: "Player 20" }] },
      { id: 11, teams: [{ name: "Player 21" }, { name: "Player 22" }] },
      { id: 12, teams: [{ name: "Player 23" }, { name: "Player 24" }] },
      { id: 13, teams: [{ name: "Player 25" }, { name: "Player 26" }] },
      { id: 14, teams: [{ name: "Player 27" }, { name: "Player 28" }] },
      { id: 15, teams: [{ name: "Player 29" }, { name: "Player 30" }] },
      { id: 16, teams: [{ name: "Player 31" }, { name: "Player 32" }] },
    ],
  },
  {
    title: "Round of 16",
    seeds: [
      { id: 24, teams: [{ name: "Winner M9" }, { name: "Winner M10" }] },
      { id: 25, teams: [{ name: "Winner M11" }, { name: "Winner M12" }] },
      { id: 26, teams: [{ name: "Winner M13" }, { name: "Winner M14" }] },
      { id: 27, teams: [{ name: "Winner M15" }, { name: "Winner M16" }] },
    ],
  },
  {
    title: "Quarterfinals",
    seeds: [
      { id: 28, teams: [{ name: "Winner M24" }, { name: "Winner M25" }] },
      { id: 29, teams: [{ name: "Winner M26" }, { name: "Winner M27" }] },
    ],
  },
  {
    title: "Semifinals",
    seeds: [
      { id: 30, teams: [{ name: "Winner Q3" }, { name: "Winner Q4" }] },
    ],
  },
];

const finalRound = [
  {
    title: "Final",
    seeds: [
      { id: 31, teams: [{ name: "Winner Left" }, { name: "Winner Right" }] },
    ],
  },
];


export default function Wyniki() {
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
      <div className="results-header">
        <Bracket
          bracketClassName="bracket"
          rounds={leftRounds}
          rightRounds={rightRounds}
          finalRound={finalRound}
          twoSided={true}
        />
      </div>
      <Foot />
    </div>
  );
}
