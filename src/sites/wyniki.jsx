import React from "react"
import TopBar from "../components/top-bar"
import galaxyIMG from "./galaxy.png";

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
        </div>
    )
}