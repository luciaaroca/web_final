import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'

import Home from './Home/Home'
import TshirtDetail from './TshirtDetail/TshirtDetail'
import LigasContainer from './LigasContainer/LigasContainer'
import RetroContainer from "./RetroContainer/RetroContainer"
import EspecialContainer from "./EspecialContainer/EspecialContainer"
import LogIn from './LogIn/LogIn'
import SignUp from './SignUp/SignUp'
import Profile from './Profile/Profile'

const Main = () => {
  return <main>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/detail/:id'element={<TshirtDetail/>}/>
      <Route path='/ligas'element={<LigasContainer/>}/>
      <Route path='/retro'element={<RetroContainer/>}/>
      <Route path='/especiales'element={<EspecialContainer/>}/>
      <Route path='/login'element={<LogIn/>}/>
      <Route path='/signup'element={<SignUp/>}/>
      <Route path='/profile'element={<Profile/>}/>
    </Routes>
  </main>;
};

export default Main;
