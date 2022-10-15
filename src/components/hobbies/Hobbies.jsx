import React from 'react'
import './hobbies.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const Hobbies = () => {
  return (
    <section id='hobbies'>
      <h5>Skills & Hobbies</h5>
      <h2>OMG</h2>

      <div className="hobbiesContainer">
        <div className="hobbiesFronEnd">
          <h3>Web Development</h3>
          <div className="hobbiesContent">
            <article className='hobbiesDetails'>
              <BsCheckCircleFill />
              <h4>HTML</h4>
              <small className='textLight'>Intermediate</small>
            </article>
            <article className='hobbiesDetails'>
              <BsCheckCircleFill />
              <h4>CSS</h4>
              <small className='textLight'>Intermediate</small>
            </article>
            <article className='hobbiesDetails'>
              <BsCheckCircleFill />
              <h4>Bootstrap</h4>
              <small className='textLight'>Intermediate</small>
            </article>
            <article className='hobbiesDetails'>
              <BsCheckCircleFill />
              <h4>JavaScript</h4>
              <small className='textLight'>Intermediate</small>
            </article>
            <article className='hobbiesDetails'>
              <BsCheckCircleFill />
              <h4>React</h4>
              <small className='textLight'>Intermediate</small>
            </article>
          </div>
        </div>

        <div className="hobbiesBackEnd">
          <h3>Hobbies</h3>
            <div className="hobbiesContent">
              <article className='hobbiesDetails'>
                <BsCheckCircleFill />
                <h4>HTML</h4>
                <small className='textLight'>Intermediate</small>
              </article>
              <article className='hobbiesDetails'>
                <BsCheckCircleFill />
                <h4>CSS</h4>
                <small className='textLight'>Intermediate</small>
              </article>
              <article className='hobbiesDetails'>
                <BsCheckCircleFill />
                <h4>Bootstrap</h4>
                <small className='textLight'>Intermediate</small>
              </article>
              <article className='hobbiesDetails'>
                <BsCheckCircleFill />
                <h4>JavaScript</h4>
                <small className='textLight'>Intermediate</small>
              </article>
              <article className='hobbiesDetails'>
                <BsCheckCircleFill />
                <h4>React</h4>
                <small className='textLight'>Intermediate</small>
              </article>          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hobbies