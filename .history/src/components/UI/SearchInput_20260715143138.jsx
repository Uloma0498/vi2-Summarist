import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchInput = ( {searchResult: searchResultProp} ) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

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

    function openMenu() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const closeMenu = () => {
      
    }

  return (
    <>
     <div className="search__background">
      <div className="row">
        <div className="search__content">
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
          <div className="sidebar__toggle--btn" onClick={openMenu}>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 15 15"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    {searchQuery && (
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
    )}
    </>
  );
};

export default SearchInput;
