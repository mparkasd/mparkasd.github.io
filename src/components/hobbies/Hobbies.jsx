import React from 'react'
import './hobbies.css'
import {TbDeviceGamepad2} from 'react-icons/tb'
import {SiJavascript, SiHtml5, SiReact} from 'react-icons/si'
import {GiRaceCar, GiPhotoCamera} from 'react-icons/gi'
import {FaCss3} from 'react-icons/fa'

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
          <h3>Hobbies</h3>
            <div className="hobbiesContent">
              <article className='hobbiesDetails'>
                <GiPhotoCamera className='hobbiesDetailsIcon' />
                <div>
                  <h4>Photography</h4>
                  <small className='textLight'>I like capturing the urban lifestyle.</small>
                </div>
              </article>
              <article className='hobbiesDetails'>
                <GiRaceCar className='hobbiesDetailsIcon' />
                <div>
                  <h4>Formula 1</h4>
                  <small className='textLight'>Just your everyday F1 enjoyer.</small>
                </div>
              </article>
              <article className='hobbiesDetails'>
                <TbDeviceGamepad2 className='hobbiesDetailsIcon' />
                <div>
                  <h4>Gaming Editor</h4>
                  <small className='textLight'>I love playing games and sometimes write about them.</small>
                </div>
              </article>        
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hobbies