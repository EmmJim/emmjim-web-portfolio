import React from 'react'
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Home from '../screens/Home';
import AboutMe from '../screens/AboutMe';
import Projects from '../screens/Projects';
import Resume from '../screens/Resume';
import Contact from '../screens/Contact';

const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence initial={false} >
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes