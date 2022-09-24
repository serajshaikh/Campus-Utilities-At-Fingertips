import React from "react";
import Main from '../../others/Main';
import web from '../images/service.png'
import Common from './Common';

const Service = () => {
  return (
    <>
    <Common
        name="This Is Our service page"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <Main/>
    </>
  );
};

export default Service;
