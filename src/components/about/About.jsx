import React from 'react'
import './about.css'
import aboutMePhoto from '../../assets/aboutMePhoto.png'
import {FaReact} from 'react-icons/fa'
import {BsPencil} from 'react-icons/bs'
import {TbSchool} from 'react-icons/tb'

const About = () => {
  return (
    <section id='about'>

      <h5 className='hey'>hey,</h5>
      <h2>my name is Dimitris G. Barkas</h2>

      <div className='container aboutContainer'>

        <div className='aboutMe'>
          <div className="aboutMePhoto">
           <img src={aboutMePhoto} alt="aboutMe" />
          </div>
        </div>

        <div className="aboutContent">
          <div className="aboutCards">
            <article className='aboutCard'>
              <BsPencil className='aboutIcon'/>
              <h4>Editor</h4>
              <small>
                I play games and write <a href='https://bgeek.eu/author/mparkas/' target="_blank" rel='noreferrer' className='bgeek'>stuff</a> about them.
              </small>
            </article>

            <article className='aboutCard'>
              <FaReact className='aboutIcon'/>
              <h4>Web - Dev</h4>
              <small>Enjoy learning about new tech.</small>
            </article>

            <article className='aboutCard'>
              <TbSchool className='aboutIcon'/>
              <h4>Education</h4>
              <small>BSc in Computer Science. University of Sheffield</small>
            </article>
          </div>

          <p>
            I'm a young aspiring web-developer with experience on front-end. I feel ready for the challenge ahead, while I am really intrigued by new technologies and platforms. 
          </p>
          <p>
            I like meeting new people, discusing new and exciting ideas, while also constantly trying to improve myself and help others improve as well. Only together can we go forward!
          </p>

          <a href="#contact" className='btn btnPrimary'>Say Hi.</a>
        </div>
      </div>
    </section>
  )
}

export default About