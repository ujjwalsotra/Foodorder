import React from 'react'
import CardIcon from'../Cart/CartIcon';
import classe from './HeaderCartButton.module.css';
function HeaderCartButton(props) {
  return (
    <button className={classe.button} onClick={props.onClick}>
        <span className={classe.icon}>
            <CardIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classe.badge}>3</span>
    </button>
  )
}

export default HeaderCartButton