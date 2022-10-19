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
                I write <a href='https://bgeek.eu/author/mparkas/' target="_blank" rel='noreferrer' className='bgeek'>stuff</a> about games.
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
              <small>BSc in Computer Science.</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quia dolor libero vitae sit perspiciatis pariatur obcaecati aliquid nesciunt, eos recusandae in, nulla quae reiciendis ipsam? Corrupti aperiam vitae id.
          </p>

          <button className='btn btnPrimary'>Say Hi.</button>
        </div>
      </div>
    </section>
  )
}

export default About