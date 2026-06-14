import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Book = ({ book }) => {
    return (
        <div className="for-you__recommended--books">
            <Link to={`/book/${book.id}`} className="for-you__recommended--books-link" href="/">
                <audio></audio>
                <figure className="book__image--wrapper">
                    <img className="book__image" src={book.imageLink} alt="book" />
                </figure>
                <div className="recommended__book--title">
                    {book.title}
                </div>
                <div className="recommended__book--author">
            {book.author}
        </div>
        <div className="recommended__book--sub-title">
            {book.subTitle}
        </div>
        <div className="recommended__book--details-wrapper">
        <div className="recommended__book--details">
            <div className="recommended__book--details-icon">
            <FontAwesomeIcon icon="fa-regular fa-clock" />
            </div>
            <div className="recommended__book--details-text">
            03:24
            </div>
        </div>
        <div className="recommended__book--details">
            <div className="recommended__book--details-icon">
            <FontAwesomeIcon icon="fa-regular fa-star" />
            </div>
            <div className="recommended__book--details-text">
            {book.averageRating}
            </div>
        </div>
        </div>
        </Link>
     </div>
    )
}

export default Book;