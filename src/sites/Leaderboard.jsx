import React, { useState, useRef } from "react";
import "./leaderboard.scss";
import Podium from "../components/Podium.jsx";
import Table from "../components/table.jsx";
import TopBar from "../components/top-bar.jsx";
import Foot from "../components/footer.jsx";
import galaxyIMG from "./galaxy.png";
import { FinalTimer } from "../components/Timer.jsx";

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
              <Podium />
            </div>
            <div className="table-container">
              <Table />
            </div>
          </>
        ) : (
          <div className="final-timer-container">
            <FinalTimer />
          </div>
        )}
      </div>
      <Foot />
    </div>
  );
}
