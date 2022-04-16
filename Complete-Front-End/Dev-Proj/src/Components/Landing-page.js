import React from "react";
import './landing-page.css'

export default function Landing() {

    return (
        <div>
            {/* Nav-Bar */}
            <section>
                <nav>
                    <ul className="main-menus">
                        <li className="logo-name">HAZIE</li>
                    </ul>
                    <ul className="nav-btns">
                        <li>Home</li>
                        <li>Features</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                            {/* <button className="sign-up-btn">Sign Up</button>
                            <button className="sign-in-btn">Log In</button> */}
                    </ul>
                </nav>
            </section>            

        </div>
    )
}