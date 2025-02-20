import React from 'react'
import Button from '../Button'
import './banner.css'

const Banner = () => {
  return (
    
    <section className="banner">
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