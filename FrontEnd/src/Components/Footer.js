import React from "react";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">

            <div className="left-side">
                      <div className="footer-info-2">
                        <div className="footer-address">
                          <i className="fa fa-location-dot"></i>
                        </div>
                        <div className="footer-address">Beirut, Lebanon</div>
                      </div>

                      <div className="footer-info">
                        <div className="footer-phone">
                          <i className="fa fa-phone"></i>
                        </div>
                        <div className="footer-number">+961 78 82 71 04</div>
                      </div>

                      <div className="footer-info-3">
                        <div className="footer-email">
                          <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="footer-email">mohamadchalhoub24@gmail.com</div>
                      </div>
            </div>

            <div className="center">
                    <a href="" >
                          <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="">
                          <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="" >
                          <i className="fa-brands fa-instagram"></i>
                    </a>
            </div>

            <div className="right-side">
                  <div className="subscribe">
                    <div> 
                            <span>Enter your email address to stay updated</span>
                    </div>
                    <div> 
                            <input type="text"></input>
                            <i className="fa-solid fa-envelope i-icon"></i>
                    </div>
                    <div>
                            <button>subscribe</button>
                    </div>
                  </div>
            </div>

      </div>
    </>
  );
};

export default Footer;
