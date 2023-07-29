import React, { useState } from "react";
import "./HeaderStyles.css";
import Logo2 from "../Images/logo2.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className="container">
        <div className="nameLogo">
          <img src={Logo2} alt="logo" className="logo"></img>
          <Link to="/" className="after">
            Blogs.
          </Link>
        </div>
        <ul id="links" className={clicked ? "#links active" : "links"}>
          <li>
            <Link to="/" className="active">
              <i className="fa fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <i class="fa fa-user" aria-hidden="true"></i>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <div id="mobile" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </>
  );
};

export default Header;
