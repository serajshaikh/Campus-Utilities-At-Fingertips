import React from 'react';
import './css/templatemo-style.css';
import { Link } from 'react-router-dom'
import breakfast from './img/cook_breakfast.png';
import lunch from './img/cook_lunch.png';
import dinner from './img/cook_dinner.png';
import './canteen.css';


const canteen = () => {
    return (
<div>
    
    <section class="banner">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <h4>Here you can find delecious foods</h4>
                    <h2>University Restaurant</h2>
                </div>
            </div>
        </div>
    </section>

    <section class="cook-delecious">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-md-offset-1">
                    <div class="first-image">
                        <img src="img/cook_01.jpg" alt=""/>
                    </div>
                </div>
                
                <div class="col-md-3">
                    <div class="second-image">
                        <img src="img/cook_02.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="services">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="service-item">
                        <Link to="/canteen/breakfast">
                        <img src={breakfast} alt="Breakfast"/>
                        <h4>Breakfast</h4>
                        </Link>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="service-item">
                        <Link to="/canteen/lunch">
                        <img src={lunch} alt="Lunch"/>
                        <h4>Lunch</h4>
                        </Link>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="service-item">
                        <Link to="/canteen/dinner">
                        <img src={dinner} alt="Dinner"/>
                        <h4>Dinner</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</div>
    )
}

export default canteen
