import React from "react";
import "./AboutStyles.css";
import avatar from "../Images/avatar.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-img">
        <img
          src={avatar}
          alt="avatar-img"
          style={{ height: 500, width: 580 }}
        />
      </div>
      <div className="about-info">
        <strong>Hi,</strong>
        <br></br>
        I'm Mohamad Chalhoub, Web and Mobile Developer. I have been studying and
        working in the tech field for over 5 years, and plan on staying in tune
        with the latest technologies through continued coursework and
        professional development. I am fueled by my passion for programming,
        problem solving and security. I am currently working as a full-time
        senior web and mobile developer and tech mentor. I am always interested
        in challenges. Feel free to reach out to me by email at
        mohamadchalhou24@gmail.com to connect and know more about my work!
      </div>
    </div>
  );
};

export default About;
