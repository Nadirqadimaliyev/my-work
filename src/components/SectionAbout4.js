import React from 'react';
import "../assets/sass/style.scss";
import { Link } from 'react-router-dom';


const SectionAbout4 = () => {
  return (
    <div>
        <div className='container-fluid secabt4'>
            <div className='txat'>
                <h2>About Us</h2>
             <div className='sra'><Link className="nav-link active sr" aria-current="page" to="/">
          Home <i class="fa-solid fa-arrow-right"></i>  
          </Link>
         <h5>About Us</h5>
         </div>   
          
            </div>
        </div>  
    </div>
  )
}

export default SectionAbout4