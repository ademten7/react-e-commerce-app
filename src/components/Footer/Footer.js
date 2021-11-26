import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter }  from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className='Footer'>
            <div className='Box'>
            <ul className='Icons'>
                   <a href='https://www.facebook.com/'><li> <FaFacebook/></li></a>
                   <li><FaInstagram/></li>
                   <li> <FaTwitter/></li>
               </ul>

               <ul className='Words'>
               <li>Info</li>
               <li>Support</li>
               <li>Marketing</li>
           </ul>
          <h5>&copy;2021 Berlin, Germany</h5>

            </div>
          
              
                 
         

           
        </footer>
    )
}
