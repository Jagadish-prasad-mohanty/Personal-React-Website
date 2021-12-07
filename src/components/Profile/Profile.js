import React,{useRef,useState} from 'react'
import {useSelector} from 'react-redux';
import classes from './Profile.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
function Profile(props) {
    const email=useSelector(state=>state.userEmail);
    const userToken=useSelector(state=>state.userToken);
     const [isLoading,setIsLoading] =useState(false);
    const newPassRef=useRef();
    const changePassHandler=(e)=>{
      e.preventDefault();
      setIsLoading(true)
      console.log("[Profile]",email,userToken);
      const currentPassValue=newPassRef.current.value;
      fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA0Y2pLVV2VbisAjK53JRiQ74z_qWaC_Vs",
      {
          method: 'POST',
          body:JSON.stringify({
            idToken:userToken,
            password:currentPassValue,
            returnSecureToken:false
           } ),
        headers:{

            'Content-Type': 'application/json',
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
            props.show("Password Change Successfully!!",'complete');

        }).catch(err=>{
          // "Authentication Failed!! Please check Email & Password"
          console.log("[authform]",err.message);
            props.show(err.message,'error')
        })
    }
    return (
        <div className={classes.Profile}>
            <h2>{email}</h2>
            <h2>{userToken}</h2>
            <h3>Want to change Password!!</h3>

            <Input label="New Password" type="password" ref={newPassRef}
            // style={{'display':'flex','flex-flow':'column','align-items':'center','justify-content':'center','gap':'1rem'}}
            />
            <Button btnName="Submit" onclick={changePassHandler}/>

        </div>
    )
}

export default Profile