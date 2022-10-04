import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/AboutPage">About</Link>
      <Link to="/plantform">Plant Request Page</Link>
    </nav>
  )
}

export default NavBar