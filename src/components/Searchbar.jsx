import { useEffect, useState, useRef } from "react";
import "./searchbar.css";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ currentList }) => {
  const [filteredList, setFilteredList] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const searchInputRef = useRef(null);
  const SEARCH_LABEL = "Search Anime Name";
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredList(currentList);
  }, [currentList]);

  const searchAnime = (value) => {
    setFilteredList(
      currentList.filter((elem) => {
        return elem.name.toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  const handleFilteredListClick = (elem) => {
    navigate(`/details/${elem.id}`);
  };
  return (
    <div className="searchbarWrapper">
      <div className="searchbarcontainer">
        <label
          className="searchLabel"
          onClick={() => {
            searchInputRef.current.focus();
          }}
        >
          {SEARCH_LABEL}
        </label>
        <input
          type="search"
          ref={searchInputRef}
          onChange={({ target }) => {
            setInputValue(target.value);
            searchAnime(target.value);
          }}
        />
      </div>
      {inputValue ? (
        <div className="searchDataWrapper">
          {!filteredList ? (
            <p>loading...</p>
          ) : (
            filteredList.map((elem) => {
              return (
                <div key={elem.id} className="searchDataContainer">
                  <p
                    onClick={() => {
                      handleFilteredListClick(elem);
                    }}
                  >
                    {elem.name}
                  </p>
                  <img
                    src={elem.image}
                    onClick={() => {
                      handleFilteredListClick(elem);
                    }}
                  />
                </div>
              );
            })
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
