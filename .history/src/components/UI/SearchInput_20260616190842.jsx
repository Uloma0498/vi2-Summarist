import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
im

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const fetchSearchResult = async (query) => {
        if (!query) return;
        try {
           const response = await axios.get('https://us-central1-summaristt.cloudfunctions.net/searchBooks?query=${query}'); 
           setSearchResult(response.data);
        } catch (error) {
            console.error("Error fetching search results: ", error);
        }
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            fetchSearchResult(searchQuery);
        }, 500);
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
        icon="magnifying-glass"
        className="search__icon"
         />
    </div>
    </div>
    <div className="search__results">
        {searchResult.map((book) => (
            <div key={book.id} className="search__result">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <div className="recommended__book--details">
                            <div className="recommended__book--details-icon">
                            <FontAwesomeIcon icon="fa-regular fa-clock" />
                            </div>
                            <div className="recommended__book--details-text">
                            03:24
                            </div>
                        </div>
            </div>
        ))}
    </div>
    </>
  );
};

export default SearchInput;
