import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function ChangeEmailModal({ children, show, onClose }) {
	const [newEmail, setNewEmail] = useState('');
	const [errors, setErrors] = useState({});

	const handleClose = () => {
		setNewEmail('');
		setErrors({});
		onClose('');
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!newEmail) {
			handleError('newEmail');
			return;
		}
		const fetchedAuthData = JSON.parse(localStorage.getItem('authData'));
		const userid = localStorage.getItem('userid');
		if (!userid) return;
		for (const userData of fetchedAuthData.userlist) {
			if (+userid === userData['userid']) {
				userData['email'] = newEmail;
				localStorage.setItem('email', newEmail);
				localStorage.setItem('authData', JSON.stringify(fetchedAuthData));
				break;
			}
		}
		handleClose();
	};

	const handleError = target => {
		const updatedErrors = {};
		updatedErrors[target] = true;
		setErrors(updatedErrors);
	};

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Change Email</Modal.Title>
				</Modal.Header>
				{children}
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="newEmail">
							<Form.Label>New Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter your New Email"
								value={newEmail}
								onChange={e => setNewEmail(e.target.value)}
								required
								isInvalid={errors.newEmail}
							/>
							<Form.Control.Feedback type="invalid">
								Please enter a New Email
							</Form.Control.Feedback>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={e => handleSubmit(e)}>
						Confirm
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
