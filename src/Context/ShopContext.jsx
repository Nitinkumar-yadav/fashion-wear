import React, { createContext, useEffect, useState } from 'react'
// import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 200 + 1; index++) {
      cart[index] = {
        quantity: 1,
        selectedSize: null,
      };
    }
    return cart;
  };

const ShopContextProvider = (props) =>{

    const[all_product,setAllProduct] = useState([]);
    const [cartItems,setCartItems] = useState(getDefaultCart());


    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>{
            setAllProduct(data);
        })
    },[])
    
    const addToCart = (itemId) => {
        console.log(cartItems);
        setCartItems((prev) => ({
          ...prev,
          [itemId]: {
            ...prev[itemId],
            quantity: prev[itemId]?.quantity ? prev[itemId].quantity + 1 : 1,
          },
        }));
      };
      
      const removeFromCart = (itemId) => {
        setCartItems((prev) => {
          const updatedCartItems = { ...prev };
          if (updatedCartItems[itemId]?.quantity > 1) {
            updatedCartItems[itemId].quantity -= 1;
          } else {
            delete updatedCartItems[itemId];
          }
          return updatedCartItems;
        });
      };
    
      const updateQuantity = (itemId, newQuantity) => {
        setCartItems((prev) => ({
          ...prev,
          [itemId]: {
            ...prev[itemId],
            quantity: newQuantity,
          },
        }));
      };

      const updateSelectedSize = (itemId, size) => {
        setCartItems((prev) => ({
          ...prev,
          [itemId]: {
            ...prev[itemId],
            selectedSize: size,
          },
        }));
      };
        
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }
   
    const getTotalCartItems =() =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        updateSelectedSize,
        updateQuantity,
      };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
