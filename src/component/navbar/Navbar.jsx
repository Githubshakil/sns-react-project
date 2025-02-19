import React from 'react'
import Button from '../button/Button'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className="sidebyside">
                <div className="logo">
                    <a href="#">
                        <img src="./images/Logo.png" alt="Logo"/>
                    </a>

                </div>
                <div className="menu_item">
                    <ul className="poppins-medium">
                        <li><a href="">Home</a> </li>
                        <li><a href="">About us</a></li>
                        <li><a href="">Mission & vision</a></li>
                        <li><a href="">Testimonial</a></li>
                        <li><a href="">Join us</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>

                </div>
                <div className="btn">
                    {/* <Button href="#" style="lang" content="Japanese"/> */}
                    <div className="lang">
                                <i className="fa-solid fa-globe"></i>
                                <select name="name" className="nameSelect">
                                    <option value="Select Item">Language</option>
                                    <option value="bangla">Bengali</option>
                                    <option value="english">English</option>
                                    <option value="japanese">Japanese</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="turkish">Turkish</option>
                                </select>
                            </div>
                    <Button type='button' style="get" content="Get start"/>
                </div>
            </div>
        </div>

    </nav>
  )
}

export default Navbar