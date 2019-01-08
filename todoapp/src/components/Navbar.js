import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper blue darken-3">
        <div className="container">
            <ul className="right">
              <li><Link to="/">Simple todos</Link></li>
              <li><NavLink to="/redux-stored">Stored todos (Redux)</NavLink></li>
            </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;