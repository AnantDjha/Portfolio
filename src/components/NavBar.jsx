import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import menuImg from "../assets/menuImg.png"
import { useParams } from "react-router-dom";
import { useRef } from "react";
import { refVar } from "./contexts/context";
import { motion } from "framer-motion";
import xBtn from "../assets/xBtn.png"
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

function NavBar() {

    
    const {ulRef,menuRef} = useContext(refVar);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    useEffect(()=>{
        ulRef.current.className = ""
        menuRef.current.src  = menuImg
    },[scrollPosition])
  
    return (
        <div className="mainNav">
               
                    <nav>
                        <div className="nameOfMy">
                            <a href="/" >ANANT</a>

                        </div>
                        <ul ref={ulRef} onClick={() => {
                                // handleMenu() 
                              
                                if (ulRef.current.className == "") {
                                    ulRef.current.className = "menuOpen";
                                    menuRef.current.src = xBtn;
                                }
                                else {
                                    ulRef.current.className = ""
                                    if(menuImg) menuRef.current.src = menuImg;
                                }
                               
                            }} >
                            <motion.li initial={{opacity:0,alignItems:"center"}} animate={{opacity:1,alignItems:"start"}} transition={{duration:0.3,delay:0.8}}><a href="/#home" className="">HOME</a></motion.li>
                            <motion.li initial={{opacity:0,alignItems:"center"}} animate={{opacity:1,alignItems:"start"}} transition={{duration:0.5,delay:1.1}}><a href="/#about">ABOUT</a></motion.li>
                            <motion.li initial={{opacity:0,alignItems:"center"}} animate={{opacity:1,alignItems:"start"}} transition={{duration:0.8,delay:1.4}}><a href="/#skill">SKILLS</a></motion.li>
                            <motion.li initial={{opacity:0,alignItems:"center"}} animate={{opacity:1,alignItems:"start"}} transition={{duration:0.8,delay:1.7}}><a href="/#project">PROJECT</a></motion.li>
                            <motion.li initial={{opacity:0,alignItems:"center"}} animate={{opacity:1,alignItems:"start"}} transition={{duration:0.8,delay:2}}><a href="/#contact">CONTACT</a></motion.li>

                        </ul>
                        <div className="menu" >
                            <img ref = {menuRef} src={menuImg} alt="aaa" onClick={(e) => {
                                // handleMenu() 
                              
                                if (ulRef.current.className == "") {
                                    ulRef.current.className = "menuOpen";
                                    e.target.src = xBtn;
                                }
                                else {
                                    ulRef.current.className = ""
                                    e.target.src = menuImg;
                                }
                               
                            }} />
                        </div>
                    </nav>
                </div>
    )
}

export default NavBar;