import React from 'react'
import './RelatedProducts.css'
// import data_product from '../Assets/data'
import all_product from '../Assets/all_product'
import Item from '../Items/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
       <h1>Related Products</h1>
       <hr />
       <div className="relatedproducts-item">
        {all_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
       </div>
    </div>
  )
}

export default RelatedProducts
