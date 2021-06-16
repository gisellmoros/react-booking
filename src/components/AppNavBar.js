import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link,NavLink} from 'react-router-dom'

export default function NavBar() {

	return (

		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="/">React-Booking</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav.Link as={NavLink} to="/courses">Courses</Nav.Link>
				<Nav.Link as={NavLink} to="/register">Register</Nav.Link>
				<Nav.Link as={NavLink} to="/login">Login</Nav.Link>
			</Navbar.Collapse>

		</Navbar>

		)

}
