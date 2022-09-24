import React from 'react';
import { useCart } from "react-use-cart"; 
import {Link} from "react-router-dom";

const Cartitem = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if(isEmpty) return <h2 className="text-center">Cart is empty</h2>
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    
                        Cart({totalUniqueItems} total Items:({totalItems}))
                        <table className="table table-dark table-hover m-0">
                            <tbody>
                                {
                                    items.map((item,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>
                                                    <img src={item.img} style={{height:'6rem'}}/>
                                                </td>
                                                <td>{item.price}</td>
                                                <td>
                                                    Quantity: {item.quantity}
                                                </td>
                                                <td>
                                                    <button className="btn btn-info ms-2"
                                                    onClick={()=>updateItemQuantity(item.id,item.quantity - 1)}
                                                    >
                                                    - </button>
                                                    <button onClick={()=>updateItemQuantity(item.id,item.quantity + 1)}
                                                     className="btn btn-info ms-2"> + </button>
                                                    <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="btn btn-danger ms-2"> Remove Item</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                </div>
                <div className="col-auto ms-auto">
                    <h4>Total price: {cartTotal}</h4>
                </div>
                <div className="col-auto">
                    <button className="btn btn-danger"  onClick={() => emptyCart()}>Clear Cart</button>
                    <Link to={"/payment/"+cartTotal} className="link_button">
                    PayNow
                    </Link>
                </div>
                
            </div>
        </section>
    )
}

export default Cartitem
