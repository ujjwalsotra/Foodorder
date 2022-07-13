import React from 'react';
import mealsimg from'../../MEAL.JPG.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
function Header() {
  return (
   <React.Fragment>
        <header className={classes.header}>
            <h1>
               PROJECT MEALS 
            </h1>
               <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsimg}alt="Food to eat "/>
        </div>
   </React.Fragment>
  )
}

export default Header