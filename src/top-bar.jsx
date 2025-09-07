import React from "react";
import "./App.scss";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
    const navigate = useNavigate();

    return (
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
    );
}