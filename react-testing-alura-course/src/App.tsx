import React from "react";
import {
    BrowserRouter,
    Routes,
    Route 
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import Configuration from "./pages/Configuration/Configuration";
import Lottery from "./pages/Lottery/Lottery";

const App = () => {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <Routes>
                    <Route path="/" element={<Configuration />}/>
                    <Route path='/sorteio' element={<Lottery />}/>
                </Routes>
            </RecoilRoot>
        </BrowserRouter>
    )
};

export default App;