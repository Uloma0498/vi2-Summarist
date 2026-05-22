import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Reviews = () => {
    return (
     <section id="reviews">
        <div className="row">
         <div className="container">
          <div className="section__title">
            What our members say
          </div>
          <div className="reviews__wrapper">
            <div className="review">
              <div className="review__header">
                <p className="review__name">
                    Hanna M.
                </p>
                <div className="review__stars">
                 <FontAwesomeIcon icon="star" />
                 <FontAwesomeIcon icon="star" />
                 <FontAwesomeIcon icon="star" />
                 <FontAwesomeIcon icon="star" />
                 <FontAwesomeIcon icon="star" />
                </div>
              </div>
                <p className="review__body">
                  This app has been a <b>game-changer</b> for me! It's saved me so much time and effort in reading and comprehending books. Highly recommend it to all book lovers
                </p>
              </div>
              <div className="review">
              <div className="review__header">
                <p className="review__name">
                    David B.
                </p>
                <div className="review__stars">
                 <FontAwesomeIcon icon="star" />
                 <FontAwesomeIcon icon="star" />
                 <FontAwesomeIcon icon="star" />
                 <FontAwesomeIcon icon="star" />
                 <FontAwesomeIcon icon="star" />
                </div>
              </div>
                <p className="review__body">
                  I love this app! It provides <b>concise and accurate summaries</b> of books in a way 
                </p>
              </div>
              <div className="review">
              <div className="review__header">
                <p className="review__name">
                    Hanna M.
                </p>
                <div className="review__stars">
                 <FontAwesomeIcon icon="star" />
                 <FontAwesomeIcon icon="star" />
                 <FontAwesomeIcon icon="star" />
                 <FontAwesomeIcon icon="star" />
                 <FontAwesomeIcon icon="star" />
                </div>
              </div>
                <p className="review__body">
                  This app has been a <b>game-changer</b> for me! It's saved me so much time and effort in reading and comprehending books. Highly recommend it to all book lovers
                </p>
              </div>
              <div className="review">
              <div className="review__header">
                <p className="review__name">
                    Hanna M.
                </p>
                <div className="review__stars">
                 <FontAwesomeIcon icon="star" />
                 <FontAwesomeIcon icon="star" />
                 <FontAwesomeIcon icon="star" />
                 <FontAwesomeIcon icon="star" />
                 <FontAwesomeIcon icon="star" />
                </div>
              </div>
                <p className="review__body">
                  This app has been a <b>game-changer</b> for me! It's saved me so much time and effort in reading and comprehending books. Highly recommend it to all book lovers
                </p>
              </div>
            </div>
          </div>
         </div>
     </section>
    )
}

export default Reviews;