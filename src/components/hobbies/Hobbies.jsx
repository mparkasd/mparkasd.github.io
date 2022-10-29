import React from 'react'
import './hobbies.css'
import GAMING from '../../assets/gaming.png'
import PHOTOGRAPHY from '../../assets/photography.png'
import WRITING from '../../assets/editing.png'
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
    hobby: PHOTOGRAPHY,
    name: 'Photography',
    description: "Whether it's the way a picture can capture a feeling or a moment in time, or the way that it can tell a story, I love everything about it. For me, photography is a way to connect with the world around me and to share my own perspective with others."
  },
  {
    hobby: GAMING,
    name: 'Gaming',
    description: "It's not just a hobby for me, it's a passion. I love the feeling of being completely immersed in another world and being able to control the outcome of the story. It's a hobby that I'm always happy to dive back into."
  },
  {
    hobby: WRITING,
    name: 'Writing',
    description: "Writing articles can be a deeply rewarding experience. Especialy when you write about the games you've played. It's the satisfaction of seeing your name in print, and the feeling of knowing that you might have helped others learn something new."
  },
  {
    hobby: FORMULA1,
    name: 'Formula 1',
    description: "The speed, the competition, and the sense of danger really excites me. All the small details that come into play, from strategic split-second decisions to picture-perfect display of driving skills, made Formula 1 one of my biggest passions."
  },
  {
    hobby: MARTIALARTS,
    name: 'Muay Thai',
    description: "I never thought I would be interested in a sport that is so physically demanding, but there is something about the discipline, the gracefulness, and the power that is intoxicating. I'm not sure what it is that has drawn me in, but I'm hooked."
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