import React, {useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
const [click, setClick] = useState(false);

const handleClick = () => {
    setClick(!click);
}
const closeMobileMenu = () => setClick(false);


  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <div className='title'>
                    <div className='camp'>CAMP</div>
                    <div className='krahammerer'>KRAHAMMERER</div>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/itinerary' className='nav-links' onClick={closeMobileMenu}>
                        Itinerary
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/housing' className='nav-links' onClick={closeMobileMenu}>
                        Accommodations
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    )
}

export default Navbar