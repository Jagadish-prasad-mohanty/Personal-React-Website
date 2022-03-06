import React from 'react';
import { useState } from 'react';
import Card from '../Card/Card';
import './ProfilePhotoUploader.css';

const ImgUpload =({
    onChange,
    src
  })=>
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload" >
        <img for="photo-upload" src={src}/>
      </div>
      <input id="photo-upload" type="file" onChange={onChange}/> 
    </label>
  
  
  const Name =({
    onChange,
    value
  })=>
    <div className="field">
      <label htmlFor="name">
        name:
      </label>
      <input 
        id="name" 
        type="text" 
        onChange={onChange} 
        maxlength="25" 
        value={value} 
        placeholder="Alexa" 
        required/>
    </div>
  
    
  const Status =({
    onChange,
    value
  })=>
    <div className="field">
      <label htmlFor="status">
        status:
      </label>
      <input 
        id="status" 
        type="text" 
        onChange={onChange} 
        maxLength="35" 
        value={value} 
        placeholder="It's a nice day!" 
        required/>
    </div>
  
  
  const Profile =({
    onSubmit,
    src,
    name,
    status,
  })=>
    <div className="card">
      <form onSubmit={onSubmit}>
        <h1>Profile Card</h1>
        <label className="custom-file-upload fas">
          <div className="img-wrap" >
            <img for="photo-upload" src={src}/>
          </div>
        </label>
        <div className="name">{name}</div>
        <div className="status">{status}</div>
        <button type="submit" className="edit">Edit Profile </button>
      </form>
    </div>
       
        
  const Edit =({
    onSubmit,
    children,
  })=>
    <div >
      <form onSubmit={onSubmit}>
        <h1>Profile Card</h1>
          {children}
        <button type="submit" className="save">Save </button>
      </form>
    </div>
  
  const CardProfile =()=> {
    const [state,setState] = useState({
      file: '',
      imagePreviewUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQ1SuaK0ifmCxLCyduc6euptjNN7FQS-61w&usqp=CAU',
      name:'',
      status:'',
      active: 'edit'
    })
    
    const photoUpload = e =>{
      e.preventDefault();
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onloadend = () => {
        setState({
            ...state,
          file: file,
          imagePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(file);
    }
    const editName = e =>{
      const name = e.target.value;
      setState({
          ...state,
        name,
      });
    }
    
    const editStatus = e => {
      const status = e.target.value;
      setState({
          ...state,
        status,
      });
    }
    
    const handleSubmit= e =>{
      e.preventDefault();
      let activeP = state.active === 'edit' ? 'profile' : 'edit';
      setState({
          ...state,
        active: activeP,
      })
    }
    
    
      const {imagePreviewUrl, 
             name, 
             status, 
             active} = state;
      return (
        <Card className='card'>
          {(active === 'edit')?(
            <Edit onSubmit={handleSubmit}>
              <ImgUpload onChange={photoUpload} src={imagePreviewUrl}/>
              <Name onChange={editName} value={name}/>
              <Status onChange={editStatus} value={status}/>
            </Edit>
          ):(
            <Profile 
              onSubmit={handleSubmit} 
              src={imagePreviewUrl} 
              name={name} 
              status={status}/>)}
          
        </Card>
      )
    
  }


  export default CardProfile;