import React, { useState } from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    const ind = [...items].findIndex((value) => {
      return value.id === item.id;
    });

    if (ind > -1) {
      let arr = [...items];
      arr[ind]["quantity"] = Number(arr[ind]["quantity"]) + 1;
      updateItems([...arr]);
    } else {
      updateItems([...items, item]);
    }
  };

  const removeItemFromCartHandler = (oldItem) => {

    updateItems(prevItem=>{
      const dnewItem=prevItem.map(citem=>{
        
        
        if (citem.id===oldItem.id){
          
          const newItem={...citem}
          newItem.quantity=citem.quantity-1
          if (newItem.quantity<=0){
            return undefined
          }
          return newItem
        }
        else{
          return citem
        }
      })

      
      const xItem=dnewItem.filter(item=>item!==undefined)
      
      return xItem
    })
    
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    message: "Click here",
  };

  return (
    <CartContext.Provider value={cartContext}>
      {console.log("Inside CartContext.Provider", cartContext)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
