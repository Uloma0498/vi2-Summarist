import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

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
                .
               </div>
              </div>
            </div>
          </div>
        </section>
    )

}

export default ForYou;