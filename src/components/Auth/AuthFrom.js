import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Input from '../UI/Input/Input';
function AuthFrom() {
    return (
        <Card>
        <h3>SignUp</h3>
        <Input label="Name"/>
        <Input label="Email"/>
        <Input label="Password"/>
        <Button btnName="signup"/>
        <p >Don't have an account? <NavLink style={{color:'blue'}} to="#" >signin</NavLink></p>
        </Card>
            
    )
}

export default AuthFrom
