import React from "react";
import './landing-page.css'
import picture from '../Images/chill-music.png'
import intLogo from '../Images/second-sec-img.png'

export default function MainCont() {
    return (
        <div>
            <section className="landing-section">
                <div className="text-content">
                    <div className="intro-text">
                        <div className="text-parent-div">
                            Achieve more than a year's worth of growth by applying research-based learning 
                            strategies.
                            <h1 className="intro-heading">Better <span>Life</span></h1>
                        </div>
                    </div>
                </div>
                <div className="image-content">
                    <img src= {picture} alt="listening-to-music" />
                </div>
            </section>

            <section className="tool-section">
                <div className="tools-div">
                    <h1 className="tool-heading">Our Tools</h1>
                </div>
                <div className="internship">
                    <div className="intern-content">
                        <div>
                        <h1>Lorem</h1>
                            listening-to-musiclistening-to-musiclistening-to-musiclistening-to-musiclistening
                            -to-musiclistening-to-musiclistening-to-musiclistening-to-musiclistening-to-music
                        </div>
                    </div>
                    <div className="intern-image">
                        <img src = {intLogo} alt = "internship-logo" />
                    </div>
                </div>
                <div className="video-summ">
                    <div className="video-summ-image">
                        <img src = {intLogo} alt = "video-summ-logo" />
                    </div>
                    <div className="video-summ-content">
                        <div>
                        <h1>Lorem</h1>
                            listening-to-musiclistening-to-musiclistening-to-musiclistening-to-musiclistening
                            -to-musiclistening-to-musiclistening-to-musiclistening-to-musiclistening-to-music
                        </div>
                    </div>
                </div>
                <div className="article-summ">
                    <div className="article-summ-content">
                        <div>
                        <h1>Lorem</h1>
                            listening-to-musiclistening-to-musiclistening-to-musiclistening-to-musiclistening
                            -to-musiclistening-to-musiclistening-to-musiclistening-to-musiclistening-to-music
                        </div>
                    </div>
                    <div className="article-summ-image">
                        <img src = {intLogo} alt = "article-summ-logo" />
                    </div>
                </div>
            </section>
        </div>
    )
}