import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./styleSheet/styleIndex/App.css"
import Home from "./pages/Home";
import About from "./pages/About"

function App() {

    return(
        <BrowserRouter>
            <div className="wrapper">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
