import React from 'react'
import CV from '../../assets/cv.pdf'

const HeaderButtons = () => {
  return (
    <div className='hb'>
        <a href={CV} download>Download CV</a>
        <a href='#contact'>Contact Me</a>
    </div>
  )
}

export default HeaderButtons