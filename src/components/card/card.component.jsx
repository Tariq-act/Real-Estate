import React, { useContext } from 'react';
import './card.styles.css';

import { GlobalContext } from '../../context/contextApi';

function Capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Card = ({ data }) => {
  const { coverSrc, price, title, location, bed, bathroom, sqtFeet, rating } =
    data;

  const { addFavouriteList, favorite } = useContext(GlobalContext);

  const storeFavourite = favorite.find((item) => item.id === data.id);

  const disabledButton = storeFavourite ? true : false;

  return (
    <>
      <div className='card'>
        <button
          className='favourite-btn'
          disabled={disabledButton}
          onClick={() => addFavouriteList(data)}
        >
          <span class='lnr lnr-star'></span>
        </button>
        <img src={require(`../../assets/images/${coverSrc}`)} alt='' />

        <div className='card-content'>
          <div className='card-content-header'>
            <div className='price'>
              <span>{price}</span>/month
            </div>
            <div className='rating'>
              <span>{rating}</span>/5 rating
            </div>
          </div>

          <h1>{Capitalize(title)}</h1>
          <p>{location}</p>

          <hr />
          <div className='card-footer'>
            <div>
              <i class='fa fa-bed' aria-hidden='true'></i> {bed}
              {bed > 1 ? ' Bedrooms' : ' Bedroom'}
            </div>
            <div>
              <i class='fa fa-bath' aria-hidden='true'></i> {bathroom}
              {bathroom > 1 ? ' Bathrooms' : ' Bathroom'}
            </div>
            <div>
              <i class='fa fa-arrows-alt' aria-hidden='true'></i> {sqtFeet}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
