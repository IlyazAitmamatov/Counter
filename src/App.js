import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./styleSheet/styleIndex/App.css"
import Home from "./pages/Home";
import About from "./pages/About"

function App() {
    const [counter, setCounter] = useState(0);

    return(
        <BrowserRouter>
            <div className="wrapper">
                <Routes>
                    <Route path="/" element={<Home counter={counter} setCounter={setCounter}/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
