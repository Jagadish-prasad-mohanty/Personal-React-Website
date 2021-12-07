import {LOG_IN,LOG_OUT} from '../actions/authActions';
import {useState} from 'react';

const initialState={
    token:null,
    isLoggedIn:false,
}

const authReducer= (state=initialState,action)=>{
//     const userLoggedIn=!!state.token;
    switch(action.type){
        case LOG_IN:
            const newToken=action.token
            return {
                ...state,
                token:newToken,
                isLoggedIn:true
            }
        case LOG_OUT:
            return {
                ...state,
                token:null,
                isLoggedIn:false
            }
        default:
            return state

    }
}

export default authReducer