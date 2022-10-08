import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Hobbies from './components/hobbies/Hobbies'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const app = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Hobbies />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default app