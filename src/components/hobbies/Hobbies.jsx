import React from 'react'
import './hobbies.css'
import GAMING from '../../assets/gaming.jpg'
import PHOTO from '../../assets/gaming.jpg'
import EDITING from '../../assets/gaming.jpg'
import MARTIAL from '../../assets/gaming.jpg'

const Hobbies = () => {
  return (
    <section id='hobbies'>
      <h5>What I Like</h5>
      <h2>Hobbies</h2>

      <div className="container hobbiesContainer">
        <article className="hobbySlide">
          <div className="hobby">
            <img src={GAMING} alt="Hobby One" />
            <h5 className='hobbyName'>Photography</h5>
            <small className='hobbyDesc'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Quis, ipsa voluptate! Quas sint, architecto ratione quo 
              atque, animi laborum esse aliquam vero amet quidem. 
              Vel sed voluptates facere saepe sequi.
            </small>
          </div>
        </article>
        <article className="hobbySlide">
          <div className="hobby">
            <img src={PHOTO} alt="Hobby Two" />
            <h5 className='hobbyName'>Photography</h5>
            <small className='hobbyDesc'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Quis, ipsa voluptate! Quas sint, architecto ratione quo 
              atque, animi laborum esse aliquam vero amet quidem. 
              Vel sed voluptates facere saepe sequi.
            </small>
          </div>
        </article>
        <article className="hobby">
          <div className="hobbyIcon">
            <img src={EDITING} alt="Hobby Three" />
            <h5 className='hobbyName'>Photography</h5>
            <small className='hobbyDesc'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Quis, ipsa voluptate! Quas sint, architecto ratione quo 
              atque, animi laborum esse aliquam vero amet quidem. 
              Vel sed voluptates facere saepe sequi.
            </small>
          </div>
        </article>
        <article className="hobby">
          <div className="hobbyIcon">
            <img src={MARTIAL} alt="Hobby Four" />
            <h5 className='hobbyName'>Photography</h5>
            <small className='hobbyDesc'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Quis, ipsa voluptate! Quas sint, architecto ratione quo 
              atque, animi laborum esse aliquam vero amet quidem. 
              Vel sed voluptates facere saepe sequi.
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Hobbies