import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const {name,img,price,stock,seller}=props.product;
    return (
        <div className="product">
           <div>
               <img src={img} alt=""/>
           </div>
           <div>
           <h3 className="product-name">{name}</h3>
           <br/>
        <p><small> by {seller} </small></p>
        <p>${price}</p>
        <p>only {stock} left in  stock - order soon </p>
        <button 
        className="main-btn" onClick={()=>props.handleAddProduct(props.product)}
        >
            <FontAwesomeIcon icon={faShoppingCart}/>  add cart</button>
           </div>
    
        </div>
    );
};

export default Product;