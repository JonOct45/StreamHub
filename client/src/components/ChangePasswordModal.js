import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function ChangePasswordModal({ children, show, onClose }) {
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errors, setErrors] = useState({});

	const handleClose = () => {
		setNewPassword('');
		setConfirmPassword('');
		setErrors({});
		onClose('');
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!newPassword) {
			handleError('newPassword');
			return;
		}
		if (!confirmPassword) {
			handleError('confirmPassword');
			return;
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
					<Modal.Title>Change Password</Modal.Title>
				</Modal.Header>
				{children}
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="newPassword">
							<Form.Label>New Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Enter your New Password"
								value={newPassword}
								onChange={e => setNewPassword(e.target.value)}
								required
								isInvalid={errors.newPassword}
							/>
							<Form.Control.Feedback type="invalid">
								Please enter a New Password
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group className="mb-3" controlId="confirmPassword">
							<Form.Label>Re-enter Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Re-Enter your New Password"
								value={confirmPassword}
								onChange={e => setConfirmPassword(e.target.value)}
								required
								isInvalid={errors.confirmPassword}
							/>
							<Form.Control.Feedback type="invalid">
								Please re-enter your New Password
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
