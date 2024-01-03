import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCntx = useContext(CartContext);


  let totalAmount = 0;
  const addItems = (item) => {
    console.log(item, "sum");
    cartCntx.addItem({ ...item , quantity: Number(item.quantity) + 1});
  }

  console.log(cartCntx, "sum");

  const removeItem = (item) => {
    cartCntx.removeItem({ ...item, quantity: Number(item.quantity) - 1});
  }
  const cartItems = (
    <ul className={classes["cart-items"]}>
      <table className="table mb-2">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartCntx.items.map((item, ind) => {
            totalAmount += item.price * item.quantity
           return (<tr>
              <th scope="row">{ind + 1}</th>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td onClick={()=>removeItem(item)}><button className={classes.button}>-</button></td>
              <td onClick={()=>addItems(item)}><button className={classes.button}>+</button></td>
            </tr>)
          })}
        </tbody>
      </table>
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
