import React from 'react'
import './nav.css'
import {RiHomeLine, RiUserLine, RiCameraLensFill, RiContactsBookLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href="#"><RiHomeLine/></a>
      <a href="#about"><RiUserLine/></a>
      <a href="#hobbies"><RiCameraLensFill/></a>
      <a href="#portfolio"><RiContactsBookLine/></a>
      <a href="#contact"><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav