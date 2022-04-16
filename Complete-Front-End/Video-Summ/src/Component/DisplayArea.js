import React, {useState} from 'react';
import '../App.css';

export default function DisplayArea(props) {

    const styles = props.dispContent

    return (
        <div className='display-parent-div'>
            {/* <h1 className='disp-heading'>
                How the weather affects the pain of citizen scientists using a smartphone app
            </h1> */}
            <div className='textarea'>
                <div className='textarea-content'>
                    <p style={{display: styles}}>
                        In the mid 2020s, NASA will launch WFIRST, a space telescope. Dark energy is a form of energy that makes up about two thirds of the universe. W first mission will also search for planets beyond our solar system.
                        Nancy Graceroman served as the first Chief of Astronomy in NASA's Office of Space Science. She was instrumental in the early planning of NASA's first Great Space Observatory, the Hubble Space Telescope. The Wide Field Infrared Survey Telescope is now the Nancy Grace Roman Space telescope.
                        Nancy Gracerome joined the agency when it was six months old. She established the most important kind of policies and organizations that have gotten us to where we are in space. Astronomy raised in a time when women were discouraged from pursuing science.
                        Julia McInnery: I'm really excited that the mission is being renamed after Nancy Grace. Roman Alisa Quintana: I have so much admiration for Nancy Greece Roman Julia:. This is something that I'm going to enjoy day after day as the mission continues.
                        Nancy Graceroman was the driving force behind Hubble. She was the first chief of Astronomy, the first women executive at NASA. Nasa doesn't just build missions for science that we know about today.
                        The Roman Observatory will see a swath of the sky that is 100 times larger. We will be surveying the sky, looking across large areas or looking at places where we don't know when to expect something. We can use the information from them as a different way to understand the structure and evolution of the universe.
                        We currently know of over 40 planets outside of our solar system. The Roman space telescope will do some of the most exciting stuff that we learn.
                        Nancy Grace Roman's contributions in developing astronomy in the early days of NASA are truly extraordinary. I think that is important for young girls to see what's possible and to see somebody who is more like them being acknowledged in this way. I really respect how much she was able to accomplish during this time when there really weren't very many role models of women in science and space development.
                        The Nancy Grace room and space telescope will reveal about our universe. This telescope is now named after the extraordinary and pioneering woman. For more information about the Roman space telescope, you can visit NASA.
                    </p>
                </div>
            </div>
            <div className='download-btn-div'>
                {/* <form method='get' action='../public/robots.txt' >
                    <input type="submit" className='download-btn' 
                    id='downloadSubmit' name='download-content' value="Download Summary" />
                </form> */}

            <div className='summary-boxes'>
                <div className='abstract-class'>
                    <div className='abtract-head' >
                        <h1>Key Concept</h1>
                    </div>
                    <p className='collapsible-para' id='collap1'>
                        Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary 
                        Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary 
                    </p>
                </div>
                <div className='abstract-class'>
                    <div className='abtract-head' >
                        <h1>Abstract</h1>
                    </div>
                    <p className='collapsible-para' id='collap2'>
                        Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary 
                        Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary 
                    </p>
                </div>
                <div className='abstract-class'>
                    <div className='abtract-head' >
                        <h1>Highlights</h1>
                    </div>
                    <p className='collapsible-para' id='collap3'>
                        Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary 
                        Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary 
                    </p>
                </div>
                <div className='abstract-class'>
                    <div className='abtract-head' >
                        <h1>Introduction</h1>
                    </div>
                    <p className='collapsible-para' id='collap4'>
                        Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary 
                        Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary 
                    </p>
                </div>
            </div>

            </div>
        </div>
    )
}