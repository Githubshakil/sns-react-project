import React from 'react'
import Button from './Button'

const Banner = () => {
  return (
    
    <section id="banner">
        <div className="container">
            <div className="like_loves">

                <img className="like_love" src="./images/like_love.png" alt="img"/>
            </div>
            <p className="poppins-medium para">
                Welcome to borderless chain
            </p>
            <h1 className="poppins-bold">
                Connecting the World. Building a Shared Future.
            </h1>
            {/* <!-- <a href="#" className="sns poppins-regular">SNS & Community</a>
            <a href="#" className="sns poppins-regular">Membership Club</a> -->
            <a href="#" className="member poppins-regular">SNS & Community</a>
            <a href="#" className="member membership poppins-regular">Membership Club</a> */}

                <Button href="#" style="sns , sns poppins-regular" content="SNS & Community"/>
                <Button type="#" style="member" content="Membership Club"/>

        </div>
        <div className="test">
        <div className="outer_img">
            <div className="container">
                <img className="cards" src="./images/banner_Cards.png" alt="img"/>
            </div>
    
        </div>
    </div>

    </section>
    
  )
}

export default Banner