import ErrorPicture from "../assets/errorPage-picture.webp"


const ErrorPage = () => {
  return (
    <div>
      <h1>404 Error</h1>
      <p>Oops! Something went wrong.</p>
      <img src={ErrorPicture} alt="Error-Image" />
    </div>
  );
};

export default ErrorPage;