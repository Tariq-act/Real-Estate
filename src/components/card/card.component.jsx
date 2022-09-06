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
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            color='yellow'
          >
            <path d='M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z' />
          </svg>
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
