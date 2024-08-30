import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from './pages/home';
import Capa from "./components/capa"


export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/capa" element={<Capa />} />
            </Routes>
        </BrowserRouter>
    )
} 