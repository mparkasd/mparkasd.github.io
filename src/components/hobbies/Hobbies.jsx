import React from 'react'
import './hobbies.css'
import GAMING from '../../assets/gaming.png'
import PHOTOGRAPHY from '../../assets/photography.png'
import WRITING from '../../assets/portfolioIMG.jpg'
import FORMULA1 from '../../assets/f1.png'
import MARTIALARTS from '../../assets/martial.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    hobby: GAMING,
    name: 'Gaming',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit Quis, ipsa voluptate! Quas sint, architecto ratione quo atque, animi laborum esse aliquam vero amet quidem.Vel sed voluptates facere saepe sequi'
  },
  {
    hobby: PHOTOGRAPHY,
    name: 'Photography',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit Quis, ipsa voluptate! Quas sint, architecto ratione quo atque, animi laborum esse aliquam vero amet quidem.Vel sed voluptates facere saepe sequi'
  },
  {
    hobby: WRITING,
    name: 'Writing',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit Quis, ipsa voluptate! Quas sint, architecto ratione quo atque, animi laborum esse aliquam vero amet quidem.Vel sed voluptates facere saepe sequi'
  },
  {
    hobby: FORMULA1,
    name: 'Formula 1',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit Quis, ipsa voluptate! Quas sint, architecto ratione quo atque, animi laborum esse aliquam vero amet quidem.Vel sed voluptates facere saepe sequi'
  },
  {
    hobby: MARTIALARTS,
    name: 'Martial Arts',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit Quis, ipsa voluptate! Quas sint, architecto ratione quo atque, animi laborum esse aliquam vero amet quidem.Vel sed voluptates facere saepe sequi'
  },
]


const Hobbies = () => {
  return (
    <section id='hobbies'>
      <h5>What I Like</h5>
      <h2>Hobbies</h2>

      <Swiper className="container hobbiesContainer" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

        {
          data.map(({hobby, name, description}, index) => {
            return(
              <SwiperSlide key={index} className="hobbySlide">
                <div className="hobby">
                  <img src={hobby} alt="" className='hobbyIMG'/>
                </div>
                <h5 className='hobbyName'>{name}</h5>
                <small className='hobbyDesc'>
                  {description}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Hobbies