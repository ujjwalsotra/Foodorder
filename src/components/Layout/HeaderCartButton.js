import React, { useContext } from 'react'
import CardIcon from'../Cart/CartIcon';
import CartContext from '../../store/Cart-context';
import classe from './HeaderCartButton.module.css';
function HeaderCartButton(props) {
  const cartCtx=useContext(CartContext);
  const numberofCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount;
  },0)
  return (
    <button className={classe.button} onClick={props.onClick}>
        <span className={classe.icon}>
            <CardIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classe.badge}>{numberofCartItems}</span>
    </button>
  )
}

export default HeaderCartButton