import React from "react";
import img from "../assets/img/logo-white.png"
import bg from "../assets/img/bg.png"

const Footer = () => {
  return (
    <div>
      <footer className="bg text-center text-white foota">
        {/* Grid container */}
    <div>
      <img src={bg} alt="" className="bga" />
    </div>
        <div
          className="container p-4 pb-0"
          style={{ backgroundColor: "#695245" }}
        >
        <a href="#">  <img src={img} alt="" /></a>
        </div>
        <div
          className="container p-4 pb-0"
          style={{ backgroundColor: "#695245" }}
        >
          <a className="btn btn-floating m-1 aa" href="#!" role="button">
            <h6>Returns Policy</h6>
          </a>
          <a className="btn  btn-floating m-1 aa" href="#!" role="button">
            <h6>Shipping & Delivery</h6>
          </a>
          <a className="btn  btn-floating m-1 aa" href="#!" role="button">
            <h6>Track Your Order</h6>
          </a>
        </div>

        <div
          className="container p-4 pb-0"
          style={{ backgroundColor: "#695245" }}
        >
          {/* Section: Social media */}
          <section className="mb-4">
            {/* Facebook */}
            <a className="btn btn-floating m-1 aa" href="#!" role="button">
              <i className="fab fa-facebook-f" />
            </a>
            {/* Twitter */}
            <a className="btn btn-floating m-1 aa" href="#!" role="button">
              <i className="fab fa-twitter" />
            </a>
            {/* Instagram */}
            <a className="btn  btn-floating m-1 aa" href="#!" role="button">
              <i className="fab fa-instagram " />
            </a>
            {/* Linkedin */}
            <a className="btn btn-floating m-1 aa" href="#!" role="button">
              <i className="fab fa-linkedin-in" />
            </a>
            {/* Github */}
            <a className="btn btn-floating m-1 aa" href="#!" role="button">
              <i className="fab fa-github" />
            </a>
          </section>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: "#695245" }}>
          © 2023 Copyright: Design By NADIR
          {/* <a className="text-white" href="https://mdbootstrap.com/">Design By NADIR</a> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
