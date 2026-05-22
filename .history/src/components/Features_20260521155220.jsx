import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Features = () => {
    return (
        <section id="features">
       <div className="container">
        <div className="row">
         <h2 className="section__title">
            Understand books in few minutes
         </h2>
         <div className="features__wrapper">
            <div className="features">
              <FontAwesomeIcon icon="file" className="features__icon" />
              <h3 className="features__title">Read</h3>
            </div>
         </div>

        </div>
       </div>
       </section>
    )
}

export default Features;