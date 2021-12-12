import React,{useRef,useState} from 'react'
import {useSelector} from 'react-redux';
import classes from './Profile.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router';
function Profile(props) {
    const navigate=useNavigate();
    const email=useSelector(state=>state.auth.userEmail);
    const userToken=useSelector(state=>state.auth.userToken);
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
            navigate('/')

        }).catch(err=>{
          // "Authentication Failed!! Please check Email & Password"
          console.log("[authform]",err.message);
            props.show(err.message,'error')
        })
    }
    return (
        <div className={classes.Profile}>
        <p>Welcome <span >{email}</span></p>
        <Card>

            
            <h3 style={{'marginBottom':'1rem'}}>Want to change Password!!</h3>

            <Input label="New Password" type="password" ref={newPassRef}
            // style={{'display':'flex','flex-flow':'column','align-items':'center','justify-content':'center','gap':'1rem'}}
            />
            <Button btnName="Submit" onclick={changePassHandler}/>
        </Card>

       </div>
    )
}

export default Profile
