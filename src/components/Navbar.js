import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                TRVL <i className="fab fa-typo3" />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times': 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li class="nav-item">
                <Link to="/" className="nav-links" onClink="{closeMobileMenu}">
                Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/services" className="nav-links" onClink="{closeMobileMenu}">
                Services
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/products" className="nav-links" onClink="{closeMobileMenu}">
                Products
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/sign-up" className="nav-links-mobile" onClink="{closeMobileMenu}">
                Sign up
                </Link>
              </li>
            </ul>

            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar
