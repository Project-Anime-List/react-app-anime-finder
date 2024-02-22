import "./favourite.css";

const Favourite = (props) => {
  return (
    <>
      <div className="burgerMenuContainer">
        <button
          className="burgerMenu"
          onClick={() => {
            props.handleFavourites();
          }}
        >
          See Favourites
        </button>
      </div>

      {!props.displayFavourites
        ? props.favorites.map((elem) => {
            return (
              <div className="favoriteCardContainer" key={elem.id}>
                <img src={elem.image} />
              </div>
            );
          })
        : props.favorites.map((elem) => {
            return (
              <div key={elem.id} className="favoriteCard">
                <div
                  className="favoriteImgContainer"
                  onClick={() => {
                    props.handleClick(elem);
                  }}
                >
                  <img
                    src={elem.image}
                    className="favoriteAnimeImg"
                    alt="Favorite Anime"
                  />
                </div>
                <div className="favoriteDetails">
                  <p
                    className="favoriteAnimeName"
                    onClick={() => {
                      props.handleClick(elem);
                    }}
                  >
                    {elem.name}
                  </p>
                  <button
                    className="removeFromFavoritesButton"
                    onClick={() => {
                      props.removeFromFavorites(elem);
                    }}
                  >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            );
          })}
    </>
  );
};
export default Favourite;
