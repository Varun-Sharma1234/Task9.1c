import React, { useState } from 'react';
import './Pagenav.css'
import { Link } from 'react-router-dom';
function Pagenav(){
return(
        <>
        
        <div className='Header'>
        <div className='Text'>

        <h2>Dev@Deakin</h2>
        
        <input className='Input' type='text' placeholder='Search' />
       

        <button className='Button'>Post</button>
       <Link to='/login'>
       <button className='Button' >Login</button>
       </Link>
       </div>                                                                                                                                                    
        </div>
        
        <div>
       <Link to='/signup'>
       <button className='Button' >Sign-in</button>
       </Link>
        </div>
        <div>
       <Link to='/signout'>
       <button className='Button' >SignOut</button>
       </Link>
        </div>
      
        
        </>
    )
}
export default Pagenav;