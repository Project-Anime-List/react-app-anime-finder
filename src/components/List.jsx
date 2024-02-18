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
      <Searchbar currentList={currentList} setCurrentList={setCurrentList} />
      <div className="listWrapper">
        {currentList === null ? (
          <h1>Loading...</h1>
        ) : (
          currentList.map((elem) => {
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
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
export default List;
