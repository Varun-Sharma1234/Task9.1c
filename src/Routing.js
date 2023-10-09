import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Pagenav from './Pagenav'; 
import Home from './Home';
import Pagelogin from './Pagelogin';
import Pagesignup from './Pagesignup';
import { auth } from './firebase';
import Signout from './Signout';
import Out from './Out';


function Routing() {
  

  return (
    <>
      <Pagenav />
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Pagelogin />}/>
          <Route path="/signup" element={<Pagesignup />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/out" element={<Out/>} />
        </Routes>
      </div>
    </>
  );
}

export default Routing;