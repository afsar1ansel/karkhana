import "./Item.css";

import React from "react";
import { myContext } from "../Context/Context";


function Items(){

  const { addItem } = React.useContext(myContext);

   let items = [
     {
       id: 1,
       img: "https://www.exclusivebusinessgifts.com/media/catalog/product/cache/6b7590e0592686f38cf7075f53211cbd/g/i/gimber_brut_2.jpg",
       name: "Ori Gimber 700ml",
       price: "$24.95",
     },
     {
       id: 2,
       img: "https://m.media-amazon.com/images/I/41Lxw9AobKL.jpg",
       name: "Ginber New 700ml",
       price: "$25.85",
     },
     {
       id: 3,
       img: "https://www.exclusivebusinessgifts.com/media/catalog/product/cache/6b7590e0592686f38cf7075f53211cbd/g/i/gimber_brut_2.jpg",
       name: "Ori Gimber 700ml",
       price: "$24.95",
     },
     {
       id: 4,
       img: "https://m.media-amazon.com/images/I/41Lxw9AobKL.jpg",
       name: "Ginber New 700ml",
       price: "$25.85",
     },
     {
       id: 5,
       img: "https://www.exclusivebusinessgifts.com/media/catalog/product/cache/6b7590e0592686f38cf7075f53211cbd/g/i/gimber_brut_2.jpg",
       name: "Ori Gimber 700ml",
       price: "$24.95",
     },
     {
       id: 6,
       img: "https://m.media-amazon.com/images/I/41Lxw9AobKL.jpg",
       name: "Ginber New 700ml",
       price: "$25.85",
     },
     {
       id: 7,
       img: "https://www.exclusivebusinessgifts.com/media/catalog/product/cache/6b7590e0592686f38cf7075f53211cbd/g/i/gimber_brut_2.jpg",
       name: "Ori Gimber 700ml",
       price: "$24.95",
     },
     {
       id: 8,
       img: "https://m.media-amazon.com/images/I/41Lxw9AobKL.jpg",
       name: "Ginber New 700ml",
       price: "$25.85",
     },
     {
       id: 9,
       img: "https://www.exclusivebusinessgifts.com/media/catalog/product/cache/6b7590e0592686f38cf7075f53211cbd/g/i/gimber_brut_2.jpg",
       name: "Ori Gimber 700ml",
       price: "$24.95",
     },
     {
       id: 10,
       img: "https://m.media-amazon.com/images/I/41Lxw9AobKL.jpg",
       name: "Ginber New 700ml",
       price: "$25.85",
     },
     {
       id: 11,
       img: "https://www.exclusivebusinessgifts.com/media/catalog/product/cache/6b7590e0592686f38cf7075f53211cbd/g/i/gimber_brut_2.jpg",
       name: "Ori Gimber 700ml",
       price: "$24.95",
     },
     {
       id: 12,
       img: "https://m.media-amazon.com/images/I/41Lxw9AobKL.jpg",
       name: "Ginber New 700ml",
       price: "$25.85",
     },
   ];
  


    return (
      <div className="items">
        {items.map((item, index) => (
          <div key={index} className="item" onClick={() => addItem(item)} >
            <img src={item.img} alt={item.name} />
            <div className="item-info">
              <div className="item-name">{item.name}</div>
              <div className="item-price">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    );
}

export default Items