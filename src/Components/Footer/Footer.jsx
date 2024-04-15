import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import facebook_icon from '../Assets/facebook.png'
import twitter_icon from '../Assets/twitter.png'

const Footer = () => {
  return (
    <div className='footer'>
       <a href='/' className="footer-logo">
         <img src={footer_logo} alt="" />
         {/* <p>UNIQUE</p> */}
       </a>
       <ul className="footer-links">
         <a href='/'>Products</a>
         <a href='/company'>About</a>
         <a href='/contact'>Contact</a>
       </ul>
       <div className="footer-socials-icon">
         <div className="footer-icons-container">
          <a href="https://instagram.com/nitin_yadav_nky">
            <img src={instagram_icon} alt="" />
          </a>
         </div>
         <div className="footer-icons-container">
          <a href="https://facebook.com/nitindv260@gmail.com">
            <img src={facebook_icon} alt="" />
          </a>
         </div>
         <div className="footer-icons-container">
          <a href="https://twitter.com/nitindv260">
            <img src={twitter_icon} alt="" />
          </a>
         </div>
       </div>
       <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved .</p>
       </div>
    </div>
  )
}

export default Footer
