import React from 'react';
import Navlogo from '../assets/logo.png';

const Nav = ({ setIsOpen }) => {
    return (
        <nav>
            <div className="nav nav__wrapper">
                <a href="/">
                  <img src={Navlogo} alt="Logo" className="nav__img nav__img--mask" />
                </a>
                <ul className="nav__list--wrapper">
                    <li className="nav__list">
                        <a href="/" onClick={()}>Login</a>
                    </li>
                    <li className="nav__list">
                        <a href="/">About</a>
                    </li>
                    <li className="nav__list">
                        <a href="/">Contact</a>
                    </li>
                    <li className="nav__list">
                        <a href="/">Help</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;