import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const fetchSearchResult = async () => {
        if (!query) return;
        try {

        }
    };
    
  return (
    <div className="search">
      <div className="search__input--wrapper">
        <input
        className="search__input"
        placeholder="Search for books"
        type="text"
        value=""
         />
        <FontAwesomeIcon
        icon="magnifying-glass"
        className="search__icon"
         />
    </div>
    </div>
  );
};

export default SearchInput;
