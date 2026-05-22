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
                  I love this app! It provides <b>concise and accurate summaries</b> of books in a way that is easy to understand. It's also very user-friendly and intuitive.
                </p>
              </div>
              <div className="review">
              <div className="review__header">
                <p className="review__name">
                    Nathan S.
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
                  This app is a great way to get the main takeaways from a book without having to read the entire thing. <b>The summaries are well-written and informative.</b> Definitely worth downloading.
                </p>
              </div>
              <div className="review">
              <div className="review__header">
                <p className="review__name">
                    Ryan R.
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
                  If you're a busy person who <b>loves reading but doesn't have the time</b> to read every book in full, this app is for you! The summaries are thorough and provide a great overview of the book's content.
                </p>
              </div>
            </div>
            <div className="reviews__btn--wrapper">
            <a href="/">
                <button className="btn home__cta--btn">
                    Login
                </button>
            </a>
            
          </div>
         </div>
     </section>
    )
}

export default Reviews;