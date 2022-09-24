import React, { useState } from "react";
import Common from '../../NavComponent/others/Common';
import web from '../../NavComponent/images/web.png';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/maintenance';

const Maintenance = () => {
  const [data, setData] = useState({
    buildname: "",
    exactloc: "",
    msg: "",
  });
  const user = JSON.parse(localStorage.getItem('profile'));
  

  const dispatch = useDispatch();

  const clear = () => {
    setData({
    buildname: "",
    exactloc: "",
    msg: ""
    })
  };

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({...data, name:user?.result?.name}));
    clear();
    alert("Your Complain sent to Authority");
  };


  const inputEvent = (e) => {
     setData({...data,[e.target.name]:e.target.value});
  };

  return (
  <>
    <Common 
      name="Welcome To Maintenance Page"
      visit="/contact"
      imgsrc={web}
      btname="Get Contact"/>

      <div className="my-5">
        <h1 className="text-center"> Maintenance </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
           
           
          <form onSubmit={formSubmit} action="" autoComplete="off">
              <div className="mb-5">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Select building:
                </label>
                
                <select className="form-select" name="buildname" value={data.buildname} onChange={inputEvent} aria-label="Default select example">
                  <option selected>Select bulding</option>
                  <option name="buildname" >Software Block</option>
                  <option name="buildname">Engineering Block</option>
                  <option name="buildname" >Canteen</option>
                </select>
              </div>
           
              <div className="mb-5">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Exact location in selected building
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="exactloc"
                  value={data.exactloc}
                  onChange={inputEvent}
                  placeholder="exact location"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
              </div>
             
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
          </form>

            
          </div>
        </div>
      </div>
  </>
  );
};

export default Maintenance;
