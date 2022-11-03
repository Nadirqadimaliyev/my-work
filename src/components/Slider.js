import React from "react";
import slider1 from "../assets/img/slider1.jpg";
import slider2 from "../assets/img/slider2.jpg";
import slider3 from "../assets/img/slider3.jpg";

const slider = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner na">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default slider;
