import React from 'react'
import './footer.css'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footerLogo'>dimitrisBarkas</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#hobbies">Hobbies</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div className="footerSocials">
        <a href="https://www.instagram.com/nutsosya/" target="_blank" rel='noreferrer'><BsInstagram className='footerIcons'/></a>
        <a href="https://www.facebook.com/mparkasd" target="_blank" rel='noreferrer'><BsFacebook className='footerIcons'/></a>
        <a href="https://twitter.com/mparkasd" target="_blank" rel='noreferrer'><BsTwitter className='footerIcons'/></a>
      </div>

      <div className="footerCopyright">
        <small>&copy; nutsosya. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer