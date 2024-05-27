import React, { useRef ,useEffect, useContext} from "react";
import "./About.css"
import { motion, useAnimation} from "framer-motion";
import { useParams } from "react-router-dom";
import homePage from "../assets/laptop.jpg"
import cv from "../assets/Anant4.pdf"
import { useInView } from "react-intersection-observer";
import { refVar } from "./contexts/context";
import menuImg from "../assets/menuImg.png"


function About()
{
    // const ref = useRef(null);
    const [ref, inView] = useInView({ triggerOnce: true });
    const mainControl = useAnimation();
    const {ulRef ,menuRef} = useContext(refVar)

    useEffect(()=>{
       if(inView) {mainControl.start({ top: "0", opacity: 1 })}
    },[inView])
   
    return (
        <div id="about" className="aboutMain" onClick={() => { 
            if(ulRef.current) ulRef.current.className = "" ; 
            if(menuRef.current) menuRef.current.src = menuImg }}>
            
            <div className="firstDiv" >
                <div className="about">
                    <div ref={ref}><motion.h1 variants={{visible:{ left: "0", opacity: 0.8 }}} initial={{ position: "relative", top: "5rem", opacity: 0 }} animate={mainControl} transition={{ duration: 0.3,delay:0.3 ,ease: "easeInOut"}}>About Me</motion.h1>
                    <motion.p variants={{visible:{ left: "0", opacity: 1 }}} initial={{ position: "relative", top: "5rem", opacity: 0 }} animate={mainControl} transition={{ duration: 0.3 ,delay:0.6,ease: "easeInOut"}}>I'm a skilled developer with expertise in Java, Python, and Data Structures & Algorithms. My goal is to specialize in Android development, leveraging my knowledge of React and Node.js to create innovative and user-friendly mobile applications. I'm passionate about solving complex problems and constantly expanding my skill set to stay ahead in the ever-evolving tech landscape."</motion.p>
                    <motion.span variants={{visible:{ left: "0", opacity: 1 }}} initial={{ position: "relative", top: "5rem", opacity: 0 }} animate={mainControl} transition={{ duration: 0.3,delay:0.9,ease: "easeInOut"}}><a href={cv} download={true}>Download CV</a></motion.span>
                    </div>
                </div>
                <div className="photo">
                    <div><img src={homePage} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default About;