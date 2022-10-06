import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='nav-logo'>
                    nutsosya <i class="fa-solid fa-code"></i>
                </Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar