import React from 'react'
import { useState } from 'react';
import './prjhover.css';

const Project = ({ descr, title, desc, link }) => {
     const [show, setShow] = useState(false);
     return (
         <a href={link} target='_blank' rel="noopener noreferrer">

           < div className='projects'
                onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>

             {
                    show ? (
                        <div className="projec_conte">
                            <p>{desc}</p>
                            <h3>{descr}</h3>
                        </div>
                    ) : (
                       
                        <h2>{title}</h2>
                    )
                }

            </div>
        </a> 

    )
 }

export default Project;
