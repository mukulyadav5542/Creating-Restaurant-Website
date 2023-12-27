import React, { useContext } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const cartCntx = useContext(CartContext);
    let quantity = 0;
    console.log(cartCntx,'cartCntx');
    cartCntx.items.forEach(item => {
      quantity = quantity + Number(item.quantity)
    });

    // const numberOfCartItems = cartCtx.items.reduce((curNumber, item ) => {
    //     return curNumber + item.amount;
    // }, 0 );
    
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>{cartCntx.message}</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
