import React from 'react'

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
                    <a href="#" className="lang">
                        Japanese
                    </a>
                    <a href="#" className="get poppins-medium">
                        Get Start
                    </a>
                </div>
            </div>
        </div>

    </nav>
  )
}

export default Navbar