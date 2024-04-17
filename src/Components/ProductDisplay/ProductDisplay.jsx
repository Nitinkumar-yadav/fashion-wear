import React, { useState, useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleSizeClick = (size) => {
       if(selectedSize === "M"){
            setSelectedSize(product.new_price*20);
          }
        setSelectedSize(size);
      };
  
    const handleQuantityIncrement = () => {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
    };
  
    const handleQuantityDecrement = () => {
      if (quantity > 1) {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
      }
    };


  return (
    <div className='productdisplay'>
      <div className="productdisplay_left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay_right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-prices-old">₹{product.old_price}</div>
            <div className="productdisplay-right-prices-new">₹{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
          {product.Totalquantity > 0 ? <h3 style={{color:'green'}}>In Stock</h3> : <h3 style={{color:'red'}}>Out of Stock</h3>}
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
            <div className={`size-option ${selectedSize === 'S'   ? 'selected' : ''}`} onClick={() => handleSizeClick('S')}>S</div>
            <div className={`size-option ${selectedSize === 'M'   ? 'selected' : ''}`} onClick={() => handleSizeClick('M')}>M</div>
            <div className={`size-option ${selectedSize === 'L'   ? 'selected' : ''}`} onClick={() => handleSizeClick('L')}>L</div>
            <div className={`size-option ${selectedSize === 'XL'  ? 'selected' : ''}`} onClick={() => handleSizeClick('XL')}>XL</div>
            <div className={`size-option ${selectedSize === 'XXL' ? 'selected' : ''}`} onClick={() => handleSizeClick('XXL')}>XXL</div>
          </div>
        </div>
        <div className="productdisplay-right-quantity">
        <h1>Quantity</h1>
          <div className='btn' onClick={{handleQuantityIncrement}}>-</div>{quantity}<div className='btn' onClick={{handleQuantityDecrement}}>+</div>
        </div> 
        <button onClick={() => addToCart(product.id,product.quantity)}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span> {product.name}</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
