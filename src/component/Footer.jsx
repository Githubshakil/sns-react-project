import React from 'react'

const Footer = () => {
  return (
<footer id="footer">
    <img className="footer_img" src="./images/circle.png" alt=""/>

    <div className="footer_box">
        <h3 className="poppins-semibold">Corporate Address & Contact Info</h3>
        <h4 className="poppins-medium">Company Address</h4>
        <p className="poppins-regular">Lorem ipsum dolor sit amet consectetur. Amet nulla pretium nunc ante tortor. Sapien lacus orci </p>
        <ul className="poppins-medium">
            <li><i className="fa-solid fa-envelope"></i>
                abc.support@gmail.com
            </li>
            <li><i className="fa-solid fa-phone"></i> 012345678989</li>
        </ul>
        <a className="poppins-semibold" href="#">Get Start</a>
    </div>
    <div className="bottompart">
        <div className="container">
            <div className="sidebyside">
                <div className="left">
                    <img src="./images/Logo.png" alt="logo"/>
                </div>
                <div className="middle poppins-medium">
                    <a href="#">Term of service</a>
                    <a href="#">Privacy and policy</a>
                </div>
                <div className="right">
                    <a className="linkedin" href="#"><i className=" linkedin fa-brands fa-linkedin"></i></a>
                    <a className="twitter" href="#"><i className="fa-brands fa-square-x-twitter"></i></a>
                    <a className="facebook" href="#"><i className="fa-brands fa-facebook"></i></a>
                </div>


            </div>
        </div>

    </div>
    <p className="btmtxt poppins-medium">Copyright © (Year) Borderless Chain LLC. All rights reserved.</p>
</footer>  )
}

export default Footer