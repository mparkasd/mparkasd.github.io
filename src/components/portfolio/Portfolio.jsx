import React from 'react'
import './portfolio.css'
import {SiJavascript, SiHtml5, SiReact, SiCheckmarx} from 'react-icons/si'
import {FaCss3, FaGithub, FaFileDownload} from 'react-icons/fa'
import CV from '../../assets/cv.pdf'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="portfolioContainer">
        <div>
          <h3>Web Development</h3>
          <div className="portfolioContent">
            <article className='portfolioDetails'>
              <SiHtml5 className='portfolioDetailsIcon' />
              <div>
                <h4>HTML</h4>
                <small className='textLight'>Intermediate</small>
              </div>
            </article>
            <article className='portfolioDetails'>
              <FaCss3 className='portfolioDetailsIcon' />
              <div>
                <h4>CSS</h4>
                <small className='textLight'>Intermediate</small>
              </div>
            </article>
            <article className='portfolioDetails'>
              <SiJavascript className='portfolioDetailsIcon' />
              <div>
                <h4>JavaScript</h4>
                <small className='textLight'>Intermediate</small>
              </div>
            </article>
            <article className='portfolioDetails'>
              <SiReact className='portfolioDetailsIcon' />
              <div>
                <h4>React</h4>
                <small className='textLight'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div>
          <h3>Portfolio</h3>
          <div className="portfolioContent">
            <article className='portfolioItem'>
              <h4><SiCheckmarx /> My Project (s)</h4>
              <br />
              <a href="https://github.com/mparkasd/mparkasd.github.io" className='btn' target='_blank' rel='noreferrer'><FaGithub /> Github</a>
              <br />
              <button className='btn btnPrimary' onClick={() => alert("You're already viewing the Demo")}>Live Demo</button>
            </article>
            <article className='portfolioItem'>
              <h4><SiCheckmarx /> Curriculum Vitae</h4>
              <br />
              <a href={CV} download className='btn'><FaFileDownload /> Download</a>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio