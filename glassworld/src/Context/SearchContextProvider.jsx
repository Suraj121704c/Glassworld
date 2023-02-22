import React from 'react'
import { createContext } from 'react';

export const searchContext = createContext()

const SearchContextProvider = ({children}) => {
  const [q, setq] = React.useState("");

  return (
    <searchContext.Provider value={{q,setq}}>
      {children}
    </searchContext.Provider>
  )
}

export default SearchContextProvider
