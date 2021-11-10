import React, { useState, useContext, useEffect } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavigationBar() {
	return (
		<Navbar
			className="navbar-container mb-5"
			collapseOnSelect
			expand="lg"
			bg="dark"
			variant="dark"
		>
			<Container>
				<Navbar.Brand>
					<NavLink className="navigation-item" to="/">
						STREAMHUB
					</NavLink>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<div style={{ flex: '1' }} />
					<Nav style={{ alignItems: 'baseline' }}>
						<Nav.Link>
							<NavLink to="/login">Log in</NavLink>
						</Nav.Link>
						<Nav.Link>
							<NavLink to="/signup">Sign up</NavLink>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
