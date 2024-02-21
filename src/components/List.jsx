import API_URL from "../Api";
import dummyImg from "../assets/dummy-image.jpg";
import AddAnime from "./AddAnime";
import Searchbar from "./Searchbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./list.css";

const List = () => {
  const [currentList, setCurrentList] = useState(null);
  const [displayFavourites, setDisplayFavourites] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

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

  const addToFavorites = (elem) => {
    setFavorites((prevFavorites) => [...prevFavorites, elem]);
  };

  const removeFromFavorites = (elem) => {
    const newList = favorites.filter((item) => item.id !== elem.id);
    setFavorites(newList);
  };

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
  const handleFavourites = () => {
    setDisplayFavourites(!displayFavourites);
  };
  return (
    <>
      <div className="mainDataWrapperWrapper">
        <div className="favMainContainer">
          <AddAnime getData={getData} />
          <Searchbar
            currentList={currentList}
            setCurrentList={setCurrentList}
          />

          <div className="favoriteCardWrapper">
            <div className="burgerMenuContainer">
              <button
                className="burgerMenu"
                onClick={() => {
                  handleFavourites();
                }}
              >
                See Favourites
              </button>
            </div>
            {!displayFavourites
              ? favorites.map((elem) => {
                  return (
                    <div className="favoriteCardContainer" key={elem.id}>
                      <img src={elem.image} />
                    </div>
                  );
                })
              : favorites.map((elem) => {
                  return (
                    <div key={elem.id} className="favoriteCard">
                      <div
                        className="favoriteImgContainer"
                        onClick={() => {
                          handleClick(elem);
                        }}
                      >
                        <img
                          src={elem.image}
                          className="favoriteAnimeImg"
                          alt="Favorite Anime"
                        />
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
        </div>
        <div className="listWrapper">
          {!currentList ? (
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
                  <div
                    key={elem.id}
                    className="listContainer"
                    style={{
                      backgroundImage: elem.image
                        ? `url(${elem.image})`
                        : `url(${dummyImg})`,
                    }}
                  >
                    <div className="listBtns">
                      <button
                        onClick={() => {
                          handleDelete(elem);
                        }}
                      >
                        x
                      </button>
                      <button
                        onClick={() => {
                          isFavorite
                            ? removeFromFavorites(elem)
                            : addToFavorites(elem);
                        }}
                      >
                        {isFavorite ? "-" : "+"}
                      </button>
                    </div>
                    <div className="dataContainer">
                      <div className="animeDataNameContainer">
                        <p
                          className="animeDataName"
                          onClick={() => {
                            handleClick(elem);
                          }}
                        >
                          {elem.name}
                        </p>
                      </div>
                      <div className="animeDataContainer">
                        <p className="animeData">
                          Rating<br></br> {elem.rating}
                        </p>
                        <p className="animeData">
                          Aired on <br></br>
                          {elem.release_date}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default List;
