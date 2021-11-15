import React, { useState } from 'react';
import { useHistory } from 'react-router';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

export default function SignUpPage() {
	const [email, setEmail] = useState('');
	const [fullName, setFullName] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});
	const history = useHistory();

	const processSubmit = e => {
		e.preventDefault();
		// console.log('submit');
		// console.log({ email, password });
		if (!email) {
			handleError('email');
			return;
		}
		if (!password) {
			handleError('password');
			return;
		}
		console.log({ email, fullName, username, password });

		const userid = Math.floor(Math.random() * 100000);
		localStorage.setItem('userid', userid);
		localStorage.setItem('email', email);
		localStorage.setItem('fullName', fullName);
		localStorage.setItem('username', username);
		localStorage.setItem('password', password);

		let fetchedAuthData = JSON.parse(localStorage.getItem('authData'));
		if (!fetchedAuthData) fetchedAuthData = { userlist: [] };
		const data = {
			userid: userid,
			email: email,
			fullName: fullName,
			username: username,
			password: password,
		};
		fetchedAuthData.userlist.push(data);
		localStorage.setItem('authData', JSON.stringify(fetchedAuthData));
		history.push('/login');
	};

	const handleError = target => {
		const updatedErrors = {};
		updatedErrors[target] = true;
		setErrors(updatedErrors);
	};

	return (
		<Container className="auth-form">
			<h2 className="mb-5">Sign Up</h2>
			<Form>
				<Form.Group className="mb-3" controlId="signupEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
						isInvalid={errors.email}
					/>
					<Form.Control.Feedback type="invalid">
						Please enter your email
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className="mb-3" controlId="signupFullName">
					<Form.Label>Full Name</Form.Label>
					<Form.Control
						placeholder="Enter your full name"
						value={fullName}
						onChange={e => setFullName(e.target.value)}
						required
						isInvalid={errors.fullName}
					/>
					<Form.Control.Feedback type="invalid">
						Please enter your full name
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className="mb-3" controlId="signupUsername">
					<Form.Label>Username</Form.Label>
					<Form.Control
						placeholder="Enter your username"
						value={username}
						onChange={e => setUsername(e.target.value)}
						required
						isInvalid={errors.username}
					/>
					<Form.Control.Feedback type="invalid">
						Please enter your username
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className="mb-3" controlId="loginPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Enter your password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
						isInvalid={errors.password}
					/>
					<Form.Control.Feedback type="invalid">
						Please enter your password
					</Form.Control.Feedback>
				</Form.Group>
				<div className="mb-5">
					<Form.Check className="d-inline" style={{ marginRight: '1rem' }} />
					<span>
						I agree to the{' '}
						<a href="https://www.privacypolicies.com/live/47bead3e-7005-4cdb-9ae6-a158a9011fa0">
							terms & conditions
						</a>
					</span>
				</div>
			</Form>
			<Button variant="primary" className="w-100" onClick={processSubmit}>
				Sign Up
			</Button>
		</Container>
	);
}
