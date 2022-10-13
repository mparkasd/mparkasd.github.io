import React from 'react'
import {FiLinkedin, FiGithub, FiTwitter} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='headerSocials'>
        <a href="https://linkedin.com/in/dimitris-barkas" target="_blank" rel='noreferrer'>
            <FiLinkedin />
        </a>
        <a href="https://github.com/mparkasd" target="_blank" rel='noreferrer'>
            <FiGithub />
        </a>
        <a href="https://twitter.com/mparkasd" target="_blank" rel='noreferrer'>
            <FiTwitter />
        </a>
    </div>
  )
}

export default HeaderSocials
