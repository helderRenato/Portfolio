import React from "react";
import "./style.css"

import NavBar from "../../Components/NavBar";

import pc from "../../assets/pc.svg"; 
import dowload from "../../assets/dowload.svg"; 
import arrowLeft from "../../assets/arrow-left.svg"; 
import arrowRight from "../../assets/arrow-right.svg"; 
import cv from "../../assets/CVHelder.pdf"; 
import aspasT from "../../assets/aspasT.svg"; 
import aspasD from "../../assets/aspasD.svg"; 
import letsw from "../../assets/letsw.svg"; 
import project1 from "../../assets/projeto1.png"; 
import project2 from "../../assets/projeto2.png"; 
import project3 from "../../assets/projeto3.png"; 
import project4 from "../../assets/projeto4.png"; 
import link from "../../assets/link.svg"; 


import Footer from "../../Components/Footer";

function ShowCodeLinks(div){
}

export default function Home(){
    return(
        <>
            <header>
                <NavBar/>
            </header>

            <div id = "Home">
                {/*Home Section*/}
                <section id="Home__Welcome">
                    <p>Hello!, and welcome to my <br/>portfolio</p>
                    <div>
                        <p>Im a <strong>Software Developer</strong>, based in Portugal.</p>
                        <img src={pc}></img>
                    </div>
                    <a href={cv} dowload = "HelderCV.pdf" type="application/pdf" target="_blank" rel="external">Dowload my CV<img src={dowload}></img></a>
                </section>

                {/*My Projects Section*/}
                <section id = "Home__Projects" data-aos="fade-right">
                    <div>
                        <h1>My Projects</h1>
                        <a href="https://github.com/helderRenato" target="_blank">see all my projects</a>
                    </div>
                    
                    <div className = "HorizontalScroll">
                        <div className = "image">
                            <img src={project1}></img>
                            <div className="imgOverlay">
                                <a href="https://github.com/helderRenato/imageInput" target="_blank">click to see the code</a>
                            </div>
                        </div>
                        <div className = "image">
                            <img src={project2}></img>
                            <div className="imgOverlay">
                                <a href="https://github.com/helderRenato/Randomu" target="_blank">click to see the code</a>
                            </div>
                        </div>
                        <div className = "image">
                            <img src={project3}></img>
                            <div className="imgOverlay">
                                <a href="https://github.com/helderRenato/Connect-4-Game-with-AI-" target="_blank">click to see the code</a>
                            </div>
                        </div>
                        <div className = "image">
                            <img src={project4}></img>
                            <div className="imgOverlay">
                                <a href="https://github.com/helderRenato/AirCnC" target="_blank">click to see the code</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/*About Me */}
                <section id = "Home__AboutMe" data-aos="fade-up" >
                    <h1>About Me</h1>
                    <div className= "AspasD">
                        <img src={aspasT}></img>
                    </div>
                    <div className="AboutMe__Text">
                        <p>I am Hélder ribeiro, a person who loves and appreciates technology.&nbsp; My interest in technology emerged in high school where I was introduced to my first programming language C where I started by making games and applications, today Im a computer science student and specialize in web development.</p>
                    </div>
                    <div className="AspasE">
                        <img src={aspasD}></img>
                    </div>
                </section>

                <section id = "Home__LetsWorkTog" data-aos="fade-in" >
                    <p>Do u need a web developer?</p>
                    <form action="https://formsubmit.co/helder_renatoribeiro@hotmail.com" method="POST">
                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email" id = "email" required/>

                        <label htmlFor="message">Message*</label>
                        <textarea ype="text" name="message" id="message" required></textarea>

                        <button type="submit">Send</button>
                    </form>
                </section>

                <Footer></Footer>

            </div>
        </>
    )
}