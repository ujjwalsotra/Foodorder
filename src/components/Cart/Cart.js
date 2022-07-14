import React from 'react'
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
function Cart(props) {
    const cartitems=<ul className={classes['cart-items']}>{
[{id:'c1',name: 'dal makhni', amount: 1,price:150.00}].map(item=><li>{item.name}</li>)}
</ul>;
  return (
    <Modal onClose={props.onClose}>
        {cartitems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>100</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart