import React from 'react';
import img4 from "../assets/img/logo.png";


const Header = () => {
  return (
    <div>
        <div
          className="container-fluid d-flex align-items-center justify-content-center p-4 pb-0"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <img src={img4} style={{color:"#AB9260"}} alt="" />
        </div>
    </div>
  )
}

export default Header