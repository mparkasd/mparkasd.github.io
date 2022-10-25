import React from 'react'
import './header.css'
import HeaderButtons from './HeaderButtons'
import iPhoto from '../../assets/iPhoto.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container headerContainer">
        <h2 className='title'>dimitrisBarkas</h2>
        <h4>Editor, Gamer, Web-dev to be.</h4>
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
