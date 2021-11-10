import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/esm/Container';

export default function SignUpPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});
	return (
		<Container className="auth-form">
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
				<Form.Group className="mb-4" controlId="loginPassword">
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
			<Button variant="primary" className='w-100'>
				Sign Up
			</Button>
		</Container>
	);
}
