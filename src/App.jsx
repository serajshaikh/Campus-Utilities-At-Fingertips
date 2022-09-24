import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Health from './components/Health/Health';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './NavComponent/Navbar';
import Home from './NavComponent/Home/Home';
import About from './NavComponent/About/About';
import Service from './NavComponent/others/Service';
import Contact from './NavComponent/others/Contact';
import Footer from './NavComponent/Footer/Footer';
import Transport from './components/Transports/Transport';
import BusRequest from './components/Transports/BusRequest';
import BicycleRequest from './components/Transports/BicycleRequest';
import Maintenance from './components/Maintenance/Maintenance';
import Login from './NavComponent/Auth/Login';
import Canteen from './components/Canteen/Breakfastapp';
import Classroom from './components/classroom/Home/Classroom';
import Admin from './Admin/Admin';
import Breakfast from './components/Canteen/Breakfastapp';
import HealthForm from './components/Health/HealthForm';
import Library from "./components/Library/Library";
import Payment from "./components/Canteen/Billing";
const App = () => {
  return (
    <> 
      <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/service" exact component={Service} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/login" exact component={Login} />
            <Route path="/health"  exact component={Health} />
            <Route path="/health/healthform/:id"  exact component={HealthForm} />
            <Route path="/transport" exact component={Transport} />
            <Route path="/maintenance" exact component={Maintenance} />
            <Route path="/transport" exact component={Transport} />
            <Route path="/transport/busrequest" exact component={BusRequest} />
            <Route path="/transport/bicyclerequest" exact component={BicycleRequest} />
            <Route path="/canteen" exact component={Canteen}/>
            <Route path="/classroom" exact component={Classroom}/>
            <Route path="/canteen/breakfast" exact component={Breakfast}/>
            <Route path="/admin" exact component={Admin}/>
            <Route path="/library" exact component = {Library} />
            <Route path="/payment/:amount" exact component = {Payment} />
          </Switch>
        <Footer/>

    </BrowserRouter>
    
    </>
  );
};

export default App;
