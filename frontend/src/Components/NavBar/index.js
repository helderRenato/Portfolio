import React from "react";
import './style.css'; 

import logo from "../../assets/logo.svg"; 
import logo2 from "../../assets/logo2.svg"; 
import hamburguerMenu from "../../assets/hamburguerMenu.svg"; 
import close from "../../assets/close.svg";

function showhideMenu(){
    var hamburguerMenu = document.getElementById("hamburguerMenu")

    if(hamburguerMenu.style.display == "block"){
        hamburguerMenu.style.display = "none"
    }else{
        hamburguerMenu.style.display = "block"
    }

}

export default function NavBar(){
    return(
        <>
            <nav className= "NavBar">
                <div className="NavBar__logo">
                    <a href="/"><img src={logo}></img></a>
                </div>
                <div className="NavBar__logo2">
                    <img src={logo2}></img>
                </div>
                <div className="NavBar__HamburguerMenu">
                    <img src={hamburguerMenu} onClick={showhideMenu}></img>
                </div>
            </nav>

            <div id="hamburguerMenu">
                <img src={close} onClick={showhideMenu}></img>
                <ul>
                    <li><a href="/Portfolio/#Home__Welcome" onClick={showhideMenu}>Home</a></li>
                    <li><a href="/Portfolio/#Home__Projects" onClick={showhideMenu}>My Projects</a></li>
                    <li><a href="/Portfolio/#Home__AboutMe" onClick={showhideMenu}>AboutMe</a></li>
                    <li><a href="/Portfolio/#Home__LetsWorkTog" onClick={showhideMenu}>Get in Touch</a></li>
                </ul>
            </div>
        </>
    )
}