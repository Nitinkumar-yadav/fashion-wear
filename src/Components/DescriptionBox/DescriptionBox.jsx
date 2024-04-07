import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
            When you shop online, you have to give out your personal and financial information, which can make some people worried about security. While most reputable online stores have strong security measures in place, some people are still afraid of their data being stolen.
            </p>
            <p>
            The popularity of online shopping has had a big effect on regular stores. Physical stores are now facing more competition, and some of them are trying new strategies to stay relevant, like selling both online and in their stores.
            </p>

        </div>
    </div>
  )
}

export default DescriptionBox
