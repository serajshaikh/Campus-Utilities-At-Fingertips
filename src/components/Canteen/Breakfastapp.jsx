import React from 'react'
import Breakfast from './Breakfast';
import Cartitem from './Cartitem';
import { CartProvider } from "react-use-cart";
import './canteen.css';

function Breakfastapp() {
    return (
        <>
          <CartProvider>
              <Breakfast/> 
              <Cartitem/>
          </CartProvider>
        </>
    )
}

export default Breakfastapp
