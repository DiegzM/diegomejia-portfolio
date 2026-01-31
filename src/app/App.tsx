import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SystemMessage from "@/components/systemmessage/SystemMessage";
import HomePage from "@/features/homepage/HomePage";
import AboutPage from "@/features/about/AboutPage";
import ProjectPage from "@/features/projects/ProjectPage";
import Topbar from "@/components/topbar/Topbar";
import Card from "@/components/card/Card";
import DarkModeButton from "@/components/darkmodebutton/DarkModeButton";
import ProjectDetail from "@/features/projects/ProjectDetail";
import ContactPage from "@/features/contact/ContactPage";

export default function App() {

  const location =  useLocation();

  const [systemMessage, setSystemMessage] = useState<{
    message: string;
    type?: "info" | "warning" | "error" | "success";
  } | null>(null);

  const showMessage = (text: string, type?: "info" | "warning" | "error" | "success") => {
    setSystemMessage({ message: text, type });
    setTimeout(() => {
      setSystemMessage(null);
    }, 4000); // Hide message after 4 seconds
  };

  return (
    <div className="app">
      <Topbar />

      {/* Light/Dark mode toggle button */}
      <DarkModeButton />

      <AnimatePresence>
        {systemMessage && (
          <SystemMessage message={systemMessage.message} type={systemMessage.type} />
        )}
      </AnimatePresence>
        
      <main>
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({top: 0, left: 0, behavior: 'instant' })}> {/* Animate page transitions, scroll to top when exiting */}
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%'}}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectPage />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<ContactPage showMessage={showMessage} /> } />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}