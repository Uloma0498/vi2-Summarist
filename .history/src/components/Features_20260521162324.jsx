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
              <h3 className="features__title">
                Read or Listen
              </h3>
              <p className="features__sub--title">
                Save time by getting the core ideas from the best books
              </p>
            </div>
            <div className="features">
              <FontAwesomeIcon icon="lightbulb" className="features__icon" />
              <h3 className="features__title">
                Find your next read
              </h3>
              <p className="features__sub--title">
                Explore book lists and personalized recommendations
              </p>
            </div>
            <div className="features">
              <FontAwesomeIcon icon="microphone" className="features__icon" />
              <h3 className="features__title">
                 Briefcasts
              </h3>
              <p className="features__sub--title">
                Gain valuable insights from briefcasts
              </p>
            </div>
         </div>
         <div className="statistics__wrapper">
            <div className="satistics__content--header">
               <h2 className="statistics__heading">
                Enhance your knowledge
               </h2>
            </div>
         </div>

        </div>
       </div>
       </section>
    )
}

export default Features;