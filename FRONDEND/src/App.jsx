// App.jsx
import {Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import Header from './Components/Header/Header.jsx';

import Home from './Pages/Home.jsx'; 
import About from './Pages/About.jsx'; 
import ViewProp from './Pages/ViewProp.jsx';
import AddProp from './Pages/AddProp.jsx';
import Contact from './Pages/Contact.jsx';
import './App.css'



const App = () => {
  

  return (
    <div className = "App">
< Header/>
<Routes>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='' element={<Home/>}/>
  <Route path='/View-Properties' element={<ViewProp/>}/>
  <Route path='/Add-Property' element={<AddProp/>}/>

</Routes>

</div>
   
  );
};



  
export default App;