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
               <h2 className="statistics__heading">
                Achieve greater success
               </h2>
               <h2 className="statistics__heading">
                Improve your health
               </h2>
               <h2 className="statistics__heading">
                Develop better parenting skills
               </h2>
               <h2 className="statistics__heading">
                Increase happiness
               </h2>
               <h2 className="statistics__heading">
                Be the best version of yourself!
               </h2>
               <div className="statistics__content--details">
                <div className="statistics__data">
                  <h3 className="statistics__data--number">
                    93%
                  </h3>
                  <p className="statistics__data--title">
                    of Summarist members <span className="bold"></span> significantly increase reading frequency.
                  </p>
                </div>
               </div>
            </div>
         </div>

        </div>
       </div>
       </section>
    )
}

export default Features;