import { useRef, useState } from "react"
import "./Contact.css"

export default function Contact() {
    const [isSubmited, setSubmited] = useState(localStorage.getItem("key"));
    const ref = useRef()
    const [inp, setInp] = useState("")
    const response = () => {
        if (inp == "") {
            ref.current.style.borderBottom = "2px solid red"
            return
        }

        setSubmited(!isSubmited)
        localStorage.setItem("key", isSubmited)
    }
    return (
        <div className="contactMain">
            <div className="context">
                <div className="contentCon">
                    <i>Get in touch</i>
                    <h1 style={{ color: "white" }}>
                        I would love to hear from you. Have a question or want to chat about improvement in design, tech & UI — just shoot me a message.
                    </h1>
                    <p>{isSubmited ? <b>Thank you for your response</b> : <><input ref={ref} type="text" value={inp} onChange={(e) => {
                        ref.current.style.borderBottom = "2px solid #f3c784"

                        setInp(e.target.value)
                    }} /><button onClick={() => { response() }}>&rarr;</button></>}</p>
                    <div className="contactCard">
                        <div className="contact-options">
                            <h3>Contact me</h3>
                            <span className="sp">

                                <a href="mailto:anantjha0112@gmail.com">&#9993;</a>
                                <a href="tel:+919028828688">&#9742;</a>
                            </span>
                        </div>
                        <div className="para">
                            <span >
                                Let's connect! Whether you have a project in mind or just want to say hi, feel free to reach out.
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="footer">
                    <div className="firstFooter">
                        <div className="webName">
                        <p>ANANT</p>
                        </div>
                        <div className="socialF">
                            <span>
                                <p>Reach me</p>
                                <a href="mailto:anantjha0112@gmail.com">Email</a>
                                <a href="tel:+919028828688">Phone</a>
                            </span>
                            <span>
                                <p>Social</p>
                                <a href="https://www.instagram.com/__anant_30?igsh=OGQ5ZDc2ODk2ZA==">Instagram</a>
                                <a href="https://github.com/AnantDjha">Github</a>
                                <a href="https://www.linkedin.com/in/anant-jha-64bb6a259">LinkedIn</a>
                                <a href="www.twitter.com">Twitter</a>
                            </span>
                        </div>
                    </div>
                    <div className="secondFooter">
                    <p>&copy; 2024 Jha Anant. All rights to the content belong to their respective owners.</p>

                    </div>
            </div>
        </div>
    )
}