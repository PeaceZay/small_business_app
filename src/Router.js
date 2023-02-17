import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Home from './containers/Home'
import Details from './containers/Details'
import Login from './containers/Login'
import Add from './containers/AddListing'


const checkAuth = () => {
  let cookieObj = cookie.parse(document.cookie);
  let cookieBool = cookieObj.loggedIn;
  if(cookieBool === "true"){
    return true;
  } else {
    return false;
  }
}

const ProtectedRoute = (props) => {
  const {component: Component, ...rest} = props;

  return (
    checkAuth() === true ?
    <Component {...rest} /> :
    <Navigate to="/login" />
  )
}

const Router = () => (
  <Routes>
  
    <Route exact path="/" element={<Home />} /> {/* example of a container with redux*/}
    <Route path="/details/:id" element={<Details />} />
    <Route path="/login" element={<Login />} />
    <Route path="/add" element={<ProtectedRoute component={Add}/>} />
    
  </Routes>
)

export default Router