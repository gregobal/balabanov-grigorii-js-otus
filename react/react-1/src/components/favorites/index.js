import React from "react";

const Favorites = ({favorites, onClickFavoriteDelete, onSelectChange}) => {
  const favorList = favorites.map(city => {
    return (
      <li className="btn-group" key={city}>
        <button
          className="btn btn-outline-secondary col-2"
          onClick={() => onClickFavoriteDelete(city)}
        >
          <i className="fas fa-trash-alt fa-sm justify-content-end"> </i>
        </button>
        <button
          className="btn btn-outline-secondary btn-block"
          onClick={() => onSelectChange(city)}
        >
          {city}
        </button>
      </li>
    )
  });

  return (
    <ul className="list-group btn-group-vertical">
      {favorList}
    </ul>
  )
};

export default Favorites
