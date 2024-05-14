import React from 'react';

import {createContext, useState} from 'react';

const Context = createContext({
  searchTerm: '',
  setSearchTerm: term => {},
  newsList: [],
  setNewsList: list => {},
});

const ContextProvider = ({children}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newsList, setNewsList] = useState([]);
  return (
    <Context.Provider
      value={{
        searchTerm,
        setSearchTerm,
        newsList,
        setNewsList,
      }}>
      {children}
    </Context.Provider>
  );
};
export {Context, ContextProvider};
