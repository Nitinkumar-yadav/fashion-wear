import React, { useEffect } from 'react'
import './listproduct.css'
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {

  const [allproducts,setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }
  useEffect(() => { 
    fetchInfo();
  },[])

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
        {allproducts.map((product,index)=>{
          return(
            <div className="listproduct-format listproduct-format-main" key={index}>
              <img src={product.image} alt="" />
              <p>{product.title}</p>
              <p>{product.category}</p>
              <p>₹{product.oldprice}</p>
              <p>₹{product.newprice}</p>
              <img src={cross_icon} alt="" className="listproduct-remove-icon"/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListProduct
