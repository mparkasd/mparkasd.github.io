import React from 'react'
import CV from '../../assets/cv.pdf'

const HeaderButtons = () => {
  return (
    <div className='hb'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btnPrimary'>Contact Me</a>
    </div>
  )
}

export default HeaderButtons