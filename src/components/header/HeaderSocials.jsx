import React from 'react'
import {FiLinkedin, FiGithub} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='headerSocials'>
        <a href="https://linkedin.com/in/dimitris-barkas" target="_blank" rel='noreferrer'>
            <FiLinkedin />
        </a>
        <a href="https://github.com/mparkasd" target="_blank" rel='noreferrer'>
            <FiGithub />
        </a>
    </div>
  )
}

export default HeaderSocials
