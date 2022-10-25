import React, { useRef } from 'react'
import './contact.css'
import {BsMessenger} from 'react-icons/bs'
import {ImWhatsapp} from 'react-icons/im'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d6gpnth', 'template_ws404uq', form.current, 'iYqPd7JHxYMuz9RL4')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Let's Chat!</h5>
      <h2>Contact Me</h2>

      <div className="container contactContainer">
        <div className="contactCards">
          <article className='contactCard'>
            <BsMessenger className='contactCardIcon' />
            <h4>Messenger</h4>
            <h5>mparkasd</h5>
            <a href="https://m.me/mparkasd" target='_blank' rel='noreferrer'>Send A Message</a>
          </article>
          <article className='contactCard'>
            <ImWhatsapp className='contactCardIcon' />
            <h4>WhatsApp</h4>
            <h5>+30 693 4054 247</h5>
            <a href="https://api.whatsapp.com/send?phone=306934054247" target='_blank' rel='noreferrer'>Send A Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
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
