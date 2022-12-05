import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Hobbies from './components/hobbies/Hobbies'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const app = () => {
  return (
    <>
        <Nav />
        <About />
        <Portfolio />
        <Hobbies />
        <Contact />
        <Footer />
    </>
  )
}

export default app