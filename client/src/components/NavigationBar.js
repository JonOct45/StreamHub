import React, { useState, useContext, useEffect } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';

export default function NavigationBar({ isAuth, handleLogout }) {
	const [showDropdown, setShowDropdown] = useState(false);
	return (
		<Navbar
			className="navbar-container mb-5"
			collapseOnSelect
			expand="lg"
			bg="dark"
			variant="dark"
		>
			<Container>
				<Navbar.Brand as="div">
					<NavLink className="navigation-item" to="/">
						STREAMHUB
					</NavLink>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<div style={{ flex: '1' }} />
					<Nav style={{ alignItems: 'baseline' }}>
						{!isAuth ? (
							<>
								<Nav.Link as="div">
									<NavLink to="/login">Log in</NavLink>
								</Nav.Link>
								<Nav.Link as="div">
									<NavLink to="/signup">Sign up</NavLink>
								</Nav.Link>
							</>
						) : (
							<>
								<Nav.Link as="div">
									<NavLink to="/streaming">Live Streming</NavLink>
								</Nav.Link>
								<NavDropdown
									className="navbar-dropdown"
									title={localStorage.getItem('username')}
									id="navbar-dropdown"
								>
									<NavDropdown.Item as="div">
										<NavLink to="/profile/settings">Profile Settings</NavLink>
									</NavDropdown.Item>
									<NavDropdown.Item as="div">
										<NavLink to="/subscription">My subscription</NavLink>
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item
										as="div"
										style={{ cursor: 'pointer', color: 'red' }}
										onClick={handleLogout}
									>
										<span>Sign out</span>
									</NavDropdown.Item>
								</NavDropdown>
								{/* <Nav.Link as="div">
									<span style={{ cursor: 'pointer' }} onClick={handleLogout}>
										Log out
									</span>
								</Nav.Link> */}
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
