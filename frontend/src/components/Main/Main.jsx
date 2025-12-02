import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'

import Home from './Home/Home'
import TshirtDetail from './TshirtDetail/TshirtDetail'

const Main = () => {
  return <main>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/detail'element={<TshirtDetail/>}/>
    </Routes>
  </main>;
};

export default Main;
