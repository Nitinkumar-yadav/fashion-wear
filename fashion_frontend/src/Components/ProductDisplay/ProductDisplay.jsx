import React, {useState ,useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
      setQuantity(parseInt(event.target.value));
    };

    const handleAddToCart = () => {
      addToCart(product.id + quantity);
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
        Green solid insulator puffer jacket, has a stand collar, 2 pockets ,has a zip closure, long sleeves, straight hemline, polyester lining
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <div className="productdisplay-right-quantity">
          <h1>Select Quantity</h1>
          <button onClick={handleQuantityChange}>+</button>
          {setQuantity}
          <button onClick={()=>{setQuantity(quantity-1)}}>-</button>
        </div>
        <button onClick={handleAddToCart}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span>Women, T-Shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
