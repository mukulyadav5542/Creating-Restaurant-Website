import React, { useContext } from 'react';
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {

  const cartCtx = useContext(CartContext);
  console.log("re-initialising cartCtx", cartCtx);

  const addItemToCart = (event) => {

    const ind = cartCtx.items.findIndex((x)=>x.id === props.item.id)
    console.log(ind,'ind')
    
    // update the CartContext.items
    event.preventDefault();
    // cartCtx.items.push(props.item);
    const quantity = document.getElementById("amount_" +props.id).value;
    console.log(quantity,props.item,'props.item');
    cartCtx.addItem({ ...props.item , quantity: quantity});
    console.log('after addItemToCart',{ ...props.item , quantity: Number(quantity)}, cartCtx);
  }

  return (
    <form className={classes.form}>
      {console.log('inside render', cartCtx.items)}
      <Input label="Amount" input={{
        id:"amount_" +props.id, 
        type: "number",
        min: "1",
        max: "5",
        step: "1",
        defaultValue: "1",
      }} />
      <button onClick={addItemToCart} >+ Add</button>
    </form>
  );
};

export default MealItemForm;
