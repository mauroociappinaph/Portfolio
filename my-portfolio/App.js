import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutMe} />
        <Route path="/skills" component={SkillsSection} />
        <Route path="/projects" component={ProjectsSection} />
        <Route path="/education" component={EducationSection} />
        <Route path="/contact" component={ContactForm} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
