import React from "react";
import {NavLink} from 'react-router-dom'

const Common = (props) => {
  return (
    <>
      <section className=" d-flex align-items-center mb-5" id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 mx-md-auto pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column">
                  <h1>{props.name}<strong className="brand-name"> CampusUtilityAtFingerTips</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of Developers for Changing world into a 
                    modern,efficient and latest tech life globe.
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-1 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
