import React from 'react';
import { Button } from '@material-ui/core';
import { useCart } from "react-use-cart";

const Breakfastcard = (props) => {
    const { addItem } = useCart(); 
    return (
        <div className="cards">
        <div className="card">
            <img className="img_breakfast" src={props.img} alt="bread_1"/>
            <p>price:{props.price}</p>
            <div className="breakfast_button">
            <Button variant="contained" color="secondary" onClick={() => addItem(props.item)}>Add cart</Button> 
            </div>
        </div>
    </div>
    )
}

export default Breakfastcard
