import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import API_URL from "../Api";

const DetailsPage = () => {
  const [currentDetails, setCurrentDetails] = useState(null);
  let { listId } = useParams();
  useEffect(() => {
    try {
      axios.get(`${API_URL}/${listId}`).then((res) => {
        setCurrentDetails(res.data);
      });
    } catch (er) {
      console.log(er);
    }
  }, [listId]);
  return (
    <div>
      {currentDetails === null ? (
        <h1>Loading...</h1>
      ) : (
        <p>{currentDetails.name}</p>
      )}
    </div>
  );
};
export default DetailsPage;
