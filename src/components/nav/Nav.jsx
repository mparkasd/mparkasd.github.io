import React from 'react'
import './nav.css'
import { useState } from 'react'
import {RiHomeLine, RiUserLine, RiCameraLensFill, RiContactsBookLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'

const Nav = () => {
  const [currentNav, setCurrentNav] = useState ('#')
  return (
    <nav>
      <a href="#" onClick={() => setCurrentNav('#')} className={currentNav === '#' ? 'currentNav' : ''}><RiHomeLine/></a>
      <a href="#about" onClick={() => setCurrentNav('#about')} className={currentNav === '#about' ? 'currentNav' : ''}><RiUserLine/></a>
      <a href="#hobbies" onClick={() => setCurrentNav('#hobbies')} className={currentNav === '#hobbies' ? 'currentNav' : ''}><RiCameraLensFill/></a>
      <a href="#portfolio" onClick={() => setCurrentNav('#portfolio')} className={currentNav === '#portfolio' ? 'currentNav' : ''}><RiContactsBookLine/></a>
      <a href="#contact"onClick={() => setCurrentNav('#contact')} className={currentNav === '#contact' ? 'currentNav' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav