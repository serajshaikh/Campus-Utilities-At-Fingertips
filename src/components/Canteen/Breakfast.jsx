import React from 'react';
import './css/templatemo-style.css';
import './css/owl-carousel.css';
import './canteen.css';
import breakfastItem from './Breakfastitem';
import Breakfastcard from './Breakfastcard';


const Breakfast = () => {

    return (
        <>

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
        <section >
        <div>
          <div className="container_center">
            {breakfastItem.productData.map((item, index) => {
              return (
                <Breakfastcard
                  img={item.img}
                  price={item.price}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </section>

    </>
    )
}

export default Breakfast
