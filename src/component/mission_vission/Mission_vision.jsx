import React from 'react'
import './Mission_vision.css'

const Mission_vision = () => {
  return (
<section className="mission_vision">
        <div className="container">
            <div className="sidebyside">
                <div className="content mission_content">
                    <h2 className="poppins-bold">Our Commitment to Mission and Vision</h2>
                    <div className="mission">
                        <div className="mission_logo">
                            <img src="./images/icon 1.png" alt="icon"/>
                            <h3 className="poppins-semibold">Mission</h3>
                        </div>
                        <p className="poppins-regular">
                            At Borderless Chain, we aim to connect and empower communities through a secure and
                            inclusive platform.
                            We bridge cultural gaps and drive growth with innovative technology, fostering global
                            connections and empowerment for all.
                        </p>
                    </div>
                    <div className="mission">
                        <div className="mission_logo">
                            <img src="./images/icon2.png" alt="icon"/>
                            <h3 className="poppins-semibold">Mission</h3>
                        </div>
                        <p className="poppins-regular">
                            At Borderless Chain, we aim to connect and empower communities through a secure and
                            inclusive platform.
                            We bridge cultural gaps and drive growth with innovative technology, fostering global
                            connections and empowerment for all.
                        </p>
                    </div>
                </div>
                <div className="content_img">
                    <img src="./images/content_img.png" alt="img"/>
                </div>
            </div>
        </div>
    </section>  )
}

export default Mission_vision