import API_URL from "../Api";
import dummyImg from "../assets/dummy-image.jpg";
import AddAnime from "./AddAnime";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./list.css";

const List = () => {
  const [currentList, setCurrentList] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

    function addToFavorites(elem) {
    setFavorites((prevFavorites) => [...prevFavorites, elem]);
  }

  const getData = async () => {
    try {
      const result = await axios.get(API_URL);

      if (result.data) {
        setCurrentList(result.data.reverse());
      }
    } catch (er) {
      console.log(er);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (elem) => {
    navigate(`/details/${elem.id}`);
  };

    function removeFromFavorites(elem) {
    const newList = favorites.filter((item) => item.id !== elem.id);
    setFavorites(newList);
  }

  const handleDelete = (elem) => {
    axios
      .delete(`${API_URL}/${elem.id}`)
      .then(() => {
        getData();
      })
      .catch((er) => {
        console.log(er);
      });
  };

  return (
    <>
      <AddAnime getData={getData} />

      <div className="favoriteCardWrapper">
      {favorites.map((elem) => {
  return (
    <div key={elem.id} className="favoriteCard">
      <div
        className="favoriteImgContainer"
        onClick={() => {
          handleClick(elem);
        }}
      >
        {!elem.image ? (
          <img className="favoriteAnimeImg" src={dummyImg} alt="Favorite Anime" />
        ) : (
          <img src={elem.image} className="favoriteAnimeImg" alt="Favorite Anime" />
        )}
      </div>
      <div className="favoriteDetails">
        <p
          className="favoriteAnimeName"
          onClick={() => {
            handleClick(elem);
          }}
        >
          {elem.name}
        </p>
        <button
          className="removeFromFavoritesButton"
          onClick={() => {
            removeFromFavorites(elem);
          }}
        >
          Remove from Favorites
        </button>
      </div>
    </div>
  );
})}
</div>

      <div className="listWrapper">
        {currentList === null ? (
          <h1>Loading...</h1>
        ) : (
         <>
          {currentList.map((elem) => {
            let isFavorite = false;

            for (let i = 0; i < favorites.length; i++) {
              if (elem.id === favorites[i].id) {
                isFavorite = true;
                break;
              }
            }
            return (
              <div key={elem.id} className="listContainer">
                <div
                  className="imgContainer"
                  onClick={() => {
                    handleClick(elem);
                  }}
                >
                  {!elem.image ? (
                    <img className="animeImg" src={dummyImg} />
                  ) : (
                    <img src={elem.image} className="animeImg" />
                  )}
                </div>
                <p
                  className="animeDataName"
                  onClick={() => {
                    handleClick(elem);
                  }}
                >
                  {elem.name}
                </p>
                <p className="animeData">
                  Rating<br></br> {elem.rating}
                </p>
                <p className="animeData">
                  Aired on <br></br>
                  {elem.release_date}
                </p>
                <button
                  onClick={() => {
                    handleDelete(elem);
                  }}
                >
                  🗑️
                </button>
                  <button
                    onClick={() => {
                      isFavorite
                        ? removeFromFavorites(elem)
                        : addToFavorites(elem);
                    }}
                  >
                    {isFavorite ? "Remove from" : "Add To"} Favorites
                  </button>
              </div>
            );
          })}




         </>  
        )}
      </div>
    </>
  );
};
export default List;

