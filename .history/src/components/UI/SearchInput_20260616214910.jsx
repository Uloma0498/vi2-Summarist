import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchInput = ( {searchResult: searchResultProp} ) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const fetchSearchResult = async (search) => {
        if (!search) return;
        try {
           const response = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${search}`); 
           setSearchResult(response.data);
        } catch (error) {
            console.error("Error fetching search results: ", error);
        }
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            fetchSearchResult(searchQuery);
        }, 300);
        return () => clearTimeout(handler);
    }, [searchQuery]);

  return (
    <>
    <div className="search">
      <div className="search__input--wrapper">
        <input
        className="search__input"
        placeholder="Search for books"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
         />
        <FontAwesomeIcon
        icon={searchQuery ? "times" : "magnifying-glass"}
        className="search__icon"
        onClick={() => setSearchQuery('')}
         />
    </div>
    </div>
    {searchQuery && ()}
    <div className="search__books--wrapper">
        {searchResult.map((book) => (
            <Link to={`/book/${book.id}`}  key={book.id} className="search__book--link">
                <figure className="book__image--wrapper">
                    <img className="book__image" src={book.imageLink} alt="book" />
                </figure>
                <div className="search__book--info">
                <div className="search__book--title">
                    {book.title}
                </div>
                <div className="search__book--author">
                    {book.author}
                </div>
                <div className="search__book--duration">
                <div className="recommended__book--details">
                    <div className="recommended__book--details-icon">
                        <FontAwesomeIcon icon="fa-regular fa-clock" />
                    </div>
                      <div className="recommended__book--details-text">
                        03:24
                      </div>
                    </div>
                </div>
                </div>
            </Link>
        ))}
    </div>
    
    </>
  );
};

export default SearchInput;
