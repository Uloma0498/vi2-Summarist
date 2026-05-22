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
             <FontAwesomeIcon icon="file" className="features__icon" />
                <h3 className="features__title">
                 Read or Listen
                </h3>
                <p className="features__sub--title">
                 Download on all 
                </p>
            </div>
          </div>
         </div>
        </div>
     </section>
    )
}

export default Numbers;