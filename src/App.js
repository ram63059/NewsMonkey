import './App.css';

import React, { useState } from 'react'
import News from './News';
import Navbar from './Navbar';
import LoadingBar from 'react-top-loading-bar'


import {BrowserRouter as Router,Route,Routes,BrowserRouter,} from "react-router-dom";

const App  =()=> {
  const [progress, setProgress] = useState(0)

  
  
    return (
      <div>
    <Router> 
        <Navbar/>
        <LoadingBar
          color='#f11946'
          progress={progress}
         />
        
         <Routes>
          <Route path="/" element={ <News setProgress={setProgress}pageSize={5} country="in" category="general"/>} />
        
          <Route path="/business" element={ <News setProgress={setProgress} key="business"  pageSize={5} country="in" category="business"/>} />
          <Route path="/entertainment" element={  <News setProgress={setProgress} key=" entertainment" pageSize={5} country="in" category="entertainment"/> }/>
          <Route path="/general" element={  <News setProgress={setProgress}key=" general"  pageSize={5} country="in" category="general"/> }/>
          <Route path="/health" element={  <News setProgress={setProgress} key="health" pageSize={5} country="in" category="health"/> }/>
          <Route path="/science" element={  <News setProgress={setProgress} key=" science" pageSize={5} country="in" category="science"/> }/>
          <Route path="/sports" element={  <News setProgress={setProgress} key="sports" pageSize={5} country="in" category="sports"/> }/>
          <Route path="/technology" element={  <News setProgress={setProgress}key="technology "  pageSize={5} country="in" category="technology"/> }/>
        </Routes>
        </Router>
      </div>
    )
  }


export default App;