import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Navlogo from '../assets/logo.png';

const ForYou = () => {
    function openMenu() {
        document.body.ClassList += " menu--open"
    }

    function closeMenu() {
        document.body.ClassList.remove("menu--open")
    }
    return (
        <section id="_next">
          <div className="wrapper">
            <div className="search__background">
              <div className="search__wrapper">
                <div className="search__content">
                 <div className="search">
                  <div className="search__input--wrapper">
                  <input className="search__input" 
                     placeholder="Search for books" 
                     type="text" 
                     value
                   />
                  <FontAwesomeIcon icon="magnifying-glass" className="search__icon" />
                </div>
                </div>
                <button className="sidebar__toggle--btn" onClick={openMenu}>
                  <FontAwesomeIcon icon="bars" />
                </button>
               </div>
              </div>
            </div>
            <div className="sidebar__overlay">
                <div className="sidebar sidebar--opened">
                  <div className="sidebar__logo">
                     <img src={Navlogo} alt="Logo" className="nav__img nav__img--mask" />
                  </div>
                  <div className="sidebar__wrapper">
                    <a className="sidebar__link--wrapper" href="/">For you</a>
                  </div>
                </div>
            </div>

          </div>
        </section>
    )

}

export default ForYou;