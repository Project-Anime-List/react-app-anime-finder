import ErrorPicture from "../assets/errorPage-picture.webp";
import "./errorPage.css";
const ErrorPage = () => {
  return (
    <div className="errorPageWrapper">
      <div className="errorPageDataContainer">
        <h1>404 Error</h1>
        <p>Oops! Something went wrong.</p>
      </div>
      <div className="errorPageImgContainer">
        <img src={ErrorPicture} alt="Error-Image" />
      </div>
    </div>
  );
};

export default ErrorPage;
