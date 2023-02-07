import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Home' element = {<Home/>}/>
        <Route path='/*' element = {<Navigate to="/Login"/>} />
    </Routes>
  )
}
