import React, { useState } from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  const [val, setVal] = useState(" ")
  const click = () =>{
    if(val===" "){
      alert("Please put email for subscription");
    }
    else{
    alert(val + " Subscribed Successfully")
    }
  }
  const change = event =>{
    setVal(event.target.value)
  }
  return (
    <div className='news-letter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
         <input onChange={change} value={val} type="Email" placeholder='Your Email id'/>
         <button onClick={click}>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
