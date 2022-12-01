import React from "react";
import Imgg from "../assets/img/img-about2.jpg" ;
import "../assets/sass/style.scss";

const SectionAbout3 = () => {
  return (
    <div>
      <div className="container secabt3">
        <div className="card card3 " >
          <div className="card-body ">
            <h3 className="card-title">Our Story</h3>
            <h2 className="card-text">
             Welcome To Soap
            </h2>
            <h5>Nullam quis ante. Pellentesque libero tortor, tincidunt et, tinciduntamet est.In hac habitasse platea dictumst. Praesent nec nisl a purus blandit viverra</h5>

            <a href="#" className="btn btn-primary ">
             SHOP NOW
            </a>
          </div>
        </div>
        
          <img src={Imgg} className="abtimg" />
          
        
      </div>
    </div>
  );
};

export default SectionAbout3;
