import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div class="container">
        <h1>Login</h1>
        <form method="post" action="">
            <input type="email" id="email" name="email" required placeholder="Email"/>
            <input type="password" id="password" name="password" required placeholder="Password"/>
            <input type="submit" value="Login"/>
            <a href="../AdminDashboard.js">Admin</a>
            <input type="submit" value="Emplooye"/>
        </form>
    </div>
  )
}
