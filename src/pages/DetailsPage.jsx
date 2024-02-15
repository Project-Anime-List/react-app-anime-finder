import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import API_URL from "../Api";
import dummyImg from "../assets/dummy-image.jpg";

const DetailsPage = () => {
  const [currentDetails, setCurrentDetails] = useState(null);
  let { listId } = useParams();
  // Example solution with Promises
  /*
  useEffect(() => {
    axios
      .get(`${API_URL}/${listId}`)
      .then((res) => {
        setCurrentDetails(res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }, [listId]);
*/
  // Example solution with async/await
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${API_URL}/${listId}`);
        console.log(result.data);
        if (result.data) {
          setCurrentDetails(result.data);
        }
      } catch (er) {
        console.log(er);
      }
    };
    fetchData();
  }, [listId]);

  return (
    <div>
      {!currentDetails ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="imgContainer">
            {!currentDetails.image ? (
              <img src={dummyImg} />
            ) : (
              <img src={currentDetails.image} />
            )}
          </div>
          <div className="detailsInfoContainer">
            <p>Name: {currentDetails.name}</p>
            <p>Release-Date: {currentDetails.release_date}</p>
            <p>Rating: {currentDetails.rating}</p>
            <p>
              Description:<br></br>{" "}
              <span style={{ marginLeft: "10px" }}>
                {currentDetails.description}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
