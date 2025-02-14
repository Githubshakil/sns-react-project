import React from 'react'

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
        
        <a href="#" className="member poppins-regular">SNS & Community</a>
        <a href="#" className="member membership poppins-regular">Membership Club</a>

    </div>

</section>
  )
}

export default Banner