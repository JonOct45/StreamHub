import React, { useState } from 'react';
import { useHistory } from 'react-router';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/esm/Container';

export default function LoginPage({ handleLogin }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});
	const [showError, setShowError] = useState(false);
	const history = useHistory();

	const processSubmit = e => {
		e.preventDefault();
		if (!email) {
			handleError('email');
			return;
		}
		if (!password) {
			handleError('password');
			return;
		}
		if (!handleLogin({ email, password })) {
			console.log('Login failed');
			setShowError(true);
		} else {
			setShowError(false);
			history.push('/');
		}
	};

	const handleError = target => {
		const updatedErrors = {};
		updatedErrors[target] = true;
		setErrors(updatedErrors);
	};

	return (
		<Container className="auth-form">
			<h2 className="mb-5">Login</h2>
			{showError && (
				<Alert variant="danger" onClose={() => setShowError(false)} dismissible>
					<Alert.Heading>Login Failed:</Alert.Heading>
					<p>Incorrect username or password.</p>
				</Alert>
			)}
			<Form>
				<Form.Group className="mb-3" controlId="loginEmail">
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
						Please enter an email
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className="mb-5" controlId="loginPassword">
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
						Please enter a password
					</Form.Control.Feedback>
				</Form.Group>
			</Form>
			<Button variant="primary" className="w-100" onClick={processSubmit}>
				Log In
			</Button>
		</Container>
	);
}
