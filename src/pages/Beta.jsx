import React from "react";
import { useCountdown } from "../hooks/Countdown";

export default function Beta() {
    const [sec, min, h, d] = useCountdown("1 1 2025 12:00");

    console.log(sec);
    return (
        <div>
            <div className="header">
                <img />
                <p className="text-white">Beta</p>
            </div>

            <div className="body">
                <h1>kostrjanc</h1>
                <div>
                    <h3>1. serbski social media</h3>
                </div>

                <div className="countdown"></div>
            </div>
        </div>
    );
}
