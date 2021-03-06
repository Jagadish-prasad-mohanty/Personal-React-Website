import React, {  useReducer, useRef, useState,useEffect } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";

import {useDispatch, useSelector} from 'react-redux'
import { loginHandler, logoutHandler } from "../../store/actions/authActions";
import { fetchCart, initiateProducts } from "../../store/actions/cartAction";
import { Navigate, useNavigate } from "react-router";
import { initiateCart } from "../../store/actions/cartAction";
import classes from './AuthForm.module.css';
function AuthForm(props) {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isLoading,setIsLoading] =useState(false);
 
    const navigate=useNavigate();
    const dispatch=useDispatch();
    
  // const state = useSelector(state => state)
  // const dispatch=useDispatch();
  const changeLoggedStatusHandler = () => {
    setIsSignIn((prevState) => !prevState);
  };
  
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
 
  
  const formSubmitHandler = () => {
    // const dispatch=useDispatch();
    // dispatch(initiateProducts())
    let currentName;
    const currentEmail= emailRef.current.value;
    const currentPass= passRef.current.value;
    
    setIsLoading(true)
    props.show("Loading...","pending");
    let url=null;
    if (isSignIn){
        url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA0Y2pLVV2VbisAjK53JRiQ74z_qWaC_Vs";
    }
      else{

        currentName= nameRef.current.value;
        url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA0Y2pLVV2VbisAjK53JRiQ74z_qWaC_Vs';
      }
        fetch(url,
        {
            method:"POST",
            body:JSON.stringify({
                email:currentEmail,
                password:currentPass,
                returnSecureToken:true
            }),
            headers:{
                "Content-Type": "application/json",
            }
        }).then(res=>{
            setIsLoading(false)
            if (res.ok){
                return res.json()
            }else{
                return res.json().then(data=>{
                    
                    throw new Error(data.error.message)
                    
                })
            }
            
        }).then(data=>{
            
            console.log(data);
            props.show("Success!!",'complete');
            console.log(data);
            if (isSignIn){
              const newTime=new Date(new Date().getTime()+(+data.expiresIn)*1000);
              // const expTime
              dispatch(loginHandler({userToken:data.idToken,userEmail:data.email,expTime:newTime.toISOString()}));
      
              navigate('/products');
            }
            
            
            
        }).catch(err=>{
          // "Authentication Failed!! Please check Email & Password"
          console.log("[authform]",err.message);
            props.show(err.message,'error')
        })
      };
      
    // console.log(currentNameRef, currentEmailRef,currentPassRef);
    // if (localStorage.getItem('user'))
    
    
  
  return (
    <Card className={classes.AuthForm}>
      <h3>{isSignIn ? "SignIn" : "SignUp"}</h3>
      {!isSignIn && 
      <Input 
      label="Name" 
      type="text"
      ref={nameRef} 

      />}
      <Input 
      label="Email" 
      ref={emailRef} 
      type="email"

      />
      <Input 
      label="Password" 
      ref={passRef} 
        type="password"
      />
      <Button
        btnName={isLoading?"Loading...":!isSignIn ? "signup" : "signin"}
        onclick={formSubmitHandler}
      />
      <p>
      {!isSignIn ? "Already a User!! " : "Don't have an account? "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={changeLoggedStatusHandler}
        >
          {!isSignIn ? "signin" : "signup"}
        </span>
      </p>
    </Card>
  );
}

export default AuthForm;
