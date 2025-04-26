import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

function SearchBar({ searchText = "" }) {
  const [localSearchText, setLocalSearchText] = useState(searchText);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (localSearchText.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(localSearchText)}`);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="검색"
        value={localSearchText}
        onChange={(e) => setLocalSearchText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <FaSearch className="search-icon" onClick={handleSearch} />
    </div>
  );
}

export default SearchBar;
