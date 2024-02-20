import { Link } from "react-router-dom";
import "./about.css";
const About = () => {
  return (
    <div className="aboutPageWrapper">
      <div className="aboutPageContainer">
        <p className="aboutHeader">About Page</p>
        <p className="aboutMain">
          This project was developed by Pouria Pourgoshtashbi and Kosta Kallias.
        </p>
        <p className="aboutMain">You can find them on LinkedIn</p>
        <ul>
          <li>
            <Link to="https://www.linkedin.com/in/pouria-pourgoshtasbi-744565246">
              Pouria`s LinkedIn
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/fakeprofile">
              Kosta`s LinkedIn
            </Link>
          </li>
        </ul>
        <p className="aboutMain">
          The project`s GitHub repository can be found here
        </p>
        <ul>
          <li>
            <Link to="https://github.com/Project-Anime-List/react-app-anime-finder">
              Project Repository
            </Link>
          </li>
        </ul>
        <p className="aboutMain">
          Additionally, the API used in this project can be found here
        </p>
        <ul>
          <li>
            <Link to="https://json-anime-api.adaptable.app/anime-list">
              Project API
            </Link>
          </li>
        </ul>

        <p className="aboutMain">Here`s a brief description of the project</p>
        <div className="aboutPageDescription">
          <p>
            Our project is a dynamic anime management application designed for
            anime enthusiasts looking to find the next best anime to watch. The
            application offers a variety of features, allowing users to
            effortlessly Create, Read, Update, and Delete anime entries ensuring
            the ultimate user satisfaction. Additionally, there is an intuitive
            search bar functionality, helping you find the desired anime as
            efficient as possible. Dive into the world of anime with our
            comprehensive and user-friendly UI, where managing and discovering
            your favorite anime is a breeze.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
