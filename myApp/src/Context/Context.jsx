import React from 'react'
const { useState } = React

const myContext = React.createContext();

const Context = ({ children }) => {

    const [state, setState] = useState([{
        img: "",
        name: "Ori Gimber 700ml",
        price: "$24.95"}]);
    
        const addItem = (item) => {
            setState([...state, item]);
        }
    const contextValue = {
      state,
      setState,
      addItem
    };

    
    return (
        <myContext.Provider value={contextValue}>
            {children}
        </myContext.Provider>
    )
}

export { Context, myContext }