import React, { useState } from "react";
import "./Search.scss";
import { FiSearch, FiHeart } from "react-icons/fi";

function Search() {
  const [query, setQuery] = useState("");
  const [liked, setLiked] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      console.log("Axtarış:", query);
    }
  };

  return (
    <div className="search">
      <form
        className={`search__form ${focused ? "search__form--focused" : ""}`}
        onSubmit={handleSearch}
      >
        {/* Sol ikon */}
        <div className="search__input-wrap">
          <FiSearch className="search__icon" />
          <input
            type="text"
            className="search__input"
            placeholder="Sənə nə lazımdır?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          {/* X — query varsa göstər */}
          {query && (
            <button
              type="button"
              className="search__clear"
              onClick={() => setQuery("")}
              tabIndex={-1}
            >
              ✕
            </button>
          )}
        </div>

        {/* Axtar düyməsi */}
        <button type="submit" className="search__btn">
          <FiSearch className="search__btn-icon" />
          <span>Axtar</span>
        </button>
      </form>

      {/* Sağ — Sevimlilər */}
      <div className="search__actions">
        <button
          className={`search__action-btn ${liked ? "search__action-btn--active" : ""}`}
          onClick={() => setLiked(!liked)}
          title="Sevimlilər"
          type="button"
        >
          <FiHeart />
          {liked && <span className="search__action-badge" />}
        </button>
      </div>
    </div>
  );
}

export default Search;
