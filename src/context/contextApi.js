import { createContext, useState, useEffect, useReducer } from 'react';
import data from '.././dummyData.json';

// Initial state
const initialState = {
  favorite: [],
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      return {
        ...state,
        favorite: [action.payload, ...state.favorite],
      };
    default:
  }
};

export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addFavouriteList = (card) => {
    dispatch({ type: 'ADD_FAVOURITE', payload: card });
  };

  const [list, setList] = useState(data);
  const [inputSearch, setInputSearch] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [result, setResult] = useState(false);
  const [search, setSearch] = useState(false);

  const handleSearchInput = (e) => {
    setInputSearch(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handlePropertyType = (e) => {
    setPropertyType(e.target.value);
  };

  const applyFilter = () => {
    let updatedList = data;

    // search filter
    if (inputSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
    }

    //Location filter
    if (location) {
      updatedList = updatedList.filter((item) => item.location === location);
    }

    // Price filter
    let minPrice = parseInt(price.substring(0, 4));
    let maxPrice = parseInt(price.substring(5, 9));
    console.log(minPrice, maxPrice);
    if (price) {
      updatedList = updatedList.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );
    }

    console.log(updatedList);

    // Date filter
    let d = parseInt(date.substring(8, 10));
    let m = parseInt(date.substring(5, 7));
    let y = parseInt(date.substring(0, 4));

    if (date) {
      // eslint-disable-next-line
      updatedList = updatedList.filter((item) => {
        let d1 = parseInt(item.date.substring(8, 10));
        let m1 = parseInt(item.date.substring(5, 7));
        let y1 = parseInt(item.date.substring(0, 4));
        if (y1 < y) {
          return parseInt(item.date.substring(0, 4));
        } else if (y1 === y) {
          let totalDays1 = 30 * (m1 - 1) + d1;
          let totalDays = 30 * (m - 1) + d;
          if (totalDays1 <= totalDays) {
            return parseInt(item.date.substring(5, 7));
          }
        }
      });
    }

    //Property Filter
    if (propertyType) {
      updatedList = updatedList.filter((item) => item.type === propertyType);
    }

    updatedList.length === 0 ? setResult(false) : setResult(true);

    setList(updatedList);
  };

  const handleSearch = () => {
    setSearch((prev) => !prev);
  };

  useEffect(() => {
    applyFilter();
    // eslint-disable-next-line
  }, [inputSearch, search]);

  return (
    <GlobalContext.Provider
      value={{
        inputSearch,
        list,
        handleSearchInput,
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
        result,
        favorite: state.favorite,
        addFavouriteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
