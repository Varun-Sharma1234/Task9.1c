import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import './Pagelogin.css';

function Pagelogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("You have logged in");
      return navigate("/");
    } catch (error) {
      console.log(error);
      setError("Missing fields or invalid email/password");
    }
  };

  return (
    <div>
      <form className='format' onSubmit={handleSubmit}>
      <label className='Labell'>  Email </label>
       
        <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br /> 
        <label className='Labell' >  Password </label>
        <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type='submit' className='Button'>Login</button>
        {error && <p className='error-message'>{error}</p>}
        
      </form>
    </div>

  );
}

export default Pagelogin;