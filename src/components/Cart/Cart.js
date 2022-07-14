import React, { useContext } from 'react'
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/Cart-context';
import CartItem from './CartItem';
function Cart(props) {
    const CartCtx=useContext(CartContext);
    const totalAmount=`₹${CartCtx.totalAmount.toFixed(2)}`;
    const hasItems=CartCtx.items.length>0;
    const cartItemRemoveHandler=id=>{

    };
    const cartItemAddHandler=item=>{};
    const cartitems=(<ul className={classes['cart-items']}>
      { CartCtx.items.map((item)=>(
      <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} 
      onRemove={cartItemRemoveHandler(null,item.id)}
      onAdd={cartItemAddHandler.bind(null,item)}
      />
    ))
    }
</ul>);
  return (
    <Modal onClose={props.onClose}>
        {cartitems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems &&<button className={classes.button}>Order</button>}
        </div>
    </Modal>
  )
}

export default Cart