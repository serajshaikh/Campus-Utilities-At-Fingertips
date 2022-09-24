import React,{useState} from 'react';
import { GoogleLogin } from 'react-google-login';
import './Login.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { signin,signup } from '../../actions/auth';


const initialState = {username:"",regnumber:"",password:"",confirmpassword:""};
const Login = () => {
    const [isSingUp, setIsSingUp] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const history = useHistory(); 
    const dispatch = useDispatch();

    const handlechange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
     e.preventDefault();
      //console.log(formData);

      if(isSingUp){
          dispatch(signup(formData,history));
      }else{
          dispatch(signin(formData,history));
      }
    }

    const switchMode = () => {
        setIsSingUp((PrevIsSignUp)=>!(PrevIsSignUp));
    }
  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div className="card card0 border-0">
        <div className="row d-flex">
           
            <div className="col-lg-6">
                <div className="card1 pb-5">

                    <div className="row">
                        <img src="https://i.imgur.com/CXQmsmF.png" alt="" className="logo"/>
                    </div>

                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                         <img src="https://i.imgur.com/uNGdWHi.png" alt="" className="image"/>
                     </div>
                     
                </div>
            </div>

            <div className="col-lg-6">
                <div className="card2 card border-0 px-4 py-5">

                    <div className="row mb-4 px-3">
                        <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>

                            <div>
                                <GoogleLogin  
                                clientId="681162978567-2dom9ir94tibi7d32vur0amip8ut7eb6.apps.googleusercontent.com"
                                cookiePolicy="single_host_origin"
                                />
                            </div>
                    </div>

                    <div className="row px-3 mb-4">
                        <h4>{isSingUp?"Registartion":"Login"}</h4>
                    </div>

           
            <form onSubmit={handleSubmit}>

               { isSingUp && (

                   <div className="row px-3">
                         <label className="mb-1">
                            <h6 className="mb-0 text-sm">UserName</h6>
                        </label> 
                        <input className="mb-4" type="text" name="username" onChange={handlechange} placeholder="Enter your Name"/>
                    </div>
                )}
                
                    <div className="row px-3">
                         <label className="mb-1">
                            <h6 className="mb-0 text-sm">Registration Number</h6>
                        </label> 
                        <input className="mb-4" type="text" name="regnumber" onChange={handlechange} placeholder="Enter your Rg No"/>
                    </div>
                
                    
                    <div className="row px-3">
                         <label className="mb-1">
                            <h6 className="mb-0 text-sm">Password</h6>
                        </label> 
                        <input className="mb-4" type="text" name="password" onChange={handlechange} placeholder="Enter your Password"/>
                    </div>
                    

                    {
                        isSingUp && (       
                    <div className="row px-3">
                         <label className="mb-1">
                            <h6 className="mb-0 text-sm">Confirm Password</h6>
                        </label> 
                        <input className="mb-4" type="text" name="confirmpassword" onChange={handlechange} placeholder="Re-Enter your Password"/>
                    </div>

                    )}
                    
                    <div className="row mb-3 px-3">
                         <button type="submit" className="btn btn-blue text-center">
                             {isSingUp?"Registartion":"Login"}
                          </button>
                     </div>
            </form>
            

                    <div className="row mb-4 px-3">
                         <small className="font-weight-bold">
                             <p onClick={switchMode}>
                                { isSingUp ? "Already have an account" : "Don't have account? SignUp" }
                             </p>
                         </small>
                     </div>
                </div>
            </div>


        </div>

    </div>
</div>
  )
}

export default Login
