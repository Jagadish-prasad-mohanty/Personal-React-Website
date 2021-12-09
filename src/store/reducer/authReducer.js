import {LOG_IN,LOG_OUT} from '../actions/authActions';
import {useState} from 'react';

const initialState={
    userEmail:null,
    userToken:null,
    isLoggedIn:false,
}

const authReducer= (state=initialState,action)=>{
//     const userLoggedIn=!!state.token;
    
    switch(action.type){
        case LOG_IN:
            const newToken=action.userData.userToken;
            const newUser=action.userData.userName.substr(0,action.userData.userName.length-10);
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
            return {
                ...state,userEmail:null,
                userToken:null,
                isLoggedIn:false
            }
        default:
            return state

    }
}

export default authReducer