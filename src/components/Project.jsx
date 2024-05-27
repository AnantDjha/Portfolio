import "./Project.css"
import weather from "../assets/projectWeather.webp"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useContext, useEffect } from "react";
import project1 from "../assets/project1.png"
import project3 from "../assets/project3.png"
import project2 from "../assets/project21.avif"
import project4 from "../assets/project4.jpg"
import { refVar } from "./contexts/context";
import menuImg from "../assets/menuImg.png"
import pyScript from "../assets/pyScript.jpg"
import { useParams ,Link} from "react-router-dom";





export default function Project() {

    const { ulRef, menuRef } = useContext(refVar)

    const [ref, inView] = useInView({ triggerOnce: true });
    const [ref2, inView2] = useInView({ triggerOnce: true });

    const mainControl = useAnimation();

    useEffect(() => {
        if (inView) { mainControl.start({ top: "0", opacity: 1 }) }
        //    if(inView2) {mainControl.start({ top: "0", opacity: 1 })}

    }, [inView])

    return (
        <div className="mainProject" id="project" onClick={() => {
            if (ulRef.current) ulRef.current.className = "";
            if (menuRef.current) menuRef.current.src = menuImg
        }}>
            <div className="frame">
                <motion.h1 initial={{ position: "relative", top: "5rem", opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }} animate={mainControl}>Recent works</motion.h1>
                <div className="content">
                    <motion.div to="/project/1" ref={ref} className="box" initial={{ position: "relative", top: "5rem", opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.5, ease: "easeInOut" }} animate={mainControl}>
                        <img src={project1} alt="ccccc" />
                        <div className="desc">
                            <h4>Online Course app</h4>
                            <p>Developed a React-based website for purchasing online courses, featuring a stylish landing page and multiple user-friendly sections.</p>
                        </div>
                        <div className="btn">
                            <a href="https://github.com/AnantDjha/coursify">Github</a>

                        </div>
                    </motion.div >
                    <motion.div to="/project/2" className="box" initial={{ position: "relative", top: "5rem", opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.7, ease: "easeIn" }} animate={mainControl}>
                        <img src={project2} alt="ccccc" />
                        <div className="desc">
                            <h4>Music Player</h4>
                            <p>React-based music player utilizing the Spotify Web Playback SDK, enabling seamless playback of Spotify tracks within the application.</p>
                        </div>
                        <div className="btn">
                            <a href="https://github.com/AnantDjha/Music-Application">Github</a>
                        </div>
                    </motion.div >
                    <motion.div to="/project/3" className="box" initial={{ position: "relative", top: "5rem", opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.9, ease: "easeIn" }} animate={mainControl}>
                        <img src={project3} alt="ccccc" />
                        <div className="desc">
                            <h4>E-Commerce Store</h4>z
                            <p>website tailored specifically for a pharma store.
                                allowing customers to browse medicines, view details, and
                                place orders.
                            </p>
                        </div>
                        <div className="btn">
                            <a href="https://github.com/AnantDjha/Medify">Github</a>
                        </div>
                    </motion.div >
                    <motion.div to="/project/4" className="box" initial={{ position: "relative", top: "5rem", opacity: 0 }}
                        transition={{ duration: 0.4, delay: 1.1, ease: "easeInOut" }} animate={mainControl}>
                        <img src={weather} alt="ccccc" />
                        <div className="desc">
                            <h4>Weather Web</h4>
                            <p>responsive weather application using React, providing real-time weather data for any city worldwide</p>
                        </div>
                        <div className="btn">
                            <a href="https://github.com/AnantDjha/Weather-Applicatin">Github</a>
                        </div>
                    </motion.div >
                    <motion.div to="/project/5" className="box" initial={{ position: "relative", top: "5rem", opacity: 0 }}
                        transition={{ duration: 0.4, delay: 1.3, ease: "easeInOut" }} animate={mainControl}>
                        <img src={project4} alt="ccccc" />
                        <div className="desc">
                            <h4>Banking Application</h4>
                            <p>Developed a banking application using Java and Swing, offering a user-friendly platform for managing financial transactions.</p>
                        </div>
                        <div className="btn">
                            <a href="https://github.com/AnantDjha/Banking-Application">Github</a>
                        </div>
                    </motion.div >
                    <motion.div to="/project/6" className="box" initial={{ position: "relative", top: "5rem", opacity: 0 }}
                        transition={{ duration: 0.4, delay: 1.5, ease: "easeInOut" }} animate={mainControl}>
                        <img src={pyScript} alt="ccccc" />
                        <div className="desc">
                            <h4>Python bot</h4>
                            <p>Python bot using packages like spttx3 and speech recognition with the help of openAi web api</p>
                        </div>
                        <div className="btn">
                            <a href="https://github.com/AnantDjha/Desktop-manager">Github</a>
                        </div>
                    </motion.div >


                </div>
            </div>
        </div>
    )
}