import React from "react";
import HealthCard from "./HealthCard";
import Common from "../../NavComponent/others/Common";
import web from "../../NavComponent/images/health_animation.png";

const Health = () => {
  return (
    <>
      <Common
        name="Welcome To Health Page"
        visit="/contact"
        imgsrc={web}
        btname="Get Contact"
      />

      <HealthCard />
    </>
  );
};

export default Health;
