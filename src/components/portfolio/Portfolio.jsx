import React from 'react'
import './portfolio.css'
import {SiJavascript, SiHtml5, SiReact, SiCheckmarx} from 'react-icons/si'
import {FaCss3, FaGithub, FaFileDownload} from 'react-icons/fa'
import {CgMediaLive} from 'react-icons/cg'
import CV from '../../assets/cv.pdf'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container portfolioContainer">
        <div>
          <h3>Web Development</h3>
          <div className="portfolioContent">
            <article className='portfolioDetails'>
              <SiHtml5 className='portfolioDetailsIcon' />
              <div>
                <h4>HTML</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='portfolioDetails'>
              <FaCss3 className='portfolioDetailsIcon' />
              <div>
                <h4>CSS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='portfolioDetails'>
              <SiJavascript className='portfolioDetailsIcon' />
              <div>
                <h4>JavaScript</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='portfolioDetails'>
              <SiReact className='portfolioDetailsIcon' />
              <div>
                <h4>React</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        
        <div>
          <h3>Portfolio</h3>
          <div className="portfolioContent">
            <article className='portfolioItem'>
              <h4><SiCheckmarx className='portfolioDetailsIcon' /> My Projects</h4>
                <small>
                  <a href="https://github.com/mparkasd/mparkasd.github.io" className='btn' target='_blank' rel='noreferrer'><FaGithub /> Github</a>
                  <button className='btn btnPrimary' onClick={() => alert("You're already viewing the Demo")}><CgMediaLive /> Live Demo</button>
                </small>
            </article>
            <article className='portfolioItem'>
              <h4><SiCheckmarx className='portfolioDetailsIcon' /> My CV</h4>
              <small><a href={CV} download className='btn'><FaFileDownload /> Download</a></small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio