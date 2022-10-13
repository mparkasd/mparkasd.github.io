import React from 'react'
import './header.css'
import HeaderButtons from './HeaderButtons'
import iPhoto from '../../assets/iPhoto.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container headerContainer">
        <br />
        <h2>dimitrisBarkas</h2>
        <br />
        <h4 className="textLight">Editor, Gamer, Web-dev to be.</h4>
        <HeaderButtons />
        <HeaderSocials />
        <div className="iPhoto">
          <img src={iPhoto} alt="me" />
        </div>
        <a href='#contact' className='scrollDown'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
