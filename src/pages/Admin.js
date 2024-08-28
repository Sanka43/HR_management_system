import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import DashBoard from '../components/AdminBody/DashBoard';
import ManageEmployees from '../components/AdminBody/ManageEmployees';
import ManageSalaries from '../components/AdminBody/ManageSalaries';
import AddNewTask from '../components/AdminBody/AddNewTask';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../components/AdminBody/Admin.css'

export default function Admin() {
  return (
    <div className='body'>
        <NavBar/>
        <SideBar/>
        <Router>
            <div>
              <Routes>
                <Route exact path="/" element={<DashBoard />} />
                <Route path="/AdminDashboard.js" element={<DashBoard />} />
                <Route path="/ManageEmployees.js" element={<ManageEmployees />} />
                <Route path="/ManageSalaries.js" element={<ManageSalaries />} />
                <Route path="/AddNewTask.js" element={<AddNewTask />} />
              </Routes>
            </div>
          </Router>
        
    </div>
  )
}
