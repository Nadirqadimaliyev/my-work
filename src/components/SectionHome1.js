import React from "react";
import "../assets/sass/style.scss"

const SectionHome1 = () => {
  return (
    <div>
     <div className="container crd">
     <div className="card" style={{ width: "19rem" }}>
      <i className="fa-solid fa-gift  gift"></i>
        <div className="card-body txt">
          <h5 className="card-title">Find something you love</h5>
          <p className="card-text">
          Our marketplace is a world of vintage and handmade goods
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "19rem" }}>
      <i class="fa-solid fa-star gift"></i>
        <div className="card-body txt">
          <h5 className="card-title">Meet talented artisans</h5>
          <p className="card-text">
          Our marketplace is a world of vintage and handmade goods
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "19rem" }}>
      <i class="fa-solid fa-lock gift"></i>
        <div className="card-body txt">
          <h5 className="card-title">Buy and sell with confidence</h5>
          <p className="card-text">
          Our marketplace is a world of vintage and handmade goods
          </p>
        </div>
      </div>
     </div>
      <div className="textt">
       
      </div>
    </div>
  );
};

export default SectionHome1;
