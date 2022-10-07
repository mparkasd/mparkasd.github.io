import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <>
        <nav class='navbar'>
            <div class='bg-gray-800 sticky top-0 z-50'>
                <Link to='/' class='navbar-logo'>
                  <i class="fa-solid fa-code" /> <span class='text-black hover:text-red-300'>nutsosya</span> 
                </Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar