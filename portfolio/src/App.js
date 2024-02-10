
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbarr from './component/nav/navbar';
import Home from './component/home/home';
import About from './component/aboutpage/about';
import Skills from './component/skillspage/skill';
import Education from './component/educationpage/education';
import Projectcon from './component/projectpage/projectt';
import Contact from './component/contactpge/contacts';



function App() {
  return (
    <div>
      
    <Navbarr />
    <Home />
    <About/>
    <Skills />
    <Education />
    <Projectcon />
    <Contact />
    
      
    </div>
  );
}

export default App;



