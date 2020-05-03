import React, { useEffect, useState } from "react"
import "./Home.css";
import Navbar from "../../components/navbar/navbar.js";
import Image from "../../components/image/image.js";
import Typewriter from 'typewriter-effect';
import Button from 'react-bootstrap/Button';
import Footer from "./../../components/Footer/Footer.js";
import { useMediaPredicate } from "react-media-hook";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import 'semantic-ui-css/semantic.min.css'
const Home = () => {
    const[a, seta] = useState(null);
    const isMobile = useMediaPredicate("(max-width: 768px)");

    const onClick = e => {
        window.location.href="/projects";
    }
    return (
        <main class="wrapper">
            
            <div className="imageDiv">
                <Image/>
                {/* {isMobile ?  null : <Image/>}    */}
                {/* <h2 className="imageText">Hi...I am Soham Kale!!</h2> */}
                <h1 className="imageText">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(40);
                        typewriter.typeString('Hello, I am Soham Kale!')
                        .callFunction(() => {
                            console.log('String typed out!');
                        })
                        .changeDelay(40)
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString('I am a Software Developer.')
                        .pauseFor(1500)
                        .deleteAll()
                        .callFunction(() => {
                            console.log('All strings were deleted');
                        })
                        .start();
                    }}
                    options={{
                        // strings: ['Hello', 'World'],
                        autoStart: true,
                        loop: true,
                      }}
                />
                </h1>
                <div className="buttonDiv">
                <Button onClick={onClick}>View my work</Button>
                </div>
            </div>
            
            {/* <div className="leftText">
                <h2>About Me</h2>
                <p>I am Soham Kale. I am currently a Senior at University of Florida. I plan on graduating in Fall 2020. I am looking for a full-time job opportunity starting from Spring 2021. I am very passionate about computer science.</p>
            </div>
            <div className="rightText">
                <h2>About Me</h2>
                <p>I am Soham Kale. I am currently a Senior at University of Florida. I plan on graduating in Fall 2020. I am looking for a full-time job opportunity starting from Spring 2021. I am very passionate about computer science.</p>
            </div> */}
            {/* <div className="footer">
               <Footer/>
                </div>   */}
        </main>  
    );
}

export default Home;