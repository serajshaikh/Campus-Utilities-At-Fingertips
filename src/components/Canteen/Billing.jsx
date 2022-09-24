import React,{useState} from 'react';
import { useParams } from "react-router-dom";
import './billing.css';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/payment';

const Billing = () => {
    const { amount } = useParams();
    const dispatch = useDispatch();
    const [bill,setBill] = useState({
      student:"",
      regnum:"",
      address:""
    });

    const user = JSON.parse(localStorage.getItem('profile'));

    const clear = () => {
      setBill({
        student:"",
        regnum:"",
        address:""
      })
    };

    const formSubmit = (e) => {
      e.preventDefault();
      console.log(bill);
      dispatch(createPost({...bill, name:user?.result?.name}));
      clear();
      alert("Your Complain sent to Authority");
    };

    const inputEvent = (e) => {
      setBill({...bill,[e.target.name]:e.target.value});
   };
  

    return (
<div class="row row_billing">
  <div class="col-75 col-50_bill">
    <div class="container container_billing">
      <form onSubmit={formSubmit} action="">

        <div class="row row_billing">
          <div class="col-50 col-50_bill">
            <h3>CART</h3>
            
            <label for="fname"><i class="fa fa-user"></i> Student Name</label>
            <input onChange={inputEvent} type="text" id="fname" name="student"/>
            <label for="email"><i class="fa fa-envelope"></i>Reg Number</label>
            <input onChange={inputEvent} type="text" id="email" name="regnum"/>
            <label for="adr"><i class="fa fa-address-card-o"></i>Campus Location</label>
            <input onChange={inputEvent} type="text" id="adr" name="address"/>
          </div>
        </div> 
        <button className="btn btn-outline-primary" type="submit">
          Confirm Order
        </button>
      </form>
    </div>
  </div>

  <div class="col-25 col-25_billing">
    <div class="container container_billing">
      <h4>BILLING
        <span class="price" style={{color:'black'}}>
          <i class="fa fa-shopping-cart"></i>
        </span>
      </h4>
      <p>Total <span class="price" style={{color:'black'}}><b><h2>{amount}</h2></b></span></p>
    </div>
  </div>
</div>
    )
}

export default Billing
