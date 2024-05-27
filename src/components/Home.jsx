import React, { useState } from "react";
import "./Home.css"
import { useContext } from "react";
import { refVar } from "./contexts/context";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import homePage from "../assets/homePage.jpg"
import dev from "../assets/dev.jpg"
import xBtn from "../assets/xBtn.png"
import menuImg from "../assets/menuImg.png"



function Home() {
    // const navigate = useNavigate();
    const {ulRef ,menuRef} = useContext(refVar)
    const [c,setC] = useState(0);
    return (
        <div className="mainHome" onClick={() => {   if(ulRef.current) ulRef.current.className = "" ; 
        if(menuRef.current) menuRef.current.src = menuImg }} id="home">
            {/* <div className="floater"> */}
                {/* <motion.div className="diver" initial={{opacity:0,border:"5px solid #aca395",borderTop:"none",borderLeft:"none",borderRight:"none"}} animate={{opacity:0.7,border:"5px solid #eabe7b",borderTop:"none",borderLeft:"none",borderRight:"none"}} transition={{duration:0.5,delay:2}}>
                    <motion.img initial={{opacity:0,height:"50%",width:"50%"}} animate={{opacity:1,height:"100%",width:"100%"}} transition={{duration:0.3,delay:2.3}}src={homePage} alt="" /></motion.div> */}
               
            {/* </div> */}
            <div className="information">
                <motion.div className="detail">
                    <motion.h3 initial={{ position: "relative", left: "10rem", opacity: 0 }} animate={{ left: "5rem", opacity: 1 }} transition={{ duration: 0.3 ,delay:0.8}}>Hi There!</motion.h3>
                    <motion.h1 initial={{ position: "relative", left: "5rem", opacity: 0 }} animate={{ left: "0", opacity: 1 }} transition={{ duration: 0.3 ,delay:1.1}} ><span>It's me&nbsp;</span><p>Anant Jha</p></motion.h1>
                    <motion.h2 initial={{position:"relative",left:"5rem",opacity:0}} animate={{left:"0",opacity:1}} transition={{duration:0.3,delay:1.4}}>And I am a Frontend Developer</motion.h2>
                    <motion.h4 initial={{position:"relative",left:"5rem",opacity:0}} animate={{left:"0",opacity:1}} transition={{duration:0.3,delay:1.7}}>Developer proficient in the MERN stack is a specialist who creates dynamic and responsive user interfaces using MongoDB, Express.js, React, and Node.js.</motion.h4>

                    <motion.div className="social" initial={{position:"relative",left:"5rem",opacity:0}} animate={{left:"0",opacity:1}} transition={{duration:0.3,delay:2}}>
                        <SocialIcon className="sI" network="instagram" url="https://www.instagram.com/__anant_30?igsh=OGQ5ZDc2ODk2ZA==" target="_blank" bgColor="transparent" fgColor="#eabe7b"/>
                        <SocialIcon className="sI" url="https://github.com/AnantDjha" bgColor="transparent" fgColor="#eabe7b" size="10px" />
                        <SocialIcon className="sI" url="https://www.linkedin.com/in/anant-jha-64bb6a259" bgColor="transparent" fgColor="#eabe7b" size={10}/>
                       <SocialIcon className="sI" url="http://twitter.com/" bgColor="transparent" fgColor="#eabe7b" size={10}/>
                       
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Home;