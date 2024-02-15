import API_URL from "../Api";
import dummyImg from "../assets/dummy-image.jpg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./list.css";

const List = () => {
  const [currentList, setCurrentList] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      axios.get(API_URL).then((res) => {
        setCurrentList(res.data);
      });
    } catch (er) {
      console.log(er);
    }
  }, []);
  const handleClick = (elem) => {
    navigate(`/details/${elem.id}`);
  };
  return (
    <div className="listWrapper">
      {currentList === null ? (
        <h1>Loading...</h1>
      ) : (
        currentList.map((elem) => {
          return (
            <div key={elem.id} className="listContainer">
              <div className="imgContainer">
                {!elem.image ? (
                  <img className="animeImg" src={dummyImg} />
                ) : (
                  <img src={elem.image} className="animeImg" />
                )}
              </div>
              <p>name: {elem.name}</p>
              <p>rating: {elem.rating}</p>
              <button
                onClick={() => {
                  handleClick(elem);
                }}
              >
                view details
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};
export default List;
