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
                p.review__body
              </div>
            </div>
          </div>
         </div>
        </div>

     </section>
    )
}

export default Reviews;