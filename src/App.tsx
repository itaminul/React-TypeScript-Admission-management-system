import { useState } from 'react'
import './App.css'
import Login from './components/layout/Login'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import AdminDashbord from './components/layout/AdminDashboard';
import NoMatch from './components/layout/NoMatch';
import {useSelector} from 'react-redux';
import { RootState } from './redux/store';

function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticate);
  return (
    <>
    {isAuthenticated ? (
       <Login />
    ) : (     
    <Routes>
       <Route path="*" element={<NoMatch />} />
    {/* <Route path="/" element={<Layout />}> */}
      <Route path="/dashboard" element={<AdminDashbord />} />
      {/* <Route path="*" element={<NoMatch />} /> */}
    {/* </Route> */}
    </Routes>
    )}
     
    </>
  )
}

export default App
