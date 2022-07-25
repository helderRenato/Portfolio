import React from "react";
import {BrowserRouter ,Route, Routes} from "react-router-dom"

//Views
import Home from "./View/Home";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}