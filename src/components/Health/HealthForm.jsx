import React from 'react';
import {useParams} from "react-router-dom";
 
const HealthForm = () => {
    const {id} = useParams();
    return (
    <div>   
        <div className="my-5">
          <h1 className="text-center">{id} SERVICE REQUEST</h1>
        </div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">   
            <form action="" autoComplete="off">   
                <div className="mb-5">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Patient Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"                   
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
                    placeholder="Enter Registration No"
                  />
                </div>  


     
             {
                (id==="Ambulane")&&(<div
                 className="mb-5">
                 <label htmlFor="exampleFormControlInput1" className="form-label">
                   Accident location
                 </label>
                 <input
                   type="address"
                   className="form-control"
                   id="exampleFormControlInput1"
                   name="hireaddress"                   
                   placeholder="Enter Address"
                 />
               </div> )

             }

                {
                    (id==="ordermedi")&&
                    (<div className="mb-5">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                      Medicine Name
                    </label>
                        <input
                          type="address"
                          className="form-control"
                          id="exampleFormControlInput1"
                          name="address"                   
                          placeholder="Enter Medicine Name"
                        />
                  </div>)
                }

                {
                    (id==="ordermedi")&&
                   (
                   <div className="mb-5">
                     <label htmlFor="exampleFormControlInput1" className="form-label">
                       Medicine Parcel Location
                     </label>
                     <input
                       type="address"
                       className="form-control"
                       id="exampleFormControlInput1"
                       name="address"                   
                       placeholder="Enter parcel Location"
                     />
                   </div>
                   )
                }  
                <div className="col-12">
                  <button className="btn btn-outline-primary" type="submit">
                    REQUEST
                  </button>
                </div>
              </form>



            </div>
          </div>
        </div>
        </div>
    )
}

export default HealthForm
