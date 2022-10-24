import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {ImWhatsapp} from 'react-icons/im'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Let's Chat!</h5>
      <h2>Contact Me</h2>

      <div className="container contactContainer">
        <div className="contactCards">
          <article className='contactCard'>
            <MdEmail/>
            <h4>Email @</h4>
            <h5>The formal approach.</h5>
            <a href="mailto:mparkasd@gmail.com">Send A Message</a>
          </article>
          <article className='contactCard'>
            <MdEmail/>
            <h4>Email @</h4>
            <h5>mparkasd@gmail.com</h5>
            <a href="mailto:mparkasd@gmail.com">Send A Message</a>
          </article>
          <article className='contactCard'>
            <ImWhatsapp/>
            <h4>WhatsApp @</h4>
            <h5>In case you're a texter.</h5>
            <a href="https://api.whatsapp.com/send?phone=306934054247" target='_blank' rel='noreferrer'>Send A Message</a>
          </article>
        </div>

        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact
