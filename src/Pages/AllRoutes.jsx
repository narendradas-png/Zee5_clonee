import React from 'react'
import {Routes, Route} from "react-router-dom"
import Homepage from './Homepage'
import Login from './Login'
import Movies from './Movies'
import Music from './Music'
import Payment from './Payment'
import PremiumPlan from './PremiumPlan'
import Register from './Register'
import {useState, useEffect, useContext} from 'react'
import { AuthContext } from "../Context/AuthContext/AuthContext";
import {  AuthSuccess } from "../Context/AuthContext/Action";
import Protected from './Protected'

export default function AllRoutes({isLogedin, setIsLogedin}) {
  const { dispatch } = useContext(AuthContext);
  return (
    <Routes>
        <Route path="/" element={<Protected isLogedin ={isLogedin} Component = {<Homepage isLogedin={isLogedin} />}/>}></Route>
        <Route path="/login" element={<Login isLogedin={isLogedin} setIsLogedin={setIsLogedin} />}></Route>
        <Route path="/music" element={<Protected isLogedin = {isLogedin} Component = {<Music/>}/>}></Route>
        <Route path="/movies" element={<Protected isLogedin = { isLogedin} Component = {<Movies />}/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/premiumplan" element={<Protected isLogedin = {isLogedin} Component = {<PremiumPlan />}/>}></Route>
        <Route path="/payment" element={<Protected isLogedin = {isLogedin} Component = {<Payment />}/>}></Route>
    </Routes>
  )
}
