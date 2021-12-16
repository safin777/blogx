import React from 'react';
import {Route,Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import Contact from './Component/Contact';
import Policy from './Component/Policy';
import Error from './Component/Error';

const App=()=>{
  return(
    <>
      <Routes>
        <Route exact path="/" element={<Home/>}/> 
        <Route path="/about" element={<About/>}/> 
        <Route path="/service" element={<Service/>}/> 
        <Route path="/contact" element={<Contact/>}/> 
        <Route path="/policy" element={<Policy/>}/> 
        <Route path ="*" element={<Error/>}/> 
      </Routes>
    </>
  )
}

export default App;