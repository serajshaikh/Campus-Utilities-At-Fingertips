import React from "react";
import web from "../images/about.png";
import AboutRemaining from "./AboutRemaining";
import AboutCard from "./AboutCard";
import Common from "../others/Common";
import AboutCardSdata from "./AboutCardSdata";
import "./AboutCard.css";
import './AboutCard.css';

const About = () => {
  return (
    <>
      <Common
        name="Welcome To About Page"
        visit="/contact"
        imgsrc={web}
        btname="Get Contact"
      />
      <AboutRemaining />
      <div className="bg_color">
        <div className="my-5">
          <h1 className="text-center">OUR TEAM</h1>
        </div>
        <div className="container-fluid container_center">
          {AboutCardSdata.map((val, ind) => {
            return (
              <AboutCard key={ind} imgsrc={val.imgsrc} title={val.title} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
