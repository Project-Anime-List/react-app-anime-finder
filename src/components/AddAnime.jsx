import { useState } from "react";
import "./addAnime.css";
import axios from "axios";
import API_URL from "../Api";

const AddAnime = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [animeName, setAnimeName] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [imgLink, setImgLink] = useState("");
  const toggleShowForm = () => {
    setShowForm(!showForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newAnimeObj = {
      name: animeName,
      image: imgLink,
      description: description,
      rating: rating,
      release_date: releaseDate,
    };
    try {
      axios.post(API_URL, newAnimeObj).then(() => {
        props.getData();
      });
    } catch (er) {
      console.log(er);
    }
    setShowForm("");
    setAnimeName("");
    setReleaseDate("");
    setDescription("");
    setRating("");
    setImgLink("");
  };
  return (
    <>
      <button onClick={toggleShowForm} className="iconAddAnime">
        {showForm ? <span>Close</span> : <span>Add a new Anime</span>}
      </button>

      <div className={showForm ? "formContainer show" : "formContainer"}>
        <form className="addProduct" onSubmit={handleSubmit}>
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
          <div className="SubmitBtn">
            <button type="submit">Add Anime</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddAnime;
