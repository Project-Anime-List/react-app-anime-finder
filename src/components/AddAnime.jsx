import { useState, useRef } from "react";
import "./addAnime.css";
import axios from "axios";
import API_URL from "../Api";

const AddAnime = (props) => {
  const [showForm, setShowForm] = useState(false);

  const [anime, setAnime] = useState({
    animeName: "",
    releaseDate: "",
    description: "",
    rating: "",
    imgLink: "",
  });

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
      name: anime.animeName,
      image: anime.imgLink,
      description: anime.description,
      rating: anime.rating,
      release_date: anime.releaseDate,
    };
    try {
      axios.post(API_URL, newAnimeObj).then(() => {
        props.getData();
      });
    } catch (er) {
      console.log(er);
    }
    setShowForm(false);
    setAnime({
      animeName: "",
      releaseDate: "",
      description: "",
      rating: "",
      imgLink: "",
    });
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
              value={anime.animeName}
              onChange={(e) => {
                setAnime((prev) => ({
                  ...prev,
                  animeName: e.target.value,
                }));
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
              value={anime.rating}
              min={0}
              max={10}
              onChange={(e) => {
                setAnime((prev) => ({
                  ...prev,
                  rating: e.target.value,
                }));
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
              placeholder="01-04-2007"
              value={anime.releaseDate}
              onChange={(e) => {
                setAnime((prev) => ({
                  ...prev,
                  releaseDate: e.target.value,
                }));
              }}
            ></input>
          </fieldset>
          <fieldset>
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
              value={anime.description}
              onChange={(e) => {
                setAnime((prev) => ({
                  ...prev,
                  description: e.target.value,
                }));
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
              value={anime.imgLink}
              onChange={(e) => {
                setAnime((prev) => ({
                  ...prev,
                  imgLink: e.target.value,
                }));
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
