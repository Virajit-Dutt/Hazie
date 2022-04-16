import React from "react";
import './Navbar.css'

export default function Navbar() {
    return(

        <div className="nav-div">
            <nav>
                <ul className="logo-name">
                    <li className="main-list logo-list">Hazier</li>
                    <li className="main-list vid-MoM">Video-MoM</li>
                    <li className="main-list text-MoM">Text-MoM</li>
                </ul>
            </nav>
        </div>
    )
}