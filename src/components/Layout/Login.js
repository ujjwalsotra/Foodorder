import React, { useRef, useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../store/auth-Context';
import classes from './Login.module.css'
function Login() {
    const [islogin,setIsLogin]=useState(false);
    const emailInput=useRef();
    const passwordInput=useRef();
    const authCon=useContext(AuthContext);
    const submitHandler=(event)=>{
        event.preventDefault();
        let url='';
        const enteredEmail=emailInput.current.value;
        const enteredPassword=passwordInput.current.value;
        if(islogin)
        {
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC31A9r4Lzi3JiveZgKjjnesz3Wt3N9bCI'
            
        }
        else
        {
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC31A9r4Lzi3JiveZgKjjnesz3Wt3N9bCI'
            setIsLogin(true);
           
        }
        fetch(url,{
            method:'POST',
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPassword,
                returnSecureToken:true,
            }),
            headers:{
                'Content-type':'application/json'
            }
        }).then(res=>{
            if(res.ok)
            {
                return res.json();
            }
            else
            {
               return res.json().then(data=>{
                       let errorMessage='Authentication failed :(';
                       /*if(data&& data.error && data.error.message)
                       {
                           errorMessage=data.error.message;
                        }*/
                        //alert(errorMessage);
                        throw new Error(errorMessage);
                    });      
            }
        }).then(data=>{
            authCon.login(data.idToken);
        }).catch((err)=>{
            //alert(err.message);
        });    
    }
  return (
    <div className={classes.mainlog}>

    <form className={classes.loginform} onClick={submitHandler}>

    <div className={classes.logwindow}>    
       <div>
        <label className={classes.label} htmlFor='email'>Email</label>
        <input className={classes.loginput} type='text' id='email' ref={emailInput}/>
        </div>
        <div>
        <label className={classes.label} htmlFor='password'>Password</label>
        <input className={classes.logpassinput} type='password' id='password' ref={passwordInput}/>
        </div>
        <button className={classes.logbutton} >
        <Link className={classes.registerLink} to="/">Login</Link>
        </button>
        <button className={classes.register}>
            <Link className={classes.registerLink} to="/">Register</Link>
        </button>
    </div>
    </form>
    </div>
  )
}

export default Login