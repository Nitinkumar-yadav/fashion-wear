import React, { useEffect, useState} from 'react'
import './listproduct.css'
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {

  const [allproduct,setAllProduct] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data);
      })
      .catch((err) => console.log(err));
  };
  
  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch(`http://localhost:4000/removeproduct`,{
      method:'POST',
      headers:{
          Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  console.log(allproduct);

  return (
    <div className='list-product'>
      <h1>All Product Lists</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Category</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr/>
        {allproduct.map((product,index)=>{
          return<>
            <div className="listproduct-format listproduct-format-main" key={index}>
              
              <img src={product.image} alt='Product-Image' className='listproduct-product-icon' />
              <p>{product.name}</p>
              <p>{product.category}</p>
              <p>₹{product.old_price}</p>
              <p>₹{product.new_price}</p>
              <img onClick={()=>{remove_product(product.id)}} src={cross_icon} alt="" className="listproduct-remove-icon"/>
            </div>
            <hr/>
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct
