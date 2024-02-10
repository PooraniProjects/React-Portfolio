import React from "react";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import "./home.css";

const Home = () => {
  return (
    <Element id="home" name="about" className="backpicconn">
      <div className="content_right">
        <h5>hello, my name is,</h5>
        <h1>Pooranasundari M</h1>
        <h3>full stack developer</h3>
        <p>
          Welcome to my portfolio! <br/>A portfolio that reflects my passion for web
          development, featuring a variety of projects that showcase my
          versatility and attention to detail.A collection of my web development
          projects, complete with code snippets, and detailed descriptions. A
          professional portfolio featuring my experience in web development,
          including my education, skills, and notable projects.
        </p>
        <div className=" btn_home">
          <a href="image\POORANI.pdf" download class="downl_btn">
            {" "}
            Download CV <i class="fa-solid fa-download"></i>
          </a>

          <Link to="projects" smooth={true} duration={500}>
            <button className="home_btn">My Work</button>
          </Link>
        </div>
      </div>
    </Element>
  );
};

export default Home;
