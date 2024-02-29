import { useState } from 'react'
import './App.css'
import Login from './components/layout/Login'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import AdminDashbord from './components/layout/AdminDashboard';
import NoMatch from './components/layout/NoMatch';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login />
    <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path="/dashboard" element={<AdminDashbord />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        {/* </Route> */}
      </Routes>
    </>
  )
}

export default App
