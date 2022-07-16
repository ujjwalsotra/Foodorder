import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import mealsimg from'../../MEAL.JPG.jpg'
import AuthContext from '../../store/auth-Context';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
function Header(props) {
  const authctx=useContext(AuthContext);
  const islog=authctx.isLoggedIn;
  const logmeout=()=>{
    authctx.logout();
  }
  return (
   <React.Fragment>
        <header className={classes.header}>
            <h1>
               PROJECT MEALS 
            </h1>
               <HeaderCartButton onClick={props.onShowCart}/>
               <div className={classes.login}>
                {!islog&&<Link className={classes.log}  to="login">Login</Link>}
                {islog && <Link className={classes.logsuccess}  to="login">Profile</Link>}
               </div>
               {islog && <button className={classes.logout} onClick={logmeout}>LogOut</button>}
        </header>
        <div className={classes['main-image']}>
            <img src={mealsimg}alt="Food to eat "/>
        </div>
   </React.Fragment>
  )
}

export default Header