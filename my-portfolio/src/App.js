import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import AboutMe from "./components/AboutMe/AboutMe";
import ProjectsSection from "./components/ProjectSection/ProjectSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import EducationSection from "./components/EducationSection/EducationSection";
import ContactForm from "./components/ContactForm/ContactForm";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/education" element={<EducationSection />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
