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
            <h4>Messenger @</h4>
            <h5>mparkasd</h5>
            <a href="https://m.me/mparkasd" target='_blank' rel='noreferrer'>Send A Message</a>
          </article>
          <article className='contactCard'>
            <ImWhatsapp/>
            <h4>WhatsApp @</h4>
            <h5>+30 693 4054 247</h5>
            <a href="https://api.whatsapp.com/send?phone=306934054247" target='_blank' rel='noreferrer'>Send A Message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btnPrimary'>Send Email</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
