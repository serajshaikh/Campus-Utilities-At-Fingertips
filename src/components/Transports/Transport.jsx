import React from "react";
import Common from "../../NavComponent/others/Common";
import TransportCard from "./TransportCard";
import web from '../../NavComponent/images/transport.png';


const Transport = () => {
  return (
    <>
      <Common
        name="Welcome To Transport Page"
        visit="/contact"
        imgsrc={web}
        btname="Get Contact"
      />
      <TransportCard />
    </>
  );
};

export default Transport;
