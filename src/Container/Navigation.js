import React from 'react'
import { Link } from 'react-router-dom'
import {Nav,Navbar,NavLink} from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar collapseOn expand="sm"bg="dark"variant="dark">
     <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll"/>
    <Navbar.Collapse id="navbarScroll">
      <Nav>
        <NavLink eventkey="1"as={Link} to="/">Signup</NavLink>
        <NavLink eventkey="2"as={Link} to="/Login">Login</NavLink>
        <NavLink eventkey="3"as={Link} to="/Logout">Logout</NavLink>
        <NavLink eventkey="4"as={Link} to="/Products">Products</NavLink>
        <NavLink eventkey="5"as={Link} to="/Navigation">Navigation</NavLink>
        <NavLink eventkey="6"as={Link} to="/Registration">Registration</NavLink>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
    
  )
}
