import { useEffect, useState } from "react";
import API_URL from "../Api";
import axios from "axios";

const EditItem = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [animeName, setAnimeName] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [imgLink, setImgLink] = useState("");

  useEffect(() => {
    axios
      // eslint-disable-next-line react/prop-types
      .get(`${API_URL}/${props.listId}`)
      .then((res) => {
        setAnimeName(res.data.name);
        setReleaseDate(res.data.release_date);
        setDescription(res.data.description);
        setRating(res.data.rating);
        setImgLink(res.data.image);
      })
      .catch((er) => {
        console.log(er);
      });
    // eslint-disable-next-line react/prop-types
  }, [props.listId]);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    let editedAnimeObj = {
      name: animeName,
      image: imgLink,
      description: description,
      rating: rating,
      release_date: releaseDate,
    };
    try {
      // eslint-disable-next-line react/prop-types
      axios.put(`${API_URL}/${props.listId}`, editedAnimeObj).then(() => {
        // eslint-disable-next-line react/prop-types
        props.fetchData();
      });
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <>
      <button onClick={toggleShowForm} className="iconAddAnime">
        {showForm ? "Close" : "Edit Anime Information"}
      </button>

      <div className={showForm ? "formContainer show" : "formContainer"}>
        <form className="addProduct" onSubmit={handleEditSubmit}>
          <fieldset>
            <legend>Anime information</legend>
            <label>
              Anime Name
              <input
                type="text"
                placeholder="Enter Name"
                name="Anime-name"
                required
                value={animeName}
                onChange={(e) => {
                  setAnimeName(e.target.value);
                }}
              ></input>
            </label>
            <label>
              Rating
              <input
                type="number"
                placeholder="8.5"
                name="Anime-rating"
                value={rating}
                onChange={(e) => {
                  setRating(e.target.value);
                }}
              ></input>
            </label>
            <label>
              Release Date
              <input
                type="text"
                placeholder="2007-04-01"
                value={releaseDate}
                onChange={(e) => {
                  setReleaseDate(e.target.value);
                }}
              ></input>
            </label>
          </fieldset>
          <fieldset>
            <legend>Additional information</legend>
            <label>
              Description
              <textarea
                rows="5"
                cols="50"
                type="text"
                placeholder="Enter a Description"
                name="description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </label>
            <label>
              Add Image
              <input
                type="text"
                placeholder="Image url"
                value={imgLink}
                onChange={(e) => {
                  setImgLink(e.target.value);
                }}
              ></input>
            </label>
          </fieldset>
          <button type="submit">Edit Anime</button>
        </form>
      </div>
    </>
  );
};
export default EditItem;
