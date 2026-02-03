import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div id='home-container'>
        <nav>
            <ol>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li >
                    <Link to="/addproduct">Add Products</Link>
                </li>
                <li>
                    <Link to="/viewproducts">View Projects</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ol>
        </nav>
    </div>
  )
}
