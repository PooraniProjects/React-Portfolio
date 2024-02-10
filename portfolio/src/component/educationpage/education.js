import React from "react";
import { Element } from "react-scroll";
import "./education.css";

const Education = () => {
  return (
    <Element id="education" className="education_page">
     <h2> my <span>journey</span></h2>
        <div class="education_list">
          <div class="education">
            MASTER OF COMPUTER APPLICATIONS - (80%) <br />
            Alagappa University (2021)
          </div>
          <div class="education">
            BACHELOR OF SCIENCE - (72%)
            <br />
            Alagappa University (2018)
          </div>
          <div class="education">
            HSC - (78%) <br />
            Ulagappar Hr. Sec. School (2015)
          </div>
          <div class="education">
            SSLC - (78%)
            <br />
            Ulagappar Hr. Sec. School (2013)
          </div>
        </div>
    </Element>
  );
};

export default Education;
