import React from 'react'
import './header.css'
import HeaderButtons from './HeaderButtons'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Oh, Hi There!</h5>
        <h1>I'm Dimitris</h1>
        <h5 className="textLight">Photography enthusiast, F1 fanboy, Web-dev to be.</h5>
        <HeaderButtons />
      </div>
    </header>
  )
}

export default Header
