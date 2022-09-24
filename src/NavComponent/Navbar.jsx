import React,{useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actionType from '../constants/actionTypes';
import {useLocation,useHistory} from 'react-router-dom'; 
import { Button,Avatar } from '@material-ui/core';
import decode from 'jwt-decode';
import './Navbar.css';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

 const logout=()=>{
   dispatch({ type:actionType.LOGOUT });
   history.push('/');
   setUser(null);
 };

 useEffect(() => {
   const token = user?.token; //typescript
   if(token){
     const decodedToken = decode(token);
     if(decodedToken.exp * 1000 < new Date().getTime()){
       logout();
     }
   }
   setUser(JSON.parse(localStorage.getItem('profile')));
 },[location])

  return (
    <>
      <div className="container-fluid nav_bg mb-5">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  CampusUtilitiesAtFingerTips
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className=" navbar-nav ms-auto  mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="menu_active"
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/service"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="menu_active"
                        className="nav-link"
                        to="about"
                      >
                        About
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="menu_active"
                        className="nav-link"
                        to="contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                    
                    
                    {/** 
                      user && (
                        <li className="nav-item">
                          <NavLink
                        exact
                        activeClassName="menu_active"
                        className="nav-link"
                        to="admin"
                      >
                        Admin
                      </NavLink>
                        </li>
                   )
                    */}
              

                    {

                      user && (
                        <li className="nav-item-name">
                           <h5>{user.result.name}</h5>
                        </li>
                      )
                    }

                    {
                      user && (
                        <li>
                           <Avatar className="purple" alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        </li>
                      )
                    }
                    
                    <li className="nav-item ps-lg-5">
                      <NavLink
                        exact
                        activeClassName="menu_active"
                        className="nav-link"
                        to="login"
                      >
                        {user ? ( 
                        <Button variant="contained" color="secondary" onClick={logout}>Logout</Button> 
                        ):
                        "Login"
                        }
                      </NavLink>
                    </li>
                  
                   
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
