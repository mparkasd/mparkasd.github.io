import React from 'react'
import './header.css'
import HeaderButtons from './HeaderButtons'
import iPhoto from '../../assets/iPhoto.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container headerContainer">
        <h5>Oh, Hi There!</h5>
        <h1>I'm Dimitris</h1>
        <h5 className="textLight">Photography enthusiast, F1 fanboy, Web-dev to be.</h5>
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
