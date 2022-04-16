import './navbar.css'
import React, { useState } from "react"
import data from "../data.json"
import data2 from "../data2.json"
import data3 from "../data3.json"

export default function MainCont(props) {

    // const[dispBool, setDispBool] = useState(true)
    // const[contHead, setContHead] = useState('')

    // const [jsonData,setJsonData] = useState('')

    // if (props.task === "Web development"){
    //     setJsonData("data")
    // } else {
    //     setJsonData("data2")
    // }

    // const [disp, setDisp] = useState("block")

    const jsonData = (

    props.task === "web dev"
    ?
    data
    :
    props.task === "data analyst"
    ?
    data2
    :
    data3

    )


    return (
        <form method='post' action=''>
            <div className='parent-div'>
                    <div className='main-cont-div'>
                            <div className='internship-card'>

                                <div className='intern-company-card'>
                                        {
                                            jsonData.map(post => {
                                                return (
                                                    <div className='intern-company-content' 
                                                    >                                        
                                                    <p className='card-heading'>{post.cardHeading}</p>
                                                    <p className='company-name'>{post.companyName}</p>
                                                    <div className='location-div'>
                                                        <i class="fa-solid fa-location-pin"></i>
                                                        <p>{post.location}</p>
                                                    </div>
            
                                                    <div className='detail-div'>
                                                        <div className='internship-details'>
                                                            <p className='int-heads'>Start Date</p>
                                                            <p className='int-info'>{post.startDate}</p>
                                                        </div>
                                                        <div className='internship-details'>
                                                            <p className='int-heads'>Duration</p>
                                                            <p className='int-info'>{post.duration}</p>
                                                        </div>
                                                        <div className='internship-details'>
                                                            <p className='int-heads'>Stipend</p>
                                                            <p className='int-info'>{post.stipend}</p>
                                                        </div>
                                                        <div className='internship-details'>
                                                            <p className='int-heads'>Apply By</p>
                                                            <p className='int-info'>{post.applyBy}</p>
                                                        </div>
            
                                                    </div>
                                                        <div className='company-saying'>
                                                            <p className='int-with-offer'>Internship</p>
                                                            <a target="_blank" rel="norefferer noreferrer" href={post.link} className='view-details'>Apply Now</a>
                                                        </div>
                                                    </div>
                                            )
                                            }
                                            )
                                        } 
                                </div>
                                
                            </div>
                    </div>
            </div>
        </form>
    )
}