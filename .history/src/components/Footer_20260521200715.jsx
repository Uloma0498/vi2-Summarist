import React from "react";

const Footer = () => {
    return (
        <section id="footer">
        <div className="container">
         <div className="row">
          <div className="footer__top--wrapper">
            <div className="footer__block">
              <h3 className="footer__link--title">
                Actions
              </h3>
              <ul className="footer__list--wrapper">
                    <li className="nav__list">
                        <a href="/">Login</a>
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
          </div>
         </div>
        </div>
        </section>
    )
}

export default Footer;