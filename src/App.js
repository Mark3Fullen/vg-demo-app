import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Tiktaktoe from './Components/Tiktaktoe'
import Home from './Components/Home'
import Sidebar from './Components/Sidebar'



function App() {

    return (

        <BrowserRouter>

            <Sidebar/>

            <Routes>

                <Route exact path="/" element={<Home/>} />

                <Route exact path="tiktaktoe" element={<Tiktaktoe/>} />
            
            </Routes>

        </BrowserRouter>

    );

}

export default App