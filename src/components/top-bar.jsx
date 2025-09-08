import React from "react";
import "./top-bar.scss";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./scroll-fix";

export default function TopBar() {
    const navigate = useNavigate();

    return (
        <div className="header-container">
            <ScrollToTop />
            <header className="header">
                <div onClick={() => navigate("/")} className="logo">
                    <span>Geoguessr</span> ZSEM
                </div>
                <nav className="navigation">
                    <a onClick={() => navigate("/harmonogram")}>Harmonogram</a>
                    <a href="/regulamin.pdf">Regulamin</a>
                    <a onClick={() => navigate("/wyniki")}>Wyniki I Etapu</a>
                    <a onClick={() => navigate("/2024")}>Rok 2024</a>
                </nav>
            </header>
        </div>
    );
}