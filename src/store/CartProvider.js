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
      arr[ind]["quantity"] = Number(arr[ind]["quantity"]) + Number(item.quantity);
      updateItems([...arr]);
    } else {
      updateItems([...items, item]);
    }
  };

  const removeItemFromCartHandler = (id) => {};

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
