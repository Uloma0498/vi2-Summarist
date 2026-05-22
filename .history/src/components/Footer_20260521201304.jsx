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
              <ul>
                    <li className="footer__link__wrapper">
                        <a href="/">Summarist Magazine</a>
                    </li>
                    <li className="_">
                        <a href="/">Cancel Subscription</a>
                    </li>
                    <li className="_">
                        <a href="/">Help</a>
                    </li>
                    <li className="_">
                        <a href="/">Contact us</a>
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