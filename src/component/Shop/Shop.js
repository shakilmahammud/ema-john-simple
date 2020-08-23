import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [products,setProducts]=useState(first10);
    const [cart,setCart]=useState([]);
    const handelClick=(product)=>{
        console.log("added product",product)
        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
            <ul>
        {
            products.map(product=><Product product={product} handleAddProduct={handelClick}></Product>)
        }
    </ul>
            </div>
            <div className="cart-container">
                <h3>THis Cart</h3>
    <h5>order summery: {cart.length}</h5>
            </div>
            
   
        </div>
    );
};

export default Shop;