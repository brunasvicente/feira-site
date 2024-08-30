import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Feira} from "../src/pages/home/comps/eventos"

import Home from './pages/home';


export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/feirateste" element={<Feira />} />
            </Routes>
        </BrowserRouter>
    )
} 