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
               </div>
               <div className="statistics__content--details">
                <div className="statistics__data">
                  <h3 className="statistics__data--number">
                    93%
                  </h3>
                  <p className="statistics__data--title">
                    of Summarist members <b>significantly increase</b> reading frequency.
                  </p>
                </div>
                <div className="statistics__data">
                  <h3 className="statistics__data--number">
                    96%
                  </h3>
                  <p className="statistics__data--title">
                    of Summarist members <b>establish better</b> habits.
                  </p>
                </div>
                <div className="statistics__data">
                  <h3 className="statistics__data--number">
                    90%
                  </h3>
                  <p className="statistics__data--title">
                    have made <b>significant positive</b> change to their lives.
                  </p>
                </div>
               </div>
         </div>
         <div className="statistics__wrapper">
            <div className="statistics__content--details" statistics__content--details-second">
                <div className="statistics__data">
                    <h3 className="statistics__data--number">
                    91%
                  </h3>
                  <p className="statistics__data--title">
                    of Summarist members <b>report feeling more productive</b> after incorporating the service into their daily routine.
                  </p>
                </div>
                <div className="statistics__data">
                    <h3 className="statistics__data--number">
                    94%
                  </h3>
                  <p className="statistics__data--title">
                    of Summarist members have <b>noticed an improvement</b> in their overall comprehension and retention of information.
                  </p>
                </div>
                <div className="statistics__data">
                    <h3 className="statistics__data--number">
                    88%
                  </h3>
                  <p className="statistics__data--title">
                    of Summarist members <b>feel more informed</b> about current events and industry trends since using the platform.
                  </p>
                </div>
            </div>
            <div className="satistics__content--header statistics__content--header-second">
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
               </div>
         </div>

        </div>
       </div>
       </section>
    )
}

export default Features;