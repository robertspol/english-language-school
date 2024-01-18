import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Glossary from "../pages/Glossary";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Online from "../components/Online";
import HomeLearning from "../components/HomeLearning";
import Finances from "../components/Finances";
import Certificate from "../components/Certificate";

function Site() {
    return (
        <>
            <Routes>
                <Route path="/english-language-school" component={HomePage} />
                <Route path="/" exact element={<HomePage/>} />
                <Route path="/glossary" element={<Glossary/>} />
                <Route path="/gallery" element={<Gallery/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/online" element={<Online/>} />
                <Route path="/home-learning" element={<HomeLearning/>} />
                <Route path="/finances" element={<Finances/>} />
                <Route path="/certificate" element={<Certificate/>} />
            </Routes>
        </>
    )
}

export default Site;