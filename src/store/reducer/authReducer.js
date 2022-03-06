
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {LOG_IN,LOG_OUT} from '../actions/authActions';



const initialAuthState={
    userName:null,
    userEmail:null,
    userToken:null,
    isLoggedIn:false,
    expTime:null,
    userAddress:null
}
const remainingTimeCalc= (expTime) =>{
    const currTime=new Date().getTime();
    console.log("[authReducer]",expTime,currTime);
    const adjExpTime=new Date(expTime);

    const remainingTime=adjExpTime-currTime;
    return remainingTime;
    
}
const retrivedStoredToken= ()=>{
    const storedToken= localStorage.getItem('token');
    const expTime= localStorage.getItem('expTime');

    const remainingTime=remainingTimeCalc(expTime)
    if (remainingTime<=30000){
        localStorage.removeItem('token');
        localStorage.removeItem('expTime');
        return null;
    }

    return {
        token:storedToken,
        remainingTime
    }
}


const authReducer= (state=initialAuthState,action)=>{
//     const userLoggedIn=!!state.token;\
    let fetchedUserToken=null;
    let initialTokenData=retrivedStoredToken();

    if (initialTokenData){

        fetchedUserToken=initialTokenData.token;
        
    }
    const fetchedUserName=localStorage.getItem('user');
    // if (fetchedUserToken){
    // dispatch(loginHandler({'userToken':fetchedUserToken,'userName':fetchedUserName}))
    // }
    
    // const updatedState={...state,
    //     userEmail:fetchedUserName,
    //     userToken:fetchedUserToken
    // };
    // state={...updatedState};
    
    switch(action.type){
        case LOG_IN:
            const newToken=action.userData.userToken;
            const newUser=action.userData.userEmail;
            localStorage.setItem('token',newToken);
            localStorage.setItem('user',newUser);
            
            return {
                ...state,
                userEmail:newUser,
                userToken:newToken,
                isLoggedIn:true
            }
        case LOG_OUT:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('timeout');
            return {
                ...state,userEmail:null,
                userToken:null,
                isLoggedIn:false
            }
        
        default:
            if (fetchedUserToken){
                return {
                    ...state,
                    userToken:fetchedUserToken,
                    userName:fetchedUserName,
                    isLoggedIn:true
                }
            }
            return state

    }
}


export default authReducer