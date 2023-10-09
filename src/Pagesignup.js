import React, { useState } from 'react';
import { auth } from './firebase'; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import './Pagesignup.css';

function Pagesignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(' ');
  const [confirmPassword, setConfirmPassword] = useState('');

  
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if(password!==confirmPassword){
     setConfirmPassword("Error");
     alert("Password may not matched");
     return;
    }
    
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up successfully!');
      return navigate("/login");
    
      
    } catch (error) {
      console.error('Signup Error:', error.message);
    }
  };

  return (
    
      <form className='Pagesign_up' >
      <label className='Header'>Name </label>
          <input type="text" />
        <label className='Header'>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
       
        <label className='Header'> Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <label className='Header'> Confirm-Password: </label>
          <input type="password" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} />
        
        <button className='switch' type="submit" onClick={handleSignup}>Sign in</button>
       
      </form>
   
  );
}

export default Pagesignup;