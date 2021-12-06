import React, {  useReducer, useRef, useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";

import {useDispatch, useSelector} from 'react-redux'
import { loginHandler } from "../../store/actions/authActions";
function AuthFrom(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading,setIsLoading] =useState(false);

    const dispatch=useDispatch();
  // const state = useSelector(state => state)
  const changeLoggedStatusHandler = () => {
    setIsLoggedIn((prevState) => !prevState);
  };
  
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const formSubmitHandler = () => {
    let currentName;
    const currentEmail= emailRef.current.value;
    const currentPass= passRef.current.value;
    
    setIsLoading(true)
    props.show("Loading...","pending");
    let url=null;
    if (isLoggedIn){
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
            props.show("Success!!",'complete')
            dispatch(loginHandler(data.idToken));
        }).catch(err=>{
          // "Authentication Failed!! Please check Email & Password"
          console.log("[authform]",err.message);
            props.show(err.message,'error')
        })
      
    // console.log(currentNameRef, currentEmailRef,currentPassRef);
    
  };
  return (
    <Card>
      <h3>{isLoggedIn ? "SignIn" : "SignUp"}</h3>
      {!isLoggedIn && 
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
        btnName={isLoading?"Loading...":!isLoggedIn ? "signup" : "signin"}
        onclick={formSubmitHandler}
      />
      <p>
      {!isLoggedIn ? "Already a User!! " : "Don't have an account? "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={changeLoggedStatusHandler}
        >
          {!isLoggedIn ? "signin" : "signup"}
        </span>
      </p>
    </Card>
  );
}

export default AuthFrom;
