import API_URL from "../Api";
import { useState, useEffect } from "react";
import axios from "axios";
const List = () => {
  const [currentList, setCurrentList] = useState(null);
  useEffect(() => {
    try {
      axios.get(API_URL).then((res) => {
        setCurrentList(res.data);
      });
    } catch (er) {
      console.log(er);
    }
  }, []);
  return (
    <div>
      {currentList === null ? (
        <h1>Loading...</h1>
      ) : (
        currentList.map((elem) => {
          return (
            <div key={elem.id}>
              <p>name: {elem.name}</p>
              <p>rating: {elem.rating}</p>
            </div>
          );
        })
      )}
    </div>
  );
};
export default List;
