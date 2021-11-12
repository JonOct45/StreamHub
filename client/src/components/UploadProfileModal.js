import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function UploadProfileModal({ children, show, onClose }) {
	const [imgUrl, setImgUrl] = useState('');
	const [error, setError] = useState(false);

	const handleClose = () => {
		setImgUrl('');
		setError(false);
		onClose('');
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!imgUrl) {
			setError(true);
			return;
		}
		localStorage.setItem('imgUrl', imgUrl);
		handleClose();
	};

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Upload Profile Picture</Modal.Title>
				</Modal.Header>
				{children}
				<Modal.Body>
					{imgUrl && (
						<>
							<p>Preview</p>
							<img
								className="upload-modal-profile-pic"
								src={imgUrl}
								alt="Load failed: Please upload a new one"
							/>
						</>
					)}
					<Form>
						<Form.Group className="mb-3" controlId="imgUrl">
							<Form.Label>Image URL</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter the Image URL"
								value={imgUrl}
								onChange={e => setImgUrl(e.target.value)}
								required
								isInvalid={error}
							/>
							<Form.Control.Feedback type="invalid">
								Please enter an Image URL
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
