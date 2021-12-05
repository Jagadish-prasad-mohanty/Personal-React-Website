export const LOG_IN="LOG_IN";
export const LOG_OUT="LOG_OUT";

export const loginHandler=(token)=>{
    return {type:LOG_IN,token:token}
}
export const logoutHandler= ()=>{
    return {type:LOG_OUT}
}