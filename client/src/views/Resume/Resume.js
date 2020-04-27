import React, { useEffect, useState } from "react"
import "./Resume.css";
import ResumeCard from "./../../components/ResumeCard/ResumeCard"
const Resume = () => {
    return(
        <div className="backImage">
            <div className="center">
                <ResumeCard/>
            </div>
        </div>
    );
}

export default Resume;