import { BrowserRouter, Route, Routes } from "react-router-dom";

import {Feira} from "../src/pages/home/comps/eventos"
import Home from './pages/home';
import Capa from "./components/capa"
import Inscricao from "./pages/inscricao";


export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/capa" element={<Capa />} />
                <Route path="/feirateste" element={<Feira />} />
                <Route path="/inscricao" element={<Inscricao />} />
            </Routes>
        </BrowserRouter>
    )
} 