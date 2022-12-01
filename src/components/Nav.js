import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <div>
        <hr></hr>
        <nav className="navbar navbar-expand-lg">
  <div className="container navx">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4 navul">
        <li className="nav-item">
          <Link className="nav-link active navli" aria-current="page" to="/">
            HOME
          </Link>
        </li>
        <li className="nav-item ">
          <a className="nav-link navli" href="#">
           SHOP
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  navli" href="#">BLOG</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link navli" to="/about">ABOUT US</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navli" to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    </div>
  )
}

export default Nav