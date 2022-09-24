import { Button } from '@material-ui/core';
import React from 'react'
import logo from "../img/logo.png";
import { useLocalContext } from '../../../context/classroom/context';

const Login = () => {
    const { login, loggedInUser } = useLocalContext();
  	console.log('LoginPage')
    console.log(loggedInUser);
    return (
      <div className="login">
        <img className="login__logo" src={logo} alt="Classroom" />
  
        <Button variant="contained" color="default" onClick={() => login()}>
          Login Now!
        </Button>
      </div>
    );
  };
  
  export default Login;
  