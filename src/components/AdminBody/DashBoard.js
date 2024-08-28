import React from 'react'
import './Admin.css'

export default function DashBoard() {
  return (
    <div className="panel">
            <h2>Dashboard Overview</h2>
            <div className="main-box">
                <div className="box">
                    <div className="panelTitle">
                        Total Employees
                    </div>
                    <div className="count">
                        11
                    </div>
                </div>

                <div className="box">
                    <div className="panelTitle">
                    Employees Present Today
                    </div>
                    <div className="count">
                        9
                    </div>
                </div>

                <div className="box">
                    <div className="panelTitle">
                        Employees Absent Today
                    </div>
                    <div className="count">
                        2
                    </div>
                </div>
            </div>

            <h2>Upcoming Tasks</h2>
            <ul>
                <li>badulla BTC653 2024/12/03</li>
                <li>Kandy KHS 2025/05/04</li>
            </ul>
        
        </div> 
  )
}
