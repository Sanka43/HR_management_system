import React from 'react';
import './SideBar.css';


const SideBar = () => {
    return (
        <div className="sidebar">
            <ul>
                <div className="list"><a href="../AdminDashboard.js">Dashboard</a></div>
                <div className="list"><a href="../ManageEmployees.js">Manage Employees</a></div>
                <div className="list"><a href="../ManageSalaries.js">Manage Salaries</a></div>
                <div className="list"><a href="../AddNewTask.js">Add new task</a></div>
            </ul>
        </div>
    );
};

export default SideBar;
