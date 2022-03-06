import { useEffect } from "react";
export const LOG_IN="LOG_IN";
export const LOG_OUT="LOG_OUT";

let logoutTimer;

// export 
const remainingTimeCalc= (expTime) =>{
    const currTime=new Date().getTime();
    console.log("[authReducer]",expTime,currTime);
    const adjExpTime=new Date(expTime);

    const remainingTime=adjExpTime-currTime;
    return remainingTime;
    
}



export const login=(userData)=>{
    
    return {type:LOG_IN,userData:userData}
}
export const logoutHandler= ()=>{
    if (logoutTimer){
        clearTimeout(logoutTimer)
    }
    return {type:LOG_OUT}
}

export const loginHandler=(userData)=>{
    return (dispatch)=>{
        const timeOut=remainingTimeCalc(userData.expTime);
            console.log("[authReducer]",timeOut);
            localStorage.setItem('expTime',userData.expTime);
            logoutTimer=setTimeout(() => {
                dispatch(logoutHandler());
            }, timeOut);
        dispatch(login(userData))
    }
}

export const refreshTimeOut= (initialTokenData)=>{
    
    return dispatch=>{
        setTimeout(() => {
            dispatch(logoutHandler);
        }, initialTokenData.remainingTime);
    }
}

