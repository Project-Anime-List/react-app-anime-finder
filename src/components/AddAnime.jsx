import { useState, useRef } from "react";
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
  const animeNameRef = useRef(null);
  const releaseDateRef = useRef(null);
  const descriptionRef = useRef(null);
  const ratingRef = useRef(null);
  const imgLinkRef = useRef(null);

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
        {showForm ? "Close" : "Add a new Anime"}
      </button>

      <div className={showForm ? "formContainer show" : "formContainer"}>
        <form className="addProduct" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Anime information</legend>
            <label
              onClick={() => {
                animeNameRef.current.focus();
              }}
            >
              Anime Name
            </label>
            <input
              ref={animeNameRef}
              type="text"
              placeholder="Enter Name"
              name="Anime-name"
              required
              value={animeName}
              onChange={(e) => {
                setAnimeName(e.target.value);
              }}
            ></input>

            <label
              onClick={() => {
                ratingRef.current.focus();
              }}
            >
              Rating
            </label>
            <input
              ref={ratingRef}
              type="number"
              placeholder="8.5"
              name="Anime-rating"
              value={rating}
              onChange={(e) => {
                setRating(e.target.value);
              }}
            ></input>

            <label
              onClick={() => {
                releaseDateRef.current.focus();
              }}
            >
              Release Date
            </label>
            <input
              ref={releaseDateRef}
              type="text"
              placeholder="2007-04-01"
              value={releaseDate}
              onChange={(e) => {
                setReleaseDate(e.target.value);
              }}
            ></input>
          </fieldset>
          <fieldset>
            {/* <legend>Additional information</legend> */}
            <label
              onClick={() => {
                descriptionRef.current.focus();
              }}
            >
              Description
            </label>
            <textarea
              ref={descriptionRef}
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
            <label
              onClick={() => {
                imgLinkRef.current.focus();
              }}
            >
              Add Image
            </label>
            <input
              ref={imgLinkRef}
              type="text"
              placeholder="Image url"
              value={imgLink}
              onChange={(e) => {
                setImgLink(e.target.value);
              }}
            ></input>
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
