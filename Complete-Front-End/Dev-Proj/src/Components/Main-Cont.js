import React from "react";
import './landing-page.css'
import picture from '../Images/chill-music.png'
import intLogo from '../Images/int-img.jpg'

export default function MainCont() {
    return (
        <div>
            <section className="landing-section">
                <div className="text-content">
                    <div className="intro-text">
                        <div className="text-parent-div">
                            {/* Achieve more than a year's worth of growth by applying research-based learning 
                            strategies. */}
                            <h1 className="intro-heading">To UnHaze <span>the Unknown</span></h1>
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
                        <h1><a target="_blank" rel="noreferrer" href="http://localhost:3001/">Internship-Finder</a></h1>
                        HaZie will show a list of all the internships from different websites in a 
                        consolidated way for your ease.
                        </div>
                    </div>
                    <div className="intern-image">
                        <div className="circle-img">
                        <img className="internship-images" src = {intLogo} alt = "internship-logo" />
                        </div>
                    </div>
                </div>
                <div className="video-summ">
                    <div className="video-summ-image">
                            <img className="internship-images"
                            src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Notepad_icon.svg/2048px-Notepad_icon.svg.png" 
                            alt = "video-summ-logo" />
                    </div>
                    <div className="video-summ-content">
                        <div>
                        <h1><a target="_blank"  href="http://localhost:3002/" rel="noreferrer">Text Summarizer</a></h1>
                        Know if the content in a large document is relevant to your needs by getting section
                         wise summary.
                        </div>
                    </div>
                </div>
                <div className="article-summ">
                    <div className="article-summ-content">
                        <div>
                        <h1><a href="http://localhost:3002/" rel="noreferrer" target="_blank" >Minutes of the Meeting (MoM)</a></h1>
                        Get notes and  summaries for educational videos along with Minutes of meetings for recorded sessions    
                        </div>
                    </div>
                    <div className="article-summ-image">
                        <img 
                        className="internship-images"
                        src = "https://static01.nyt.com/images/2017/04/20/business/business_meetings-slide-75U2/business_meetings-slide-75U2-square320-v5.jpg" 
                        alt = "article-summ-logo" />
                    </div>
                </div>
            </section>
        </div>
    )
}