import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import { createPost } from '../../actions/transport';


const TransportCommon = (props) => {
  const [data, setData] = useState({
    fullname: "",
    regnumber: "",
    hireaddress: "",
    address: "",
  });

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const clear = () => {
    setData({
      fullname: "",
      regnumber: "",
      hireaddress: "",
      address: "",
    })
  };



  const formSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(createPost({...data,name:user?.result?.name}));
    clear();
    alert("Your request sent successfully");
  };

  
  const inputEvent = (e) => {
     setData({ ...data,[e.target.name]:e.target.value });
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">{props.name} SERVICE REQUEST</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
         
         
          <form onSubmit={formSubmit} action="" autoComplete="off">
              
              <div className="mb-5">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Full Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                 
                  onChange={inputEvent}
                  placeholder="Enter your Name "
                />
              </div>


              <div className="mb-5">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Registration Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="regnumber"
                  onChange={inputEvent}
                  placeholder="Enter Registration No"
                />
              </div>


            
            <div
                className="mb-5"
                style={{ display: `${props.name === "BICYCLE" ? "" : "none"}` }}
              >
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Hire From
                </label>
                <input
                  type="address"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="hireaddress"
                  onChange={inputEvent}
                  placeholder="Enter Address"
                />
              </div>



              <div className="mb-5">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Destination Address
                </label>
                <input
                  type="address"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="address"
                  
                  onChange={inputEvent}
                  placeholder="Enter Your Address"
                />
              </div>


              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  REQUEST
                </button>
              </div>
            </form>



          </div>
        </div>
      </div>
    </>
  );
};

export default TransportCommon;
