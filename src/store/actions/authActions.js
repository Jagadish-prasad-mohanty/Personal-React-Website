export const LOG_IN="LOG_IN";
export const LOG_OUT="LOG_OUT";


// export 

export const loginHandler=(userData)=>{
    return {type:LOG_IN,userData:userData}
}
export const logoutHandler= ()=>{
    return {type:LOG_OUT}
}
