import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import delet from "../assets/delete.svg"

import { myContext } from "../Context/Context"
const itemStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
//   border: "1px solid black",
  padding: "20px 30px",
//   margin: "30px 10px",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center", 
};

const delBtn = {
  cursor: "pointer",
  height: "30px",
  width: "30px",
  backgroundColor: "white",
  border: "none",
  alignSelf: "flex-end", 
  marginTop: "10px",
};
function CartItem() {
    const { state, setState, detailsState, setDetailsState } = React.useContext(myContext)

     useEffect(() => {
       setState([
         ...state,
         {
            id: `${state.length + 1}`,
           name: "Ori Gimber 700ml",
           price: "$24.95",
         }
       ])
     }, [])

     const handleDelete = (id) => {
       setState(state.filter((item) => item.id !== id));
     };


   return (
     <div style={{ margin: "40px 10px" }} >
       {state.map((item) => (
         <div key={item.id} style={itemStyle}>
           <div style={headerStyle}>
             <h3 style={{ margin: 0 }}>{item.name}</h3>
             <p style={{ margin: 0 }}>{item.price}</p>
           </div>
           <button style={delBtn} onClick={() => handleDelete(item.id)} >
             <img src={delet} alt="Delete" />
           </button>
         </div>
       ))}
     </div>
   );

}

export default CartItem