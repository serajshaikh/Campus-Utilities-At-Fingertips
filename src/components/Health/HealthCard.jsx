import React from "react";
import hprofile from "../../images/profile3.png";
import medicine from "../../images/medicine5.jpg";
import ambulance from "../../images/ambulance5.jpg";
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const HealthCard = () => {
  return (
    <div className="container_center">
      <div className="cards">
        <div className="card">
          <img src={hprofile} className="card_img" alt="..." />
          <div className="card_info">
            <p className="card_category">
              View or update your health profile details
            </p>

            <Link to={"/health/healthform/"+"profile"} className="card-link">
              <Button  color="primary" className="card_button">
                Profile
              </Button>
            </Link>
            
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <img src={medicine} className="card_img" alt="..." />
          <div className="card_info">
            <p className="card_category">
              Upload Medical Prescription & Get Medicine Delivered Soon
            </p>
          <Link to={"/health/healthform/"+"ordermedi"}  className="card-link">
            <Button  color="primary" className="card_button">
                Order Medicine
            </Button>
          </Link>
            
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <img src={ambulance} className="card_img" alt="..." />
          <div className="card_info">
            <p className="card_category">
              We're a call away from Emergency to Safety
            </p>
          <Link to={"/health/healthform/"+"Ambulane"} className="card-link"> 
            <Button  color="primary" className="card_button">
            Call Ambulance
            </Button>
          </Link>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCard;
