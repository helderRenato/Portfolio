import React from "react";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import "./style.css"; 

export default function ContactMe(){
    return(
        <>
            <header>
                <NavBar></NavBar>
            </header>

            <form action="https://formsubmit.co/helder_renatoribeiro@hotmail.com" method="POST">
                <label htmlFor="email">Email*</label>
                <input type="email" name="email" id = "email" required/>

                <label htmlFor="message">Message*</label>
                <textarea ype="text" name="message" id="message" required></textarea>

                <button type="submit">Send</button>
            </form>

            <Footer></Footer>
        </>
    )
}