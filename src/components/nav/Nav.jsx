import React, { useState, useEffect, useRef } from 'react'
import './nav.css'
import {RiHomeLine, RiUserLine, RiCameraLensFill, RiContactsBookLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'

const Nav = () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-300px");
  const [currentNav, setCurrentNav] = useState ("#home")
  return (
    <nav>
      <a href="#home" ref={ref} onScreen={() => setCurrentNav('#home')} className={currentNav === '#home' ? 'currentNav' : ''} onClick={() => setCurrentNav("#home")} className={currentNav === "#home" ? 'currentNav' : ''}><RiHomeLine /></a>
      <a href="#about" ref={ref} onScreen={() => setCurrentNav('#about')} onClick={() => setCurrentNav('#about')} className={currentNav === '#about' ? 'currentNav' : ''}><RiUserLine/></a>
      <a href="#portfolio" onScreen onClick={() => setCurrentNav('#portfolio')} className={currentNav === '#portfolio' ? 'currentNav' : ''}><RiContactsBookLine /></a>
      <a href="#hobbies" onScreen onClick={() => setCurrentNav('#hobbies')} className={currentNav === '#hobbies' ? 'currentNav' : ''}><RiCameraLensFill /></a>
      <a href="#contact" onScreen onClick={() => setCurrentNav('#contact')} className={currentNav === '#contact' ? 'currentNav' : ''} ><AiOutlineMessage /></a>


    </nav>
  )
}

// Hook
function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}


export default Nav