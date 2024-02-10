import React from 'react';
import {Element} from 'react-scroll';
import './contacts.css';



const Contact = () => {
  return (
    <Element id='contact' className='contact_conte_page'>
      <h1>Contact</h1>
      <div className='cont_info'>
      <h2>Find Me <i class="fa-solid fa-arrow-turn-down"></i></h2>

        <p>  <i class="fa-solid fa-envelope"></i> <span>prniimuthuraman03@gmail.com</span></p>
        <p><i class="fa-solid fa-phone"></i><span>6380561877</span></p>
      </div>
    </Element>
  )
}

export default Contact;

