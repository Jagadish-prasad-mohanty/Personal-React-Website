import React, { useEffect, useState } from 'react';
import Input from '../UI/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card/Card';
import classes from './OrderAddress.module.css'
import Button from '../UI/Button/Button';
import { changeAddress, defaultAddress } from '../../store/actions/cartAction';

function OrderAddress(props) {
    // const user= useSelector(state=>state.auth);
    const dispatch=useDispatch();
    const userAddress= useSelector(state=>state.cart.userAddress);
    console.log("[OrderAddress.js]",userAddress);
    const [name,setName]=useState(userAddress?userAddress.name:"");
    const [email,setEmail]=useState(localStorage.getItem('user'));
    const [phone,setPhone]=useState(userAddress?userAddress.phone:"");
    const [pin,setPin]=useState(userAddress?userAddress.pin:"");
    const [address,setAddress]=useState(userAddress?userAddress.address:"");
    const currentUser=localStorage.getItem('user').split(".")[0];
    const onChangeHandler= (e,field)=>{
        console.log(field);
        switch (field){
            case 'Name':
                setName(e.target.value);
                break;
            case 'Email':
                setEmail(e.target.value);
                break;
            case 'Phone':
                setPhone(e.target.value);
                break;
            case 'PIN':
                setPin(e.target.value);
                break;
            case 'Address':
                setAddress(e.target.value);
                break;



        }
    }
    useEffect(()=>{
        setName(userAddress?userAddress.name:"");
        setAddress(userAddress?userAddress.address:"");
        setEmail(localStorage.getItem('user'));
        setPhone(userAddress?userAddress.phone:"");
        setPin(userAddress?userAddress.pin:"");
    },[userAddress])
    const saveAddressDataHandler = ()=>{
        
        fetch(`https://reactpersonalproject-default-rtdb.firebaseio.com/cart/${currentUser}/address.json`,{
                    method:'PUT',
                    body:JSON.stringify({
                            name,email,phone,pin,address
                        }
                    ),
                    headers:{
                        'Content-Type':'application/json'
                    }
                }).then(response=>response.json()).then(resData=>{
                    console.log("[OrderAddress.js -> addressData]",resData);
                }).catch(error=>{

                });
        dispatch(changeAddress({
            name,email,phone,pin,address
        }))
    }

    useEffect(()=>{
        dispatch(defaultAddress());
    },[]);
    return (
        <Card className={classes.OrderAddress}>
            <h2>Please add Your Address</h2>
            <Input label="Name" placeholder="Your Name" type="text" value={name} onChange={(e)=>onChangeHandler(e,'Name')}/>
            <Input label="Email" placeholder="Your Email" type="email" value={email} onChange={(e)=>onChangeHandler(e,'Email')}/>
            <Input label="Phone" placeholder="Your Mobile No." type="text" value={phone} onChange={(e)=>onChangeHandler(e,'Phone')}/>
            <Input label="PIN" placeholder="Your PIN" type="number" value={pin} onChange={(e)=>onChangeHandler(e,'PIN')}/>
            <Input label="Address" placeholder="Your Address" type="text"  value={address} onChange={(e)=>onChangeHandler(e,'Address')}/>
            <Button btnName="Save" onclick={saveAddressDataHandler}/>
        </Card>
        
    )
}

export default OrderAddress
