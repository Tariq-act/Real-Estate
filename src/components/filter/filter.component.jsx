import React, { useContext } from 'react';
import data from '../../dummyData.json';

import { GlobalContext } from '../../context/contextApi';

import './filter.styles.css';

const handleSubmit = (e) => {
  e.preventDefault();
};

const Filter = () => {
  const {
    location,
    handleLocation,
    price,
    handlePrice,
    date,
    handleDate,
    propertyType,
    handlePropertyType,
    search,
    handleSearch,
  } = useContext(GlobalContext);
  return (
    <div className='filter-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='location'>Location</label>
          <select
            name='location'
            id='location'
            value={location}
            onChange={handleLocation}
          >
            <option value='null'>select</option>
            {data.map((item, index) => (
              <option key={index} value={`${item.location}`}>
                {item.location}
              </option>
            ))}
          </select>
        </div>
        <div className='verticalLine'></div>
        <div className='form-control'>
          <label htmlFor='date'>When</label>
          <input
            type='date'
            name='date'
            id='date'
            placeholder='Select Date'
            value={date}
            onChange={handleDate}
          />
        </div>
        <div className='verticalLine'></div>
        <div className='form-control'>
          <label htmlFor='price'>Price</label>
          <select name='price' id='price' value={price} onChange={handlePrice}>
            <option value=''>Select</option>
            <option value='1000-2000'>Rs. 1000-2000</option>
            <option value='2000-3000'>Rs. 2000-3000</option>
            <option value='3000-4000'>Rs. 3000-4000</option>
            <option value='4000-5000'>Rs. 4000-5000</option>
          </select>
        </div>
        <div className='verticalLine'></div>
        <div className='form-control'>
          <label htmlFor='propertyType'>Property Type</label>
          <select
            name='propertyType'
            id='propertyType'
            value={propertyType}
            onChange={handlePropertyType}
          >
            <option value=''>Select</option>
            <option value='Houses'>Houses</option>
            <option value='Hotels'>Hotels</option>
            <option value='Restaurants'>Restaurants</option>
          </select>
        </div>
        <div className='verticalLine'></div>
        <div className='form-control'>
          <button className='btn' value={search} onClick={handleSearch}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
