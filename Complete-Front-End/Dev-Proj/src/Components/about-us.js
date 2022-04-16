import React from "react";
import './about-us.css'

export default function AboutUs() {
    return (
        <div>
            <section className Name="about-section">
                <div className Name="abt-div">
                    <h1 className Name="about-heading">About Us</h1>
                </div>
            </section>
            <div className="slider-parent-div">
            <div className ="slider-container">
                
  <div className ="slider">
    <div className ="slides">
      <div id="slides__1" className ="slide">
        <span className ="slide__text">
            1
        </span>
        <a className ="slide__prev" href="#slides__4" title="Next"></a>
        <a className ="slide__next" href="#slides__2" title="Next"></a>
      </div>
      <div id="slides__2" className ="slide">
        <span className ="slide__text">
            2
        </span>
        <a className ="slide__prev" href="#slides__1" title="Prev"></a>
        <a className ="slide__next" href="#slides__3" title="Next"></a>
      </div>
      <div id="slides__3" className ="slide">
        <span className ="slide__text">
            3
        </span>
        <a className ="slide__prev" href="#slides__2" title="Prev"></a>
        <a className ="slide__next" href="#slides__4" title="Next"></a>
      </div>
      <div id="slides__4" className ="slide">
        <span className ="slide__text">
            4
        </span>
        <a className ="slide__prev" href="#slides__3" title="Prev"></a>
        <a className ="slide__next" href="#slides__1" title="Prev"></a>
      </div>
    </div>
    <div className ="slider__nav">
      <a className ="slider__navlink" href="#slides__1"></a>
      <a className ="slider__navlink" href="#slides__2"></a>
      <a className ="slider__navlink" href="#slides__3"></a>
      <a className ="slider__navlink" href="#slides__4"></a>
    </div>
  </div>
</div>
</div>
        </div>
    )
}