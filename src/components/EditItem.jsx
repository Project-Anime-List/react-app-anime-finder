import { useEffect, useState, useRef } from "react";
import API_URL from "../Api";
import axios from "axios";

const EditItem = (props) => {
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

  useEffect(() => {
    axios
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
      axios.put(`${API_URL}/${props.listId}`, editedAnimeObj).then(() => {
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
            <label onClick={() => {
              animeNameRef.current.focus();
            }}>
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
            <label onClick={() => {
              ratingRef.current.focus();
            }}>
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
            <label onClick={() => {
              releaseDateRef.current.focus();
            }}>
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
            <legend>Additional information</legend>
            <label onClick={() => {
              descriptionRef.current.focus();
            }}>
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
            <label onClick={() => {
              imgLinkRef.current.focus();
            }}>
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
          <button type="submit">Edit Anime</button>
        </form>
      </div>
    </>
  );
};
export default EditItem;
