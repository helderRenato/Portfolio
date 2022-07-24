import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

//Views
import Home from "./View/Home";
import ContactMe from "./View/ContactMe";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home/>}></Route>
                <Route path="/contactme" element = {<ContactMe/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}