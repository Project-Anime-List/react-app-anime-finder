import { useEffect, useState, useRef } from "react";
import API_URL from "../Api";
import axios from "axios";

const EditItem = (props) => {
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

  useEffect(() => {
    axios
      .get(`${API_URL}/${props.listId}`)
      .then((res) => {
        setAnime({
          animeName: res.data.name,
          releaseDate: res.data.release_date,
          description: res.data.description,
          rating: res.data.rating,
          imgLink: res.data.image,
        });
      })
      .catch((er) => {
        console.log(er);
      });
  }, [props.listId]);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    let editedAnimeObj = {
      name: anime.animeName,
      image: anime.imgLink,
      description: anime.description,
      rating: anime.rating,
      release_date: anime.releaseDate,
    };
    try {
      axios.put(`${API_URL}/${props.listId}`, editedAnimeObj).then(() => {
        props.fetchData();
      });
    } catch (er) {
      console.log(er);
    }
    setShowForm(false);
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
              placeholder="2007-04-01"
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
            <legend>Additional information</legend>
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
          <button type="submit">Edit Anime</button>
        </form>
      </div>
    </>
  );
};
export default EditItem;
