import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Numbers = () => {
    return (
     <section id="numbers">
        <div className="container">
         <div className="row">
          <div className="section__title">
            Start growing with Summarist now
          </div>
          <div className="numbers__wrapper">
            <div className="numbers">
             <FontAwesomeIcon icon="crown" className="numbers__icon" />
                <h1 className="numbers__title">
                 3 Million
                </h1>
                <p className="numbers__sub--title">
                 Download on all platforms
                </p>
            </div>
            <div className="numbers">
             <FontAwesomeIcon icon="crown" className="numbers__icon" />
                <h1 className="numbers__title">
                 3 Million
                </h1>
                <p className="numbers__sub--title">
                 Average ratings on iOS and Good
                </p>
            </div>
            <div className="numbers">
             <FontAwesomeIcon icon="leaf" className="numbers__icon" />
                <h1 className="numbers__title">
                 97%
                </h1>
                <p className="numbers__sub--title">
                 Of Summarist members create a better reading habit
                </p>
            </div>
          </div>
         </div>
        </div>
     </section>
    )
}

export default Numbers;