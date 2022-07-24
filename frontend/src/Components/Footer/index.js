import React from "react";
import './style.css'; 

import linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github.svg"
import instagram from "../../assets/instagram.svg"

export default function Footer(){
    return(
        <>
            <div id = "Footer">
                <div>
                    <h1>Contactos</h1><br/>
                    <div>
                        <p className="number">(+351) 937436726</p><br/>
                        <p className="email">helder_renatoribeiro@hotmail.com</p><br/>
                        
                        <div className="Socials">
                            <a href="https://www.instagram.com/chillwithhelder/" target="_blank"><img src={instagram}></img></a>
                            <a href="https://github.com/helderRenato" target="_blank"><img src={github}></img></a>
                            <a href="https://www.linkedin.com/in/h%C3%A9lder-8949751aa/" target="_blank"><img src={linkedin}></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}