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
                    <div className="sidebar__top">
                    <a className="sidebar__link--wrapper" href="/for-you">
                    <div className="sidebar__link--line active--tab"></div>
                    <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon icon="house" />    
                    </div>
                    <div className="sidebar__link--text">For you</div>
                    </a>
                    <a className="sidebar__link--wrapper" href="/library">
                    <div className="sidebar__link--line"></div>
                    <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon icon="bookmark" />    
                    </div>
                    <div className="sidebar__link--text">My Library</div>
                    </a>
                    <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                    <div className="sidebar__link--line active--tab"></div>
                    <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon icon="pen-clip" />    
                    </div>
                    <div className="sidebar__link--text">Highlights</div>
                    </div>
                    <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                    <div className="sidebar__link--line"></div>
                    <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon icon="magnifying-glass"  />    
                    </div>
                    <div className="sidebar__link--text">Search</div>
                    </div>
                  </div>
                  <div className="sidebar__bottom">
                    <a className="sidebar__link--wrapper" href="/settings">
                    <div className="sidebar__link--line"></div>
                    <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon icon="gear" />    
                    </div>
                    <div className="sidebar__link--text">Settings</div>
                    </a>
                    <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                    <div className="sidebar__link--line"></div>
                    <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon icon="circlequestion"  />    
                    </div>
                    <div className="sidebar__link--text">Help & Support</div>
                    </div>
                    <div className="sidebar__link--wrapper">
                    <div className="sidebar__link--line"></div>
                    <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon icon="arrowrightfrombracket"  />    
                    </div>
                    <div className="sidebar__link--text">Logout</div>
                    </div>
                  </div>
                  </div>
                </div>
            </div>
            <div className="row">
             <div className="container">
              <div className="for-you__wrapper">
                <div className="for-you__title">
                  Selected just for you
                </div>
                <audio src=""> 
                </audio>
                <a className="selected__book" href="/">
                 <div className="selected__book--sub-title">
                    How Constant Innovation Creates Radically Successful Businesses
                 </div>
                 <div className="selected__book--line"></div>
                 <div className="selected__book--content">
                   <figure className="book__image--wrapper">
                    <img className="book__image" src="" alt="book">
                    </img>
                   </figure>
                   <div className="selected__book--text">
                    <div className="selected__book--title">
                        The Lean Startup
                    </div>
                    <div className="selected__book--author">
                        Eric Ries
                    </div>
                    <div className="selected__book--duration-wrapper">
                      <div className="selected__book--icon">
                        <FontAwesomeIcon icon=}
                      </div>
                    </div>
                   </div>
                 </div>
                </a>
              </div>
             </div>
            </div>
          </div>
        </section>
    )

}

export default ForYou;