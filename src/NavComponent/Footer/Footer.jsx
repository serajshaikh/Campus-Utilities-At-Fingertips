import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className=" container-flux overflow-hidden  mx-auto mt-5">
        <div className="footer_body  text-center mt-5">
          <div className="row mt-3 ">
            <div className="col-md-3 line_height  mx-auto  mb-4">
              <h6 className="font-weight-bold">CampusUtilityAtFingerTips</h6>
              <hr />
              <p>
              An awesome platform to enjoy campus facilities and resources 
                just on a click.
              </p>
            </div>
            <div className="col-md-3  mb-4  mx-auto ">
              <h6 className="font-weight-bold">CONTACT US</h6>
              <hr />
              <address className="mr-4">
                <p>campusutilitiesatfingertips.com </p>
                <p>pin 206201 cusat </p>
                <p>cochin kerala</p>
              </address>
            </div>
            <div className="col-md-2  mb-4  mx-auto ">
              <h6 className="font-weight-bold">GET STARTED</h6>
              <hr />
              <p>
                Your Account
              </p>
              <p>
                User Experiences
              </p>
              <p>
               Our Services
              </p>
              <p>
                Help
              </p>
            </div>
            <div className="col-md-2   mb-md-0 mb-4  mx-auto">
              <h6 className="font-weight-bold">FOLLOW US</h6>
              <hr />
              <p>
                <i className="fab fa-facebook-f white-text mr-4">  </i> facebook
              </p>
              <p>
                <i className="fab fa-twitter white-text mr-4">   </i>  twitter
              </p>
              <p>
                <i className="fab fa-linkedin-in white-text mr-4">   </i> linkedin
              </p>
              <p>
                <i className="fab fa-instagram white-text"> </i> instagram
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2020 CampusUtilityAtFingerTips.All Rights Reserved | Terms and Condition
        </div>
      </footer>
    </>
  );
};

export default Footer;
