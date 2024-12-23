import React from 'react'
import classes from "./Cart.module.css"
import Modal from '../UI/Modal'

const Cart = (props) => {
    const cartItem=<ul className={classes['cart-items']}>{[{id:"c1",name:"Sushi" ,amount:2,price:12.20}].map((item)=><li>{item.name}</li>)}</ul>
  return (
    <Modal onClose={props.onClose}>
        {cartItem}
        <div className={classes.total}>
<span>Total Amount</span>
      </div>
<span>35.62</span>
<div className={classes.action}>
<button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
<button className={classes.button}>Order</button>
</div>
    </Modal>
  )
}

export default Cart