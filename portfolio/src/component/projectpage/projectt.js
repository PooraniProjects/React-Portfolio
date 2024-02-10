import React from 'react';
import './projectt.css';
import {Element} from 'react-scroll';
import Project from '../projecthover/prjhover';



const Projectcon = () => {
    const prjec=[
    { 
        
   
        title:'PERSONAL PORTFOLIO',
        desc:'A personal portfolio website that showcases my skills in HTML,CSS and JAVASCRIPT.The website includes an about, portfolio, and contact pages.',
        descr:"Checkout my work...",
        link:'https://github.com/PooraniProjects/Portfolio',
    },
    {
        
        title:'FLOWER SHOP',
        desc:' designed visually appealing and user-friendly.Built a product catalog showcasing various flowers.',
        descr:"Checkout my work...",
        link:'https://github.com/PooraniProjects/Flower-shop',
    },
    {
      
        title:'HOME LANDING PAGE',
        desc:' The landing page features a clear and a clean and modern design.designed visually appealing and user-friendly.Optimized for various devices and screen sizes',
        descr:"Checkout my work...",
        link:'https://github.com/PooraniProjects/Home-Landing',
    },
    {
      
        title:'FAMMS FASHION',
        desc:' Designed and developed a simple, user-friendly website featuring a wide range of dresses and clothing items.Built a product catalog showcasing various dresses and clothing items',
        descr:"Checkout my work...",
        link:'https://github.com/PooraniProjects/FammsFashion',
    },
    {
     
        title:'FINEXO',
        desc:' I created this webpage that inspired by an existingpage on the internet.I faced several challenges while creating the webpage.',
        descr:"Checkout my work...",
        link:'https://github.com/PooraniProjects/Finexo',
    },
    {

        title:'ACQURING TECHNOLOGY (REACT)',
        desc:'  As a web developer with experience in front-end web development, I have proficiency in HTML, CSS, and JavaScript, as well as popular frameworks like React.js.',
        descr:"Checkout my work...",
        link:'https://github.com/PooraniProjects/React-project',
    },
    { 
        
   
        title:'PORTFOLIO (REACT)',
        desc:'Developed a single-page application using React and other tools to showcase my skills and projects as a web developer. Designed and implemented the different components of the portfolio, including the Navbar, About, Projects, Skills and Contact sections. ',
        descr:"Checkout my work...",
        link:'https://github.com/PooraniProjects/React-Portfolio',
    },
        
    ];
  return (
    <Element id='projects' className='proj_pge_content'>
        <h1>Projects</h1>
        <p>Here are some projects which i done. check out my work</p>

           <div className='prj_container'> 

                 {
                prjec.map((project,index)=>{
                    return(

                        <Project key={index} 
                        descr={project.descr}
                        title={project.title} 
                        desc={project.desc}
                        link={project.link} />
                        
                    );
                })

            } 
        </div>      

    </Element>
  )
}

export default Projectcon;
