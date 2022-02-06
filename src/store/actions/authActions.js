export const LOG_IN="LOG_IN";
export const LOG_OUT="LOG_OUT";


// export 
const remainingTimeCalc= (expTime) =>{
    const currTime=new Date().getTime();
    console.log("[authReducer]",expTime,currTime);
    return expTime-currTime;
    
}

export const login=(userData)=>{
    return {type:LOG_IN,userData:userData}
}
export const logoutHandler= ()=>{
    return {type:LOG_OUT}
}

export const loginHandler=(userData)=>{
    return (dispatch)=>{
        const timeOut=remainingTimeCalc(userData.expTime);
            console.log("[authReducer]",timeOut);
            localStorage.setItem('timeout',timeOut);
            setTimeout(() => {
                dispatch(logoutHandler());
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                localStorage.removeItem('timeout');
                
            }, timeOut);
        dispatch(login(userData))
    }
}
