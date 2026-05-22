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
                    <div className="footer__link__wrapper">
                        <a href="/" className="footer__link">Summarist Magazine</a>
                    </div>
                    < className="footer__link__wrapper">
                        <a href="/" className="footer__link">Cancel Subscription</a>
                    </li>
                    <li className="footer__link__wrapper">
                        <a href="/" className="footer__link">Help</a>
                    </li>
                    <li className="footer__link__wrapper">
                        <a href="/" className="footer__link">Contact us</a>
                    </li>
            </div>
          </div>
         </div>
        </div>
        </section>
    )
}

export default Footer;