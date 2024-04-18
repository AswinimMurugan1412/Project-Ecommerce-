import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>WeekEnd Style!</p>
      </div>
      <ul className="footer-links">
      <div>Email: weekendstyle@gmail.com</div>
      <div>Phone: +91 9876543210</div>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" /><p>weekendstyle1412</p>
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" /><p>9876543210</p>
        </div>
      </div>
      <div className="footer-end">
        <hr />
        <p><b><h3>Happy Shopping.</h3></b></p>
      </div>
    </div>
  )
}

export default Footer
