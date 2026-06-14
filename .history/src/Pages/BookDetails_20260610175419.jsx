import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BookDetails = () => {
    return (
        <div className="wrapper">
        <div className="search__background">
                  <div className="search__wrapper">
                    <div className="search__content">
                      <div className="search">
                        <div className="search__input--wrapper">
                          <input
                            className="search__input"
                            placeholder="Search for books"
                            type="text"
                            value=""
                          />
                          <FontAwesomeIcon
                            icon="magnifying-glass"
                            className="search__icon"
                          />
                        </div>
                      </div>
                      <button className="sidebar__toggle--btn" onClick={toggleMenu}>
                        <FontAwesomeIcon icon="bars" />
                      </button>
                    </div>
                  </div>
                </div>
                </div>

    )
}

export default BookDetails;