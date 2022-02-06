
import {LOG_IN,LOG_OUT} from '../actions/authActions';



const initialAuthState={
    userName:null,
    userEmail:null,
    userToken:null,
    isLoggedIn:false,
    expTime:null,
    userAddress:null
}


const authReducer= (state=initialAuthState,action)=>{
//     const userLoggedIn=!!state.token;
    const fetchedUserToken=localStorage.getItem('token');
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