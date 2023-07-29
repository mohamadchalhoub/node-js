import React from "react";
import "./PageNotFoundStyles.css";
import notfound from "../Images/notfounf.svg";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  let navigate = useNavigate()

  const backToHome = () => {
    navigate('/')
  }

  return (
    <div className="page">
      <div className="notfound">
      <img src={notfound} alt="notfound-page" style={{height:500, width:400, marginBottom:50}}/>
      </div>
      <div className="button">
        Fly to Home
        <button onClick={backToHome}>FLY</button>
      </div>
    </div>
  );
};

export default PageNotFound;
