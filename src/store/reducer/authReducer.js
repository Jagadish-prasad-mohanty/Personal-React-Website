
import {LOG_IN,LOG_OUT} from '../actions/authActions';



const initialAuthState={
    userEmail:null,
    userToken:null,
    isLoggedIn:false,
    expTime:null
}



const remainingTimeCalc= (expTime) =>{
    const currTime=new Date().getTime();
    console.log("[authReducer]",expTime,currTime);
    return expTime-currTime;
    
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
            const newUser=action.userData.userName.substr(0,action.userData.userName.length-10);
            localStorage.setItem('token',newToken);
            localStorage.setItem('user',newUser);
            const timeOut=remainingTimeCalc(action.userData.expTime);
            console.log("[authReducer]",timeOut);
            localStorage.setItem('timeout',timeOut);
            // setTimeout(() => {
            //     localStorage.removeItem('token');
            //     localStorage.removeItem('user');
                
            // }, timeOut);
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