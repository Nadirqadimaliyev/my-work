import React from "react";
import bg1 from "../assets/img/bg2.png";
import bg2 from "../assets/img/bg.png";
import oglan from "../assets/img/oglan.jpg";
import qiz from "../assets/img/qiz.jpg";
const SectionAbout2 = () => {
  return (
    <div>
      <div className="container-flued milli">
        <img src={bg2} className="bgt" />

        <div className="cards">
          <div className="card tr" style={{ width: "18rem" }}>
            <p className="card-text">
              Nam liber tempor cum soluta nobis eleifend option congue nihil
              imperdiet doming id quod mazim placerat facer...
            </p>
            <img src={oglan} className="oglan" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Jane Doe</h5>
              <h5 className="card-title">Manager Of AZ</h5>
            </div>
          </div>
          <div className="card tr" style={{ width: "18rem" }}>
            <p className="card-text">
              Cestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubiliapurus. Pellentesque...
            </p>
            <img src={qiz} className="oglan" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Maria Haley</h5>
              <h5 className="card-title">Customer</h5>
            </div>
          </div>
        </div>
        <img src={bg1} className="bgr" />
      </div>
    </div>
  );
};

export default SectionAbout2;
