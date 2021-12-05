import React from 'react';
import AuthFrom from '../components/Auth/AuthFrom';
// import Auth from '../components/Auth/AuthFrom';

function AuthPage(props) {
    return (
        <AuthFrom show={props.show}/>
    )
}

export default AuthPage
