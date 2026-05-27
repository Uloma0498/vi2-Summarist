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
              <div className="numbers__icon">
             <FontAwesomeIcon icon="crown" className="numbers__icon" />
             </div>
                <h1 className="numbers__title">
                 3 Million
                </h1>
                <p className="numbers__sub--title">
                 Download on all platforms
                </p>
            </div>
            <div className="numbers">
             <div className="numbers__icon numbers__star--icon">
             <FontAwesomeIcon icon="star" className="numbers__icon" />
             <FontAwesomeIcon icon="star" className="numbers__icon" />
             <FontAwesomeIcon icon="star" className="numbers__icon" />
             <FontAwesomeIcon icon="star" className="numbers__icon" />
             <FontAwesomeIcon icon="star-half-stroke" className="numbers__icon" />
            </div>
                <h1 className="numbers__title">
                 4.5 Stars
                </h1>
                <p className="numbers__sub--title">
                 Average ratings on iOS and Google Play
                </p>
            </div>
            <div className="numbers">
              .numbers__icon
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