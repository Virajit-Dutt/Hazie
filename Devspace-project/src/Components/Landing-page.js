import React from "react";
import './landing-page.css'

export default function Landing() {

    return (
        <div>
            {/* Nav-Bar */}
            <section>
                <nav>
                    <ul className="main-menus">
                        <li className="logo-name">HAZIER</li>
                        <li>Home</li>
                        <li>Features</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul className="nav-btns">
                            <button className="sign-up-btn">Sign Up</button>
                            <button className="sign-in-btn">Log In</button>
                    </ul>
                </nav>
            </section>            

        </div>
    )
}