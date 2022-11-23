import React from "react";
import "../assets/sass/style.scss";
import left from "../assets/img/titleleft.png";
import right from "../assets/img/titleright.png";
const SectionAbout1 = () => {
  return (
    <div>
      <div className="secabt1">
        <div className="container c">
          <h3 style={{ color: "#AB9260" }}>Features</h3>
          <div className="beta">
            <img src={left} />
            <h1>Why Choose Us</h1>
            <img src={right} />
          </div>
        </div>
        <div className="container crd">
          <div className="card" style={{ width: "19rem" }}>
            <i className="fa-solid fa-gift  gift"></i>
            <div className="card-body abt">
              <h5 className="card-title">Find something you love</h5>
              <p className="card-text">
                Our marketplace is a world of vintage and handmade goods
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "19rem" }}>
            <i class="fa-solid fa-star gift"></i>
            <div className="card-body abt">
              <h5 className="card-title">Meet talented artisans</h5>
              <p className="card-text">
                Our marketplace is a world of vintage and handmade goods
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "19rem" }}>
            <i class="fa-solid fa-lock gift"></i>
            <div className="card-body abt">
              <h5 className="card-title">Buy and sell with confidence</h5>
              <p className="card-text">
                Our marketplace is a world of vintage and handmade goods
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAbout1;
