import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const fetchSearchResult = async (query) => {
        if (!query) return;
        try {
           const response = await axios.get('https://us-central1-summaristt.cloudfunctions.net/getBooks?query=' + query); 
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
        {}
    </div>
  );
};

export default SearchInput;
