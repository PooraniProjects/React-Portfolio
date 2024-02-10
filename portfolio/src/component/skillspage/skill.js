import React from 'react';
import './skill.css';
import {Element} from 'react-scroll';
import LinearProgress from '@mui/material/LinearProgress';


const Skills = () => {
    return (

        <Element id='skills'className='skills' >
            <h2>skills</h2>
            
           <div className='skill_content'>
           <div className='left_img'>
                <img src='/image/skill.jpg' alt='imge' />

            </div>
             <div className='right_content'>
                
                <div className='skill_continer'>
                    <h4>html</h4>
                    <div className='skill_slide skill_color1'>
                        <LinearProgress variant='determinate' value={90} />
                    </div>
                </div>

                <div className='skill_continer'>
                    <h4>css</h4>
                    <div className='skill_slide skill_color2'>
                        <LinearProgress variant='determinate' value={85} />
                    </div>
                </div>

                 <div className='skill_continer'>
                    <h4> bootstrap</h4>
                    <div className='skill_slide skill_color3'>
                        <LinearProgress variant='determinate' value={80} />
                    </div>
                </div>

                <div className='skill_continer'>
                    <h4>javscript</h4>
                    <div className='skill_slide skill_color4'>
                        <LinearProgress variant='determinate' value={70} />
                    </div>
                </div>

                <div className='skill_continer'>
                    <h4>react.js</h4>
                    <div className='skill_slide skill_color5'>
                        <LinearProgress variant='determinate' value={60} />
                    </div>
                </div>

                <div className='skill_continer'>
                    <h4>node.js</h4>
                    <div className='skill_slide skill_color6'>
                        <LinearProgress variant='determinate' value={50} />
                    </div>
                </div> 
                <div className='skill_continer'>
                    <h4>express.js</h4>
                    <div className='skill_slide skill_color6'>
                        <LinearProgress variant='determinate' value={50} />
                    </div>
                </div> 
                <div className='skill_continer'>
                    <h4>mongodb</h4>
                    <div className='skill_slide skill_color6'>
                        <LinearProgress variant='determinate' value={50} />
                    </div>
                </div> 
            </div> 
           </div>
        </Element>

    )
}

export default Skills;
