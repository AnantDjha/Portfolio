import React, { useContext } from "react";
import "./Skill.css"
import python from "../assets/python.png"
import js from "../assets/js.png"
import java from "../assets/java.png"
import html from "../assets/html-5.png"
import node from "../assets/nodejs.png"
import react from "../assets/react.svg"
import { useEffect } from "react";
import vscode from "../assets/vscode.png"
import intelij from "../assets/intelij.png"
import studio from "../assets/studio.png"
import mysql from "../assets/mysql.png"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import pl from "../assets/pl.svg"
import sql from "../assets/sql.png"
import kotlin from "../assets/kotlin.png"
import express from "../assets/express.png"
import mongo from "../assets/mongo.png"
import { refVar } from "./contexts/context";


import menuImg from "../assets/menuImg.png"



function Skill()
{
   const {ulRef ,menuRef} = useContext(refVar)

   const [ref, inView] = useInView({ triggerOnce: true });
    const mainControl = useAnimation();

    useEffect(()=>{
       if(inView) {mainControl.start({ top: "0", opacity: 1 })}
    },[inView])
   
    return (
        <div className="mainSkill" id="skill" onClick={() => { 
         if(ulRef.current) ulRef.current.className = "" ; 
         if(menuRef.current) menuRef.current.src = menuImg }}>

            <motion.h1 style={{color:"#eabe7b"}} initial={{position:"relative",top:"5rem",opacity:0}}
                transition={{duration:0.4,delay:0.1, ease: "easeInOut"}} animate={mainControl}>My Skills</motion.h1>
            
            <div className="skillset">

                <div className="first">
                <motion.div className="language"  initial={{position:"relative",top:"5rem",opacity:0}}
                transition={{duration:0.4,delay:0.3, ease: "easeInOut"}} animate={mainControl}>
                    <h3 style={{color:"white"}}>PROGRAMMING</h3>
                    <div className="language-div">
                        <span>
                           <img src={python} alt="" />
                           <section>
                                <div className="lang-name" style={{backgroundColor:"",height:"50%"}}><p>Python</p><p>80%</p></div>
                                <div className="progress"><progress  value="80" max="100"> 80% </progress></div>
                           </section>
                        </span>
                        
                        <span>
                           <img src={react} alt="" />
                           <section>
                                <div className="lang-name" style={{backgroundColor:"",height:"50%"}}><p>React</p><p>70%</p></div>
                                <div className="progress"><progress  value="70" max="100"> 70% </progress></div>
                           </section>
                        </span>
                        
                        <span>
                           <img src={java} alt="" />
                           <section>
                                <div className="lang-name" style={{backgroundColor:"",height:"50%"}}><p>Java</p><p>90%</p></div>
                                <div className="progress"><progress  value="90" max="100"> 32% </progress></div>
                           </section>
                        </span>
                        
                        <span>
                           <img src={node} alt="" />
                           <section>
                                <div className="lang-name" style={{backgroundColor:"",height:"50%"}}><p>Node.js</p><p>65%</p></div>
                                <div className="progress"><progress  value="65" max="100"> 32% </progress></div>
                           </section>
                        </span>
                        
                        <span>
                           <img src={js} ref={ref} alt="" style={{height:"80%"}}/>
                           <section>
                                <div className="lang-name" style={{backgroundColor:"",height:"50%"}}><p>Javascript</p><p>85%</p></div>
                                <div className="progress"><progress  value="85" max="100"> 32% </progress></div>
                           </section>
                        </span>
                        
                        <span>
                           <img src={html} alt="" />
                           <section>
                                <div className="lang-name" style={{backgroundColor:"",height:"50%"}}><p>HTML/CSS</p><p>90%</p></div>
                                <div className="progress"><progress  value="90" max="100" color="red"> </progress></div>
                           </section>
                        </span>
                        
                        <span>
                           <img src={kotlin} alt="" />
                           <section>
                                <div className="lang-name" style={{backgroundColor:"",height:"50%"}}><p>Kotlin</p><p>60%</p></div>
                                <div className="progress"><progress  value="60" max="100" color="red"> </progress></div>
                           </section>
                        </span>
                        <span>
                           <img src={express} alt="" style={{height:"80%"}}/>
                           <section>
                                <div className="lang-name" style={{backgroundColor:"",height:"50%"}}><p>Express</p><p>70%</p></div>
                                <div className="progress"><progress  value="70" max="100"> 32% </progress></div>
                           </section>
                        </span>
                        
                    </div>
                </motion.div>

                <motion.div className="database" initial={{position:"relative",top:"5rem",opacity:0}}
                transition={{duration:0.4,delay:0.5, ease: "easeInOut"}} animate={mainControl}>
                <h3 style={{color:"white"}}>DATABASE</h3>
                    <div className="language-div">
                        <span>
                           <img src={mongo} alt="" />
                           <section>
                                <div className="lang-name" style={{backgroundColor:"",height:"50%"}}><p>MongoDB</p><p>90%</p></div>
                                <div className="progress"><progress  value="90" max="100"> 32% </progress></div>
                           </section>
                        </span>
                        
                        <span>
                           <img src={sql} alt="" style={{height:"80%"}}/>
                           <section>
                                <div className="lang-name" style={{backgroundColor:"",height:"50%"}}><p>SQL</p><p>70%</p></div>
                                <div className="progress"><progress  value="70" max="100"> 32% </progress></div>
                           </section>
                        </span>
                        
                        <span>
                           <img src={pl} alt="" />
                           <section>
                                <div className="lang-name" style={{backgroundColor:"",height:"50%"}}><p>PL/SQl</p><p>60%</p></div>
                                <div className="progress"><progress  value="60" max="100"> 32% </progress></div>
                           </section>
                        </span>
                        
                        
                    </div>
                        
                </motion.div>
                </div>

                <motion.div className="sec" initial={{position:"relative",top:"5rem",opacity:0}}
                transition={{duration:0.4,delay:0.7, ease: "easeInOut"}} animate={mainControl}>
                    <img src={vscode} id ="bid" alt="" />
                    <img src={intelij} id = "aid" alt="" />
                    <img src={studio} alt="" />
                    <img src={mysql} alt="" />
                        

                </motion.div>
            </div>
           

        </div>
    )
}

export default Skill;