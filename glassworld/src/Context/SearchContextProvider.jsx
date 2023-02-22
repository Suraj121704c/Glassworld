import React from 'react'
import { createContext } from 'react';

export const searchContext = createContext()

const SearchContextProvider = ({children}) => {
  const [q, setq] = React.useState("");
  const [cartData,setCartData] = React.useState([])
  const [whishData,setWhishData] = React.useState([])

  return (
    <searchContext.Provider value={{q,setq,cartData,setCartData,whishData,setWhishData}}>
      {children}
    </searchContext.Provider>
  )
}

export default SearchContextProvider
