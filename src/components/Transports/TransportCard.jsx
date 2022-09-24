import React from "react";
import bus1 from "../../images/bus1.jpeg";
import bicycle from "../../images/bicyle.jpg";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const TransportCard = () => {
  return (
    <>
      <div className="container_center">
        <div className="cards">
          <div className="card">
            <img src={bus1} className="card_img" alt="..." />
            <div className="card_info">
              <p className="card_category">
                View or update your health profile details
              </p>

              <Link to="/transport/busrequest" className="card_link">
                <Button color="primary" className="card_button">
                  BUS
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <img src={bicycle} className="card_img" alt="..." />
            <div className="card_info">
              <p className="card_category">
                Upload Medical Prescription & Get Medicine Delivered Soon
              </p>

              <Link to="/transport/bicyclerequest" className="card_link">
                <Button color="primary" className="card_button">
                  BICYLE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransportCard;
