import React from 'react';
import {Element} from 'react-scroll';
import './about.css';



const About = () => {
  return (
    <Element id='about' className='about_page'>
        <div class=" about">
        <h2>About <span>me</span></h2>
        <div class="about_intro">
        

          <div class="intro_head">
            <h3>Here My Short Intro...</h3>
          </div>

          <div class="intro_myself">
            hello, I'm Pooranasundari and i graduated with a degree in MCA from Alagappa University.i recently finished my MERN full stack developer course. I've dedicated myself to mastering the MERN stack through self-learning, online courses, and some personal projects. I've built few web applications showcasing my proficiency in html, css,bootstrap, javascript,mongodb, express.js, react.js,node.js.I'm excited about the opportunity to apply my knowledge and contribute
            to real-world projects. I'm a quick learner, adaptable, and passionate about continuously improving my skills.
          </div>
        </div>
      </div>
    </Element>
  )
}

export default About;

