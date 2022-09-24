import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';


function Cards(props){
  return(
  <>
    <div className='cards'>
      <div className='card'>
      <img src={props.imgsrc} alt="Poster" className="card_img"/>
      <div className="card_info">
        <p className="card_category">{props.title}</p>
      
       <br/>


        <Link to={props.link} className="card_link">
          <Button className="card_button" color="primary">{props.sName}</Button>
          </Link>
      </div>
      </div>
    </div>
  </>
  );
}

export default Cards;