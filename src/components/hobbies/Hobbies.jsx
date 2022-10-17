import React from 'react'
import './hobbies.css'
import {SiJavascript, SiHtml5, SiReact} from 'react-icons/si'
import {FaCss3} from 'react-icons/fa'

const Hobbies = () => {
  return (
    <section id='hobbies'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="hobbiesContainer">
        <div className="hobbiesFronEnd">
          <h3>Web Development</h3>
          <div className="hobbiesContent">
            <article className='hobbiesDetails'>
              <SiHtml5 className='hobbiesDetailsIcon' />
              <div>
                <h4>HTML</h4>
                <small className='textLight'>Intermediate</small>
              </div>
            </article>
            <article className='hobbiesDetails'>
              <FaCss3 className='hobbiesDetailsIcon' />
              <div>
                <h4>CSS</h4>
                <small className='textLight'>Intermediate</small>
              </div>
            </article>
            <article className='hobbiesDetails'>
              <SiJavascript className='hobbiesDetailsIcon' />
              <div>
                <h4>JavaScript</h4>
                <small className='textLight'>Intermediate</small>
              </div>
            </article>
            <article className='hobbiesDetails'>
              <SiReact className='hobbiesDetailsIcon' />
              <div>
                <h4>React</h4>
                <small className='textLight'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="hobbiesBackEnd">
          <h3>Portfolio</h3>
            <div className="hobbiesContent">

            </div>
        </div>
      </div>
    </section>
  )
}

export default Hobbies