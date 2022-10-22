import React from 'react'
import './hobbies.css'
import GAMING from '../../assets/portfolioIMG.jpg'


const Hobbies = () => {
  return (
    <section id='hobbies'>
      <h5>What I Like</h5>
      <h2>Hobbies</h2>

      <div className="container hobbiesContainer">
        <article className="hobbySlide">
          <div className="hobby">
            <img src={GAMING} alt="Gaming" />
          </div>
          <h5 className='hobbyName'>Gaming</h5>
          <small className='hobbyDesc'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Quis, ipsa voluptate! Quas sint, architecto ratione quo 
            atque, animi laborum esse aliquam vero amet quidem. 
            Vel sed voluptates facere saepe sequi.
          </small>
        </article>
        <article className="hobbySlide">
          <div className="hobby">
            <img src={GAMING} alt="Gaming" />
          </div>
          <h5 className='hobbyName'>Photography</h5>
          <small className='hobbyDesc'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Quis, ipsa voluptate! Quas sint, architecto ratione quo 
            atque, animi laborum esse aliquam vero amet quidem. 
            Vel sed voluptates facere saepe sequi.
          </small>
        </article>
        <article className="hobbySlide">
          <div className="hobby">
            <img src={GAMING} alt="Gaming" />
          </div>
          <h5 className='hobbyName'>Writing</h5>
          <small className='hobbyDesc'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Quis, ipsa voluptate! Quas sint, architecto ratione quo 
            atque, animi laborum esse aliquam vero amet quidem. 
            Vel sed voluptates facere saepe sequi.
          </small>
        </article>
        <article className="hobbySlide">
          <div className="hobby">
            <img src={GAMING} alt="Gaming" />
          </div>
          <h5 className='hobbyName'>Formula 1</h5>
          <small className='hobbyDesc'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Quis, ipsa voluptate! Quas sint, architecto ratione quo 
            atque, animi laborum esse aliquam vero amet quidem. 
            Vel sed voluptates facere saepe sequi.
          </small>
        </article>
        <article className="hobbySlide">
          <div className="hobby">
            <img src={GAMING} alt="Gaming" />
          </div>
          <h5 className='hobbyName'>Martial Arts</h5>
          <small className='hobbyDesc'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Quis, ipsa voluptate! Quas sint, architecto ratione quo 
            atque, animi laborum esse aliquam vero amet quidem. 
            Vel sed voluptates facere saepe sequi.
          </small>
        </article>

      </div>
    </section>
  )
}

export default Hobbies