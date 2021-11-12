import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Exclamation from '../assets/icons/exclamation-solid.svg';

export default function DangerModal({ children, show, onClose }) {
	const handleClose = () => onClose('');
	return (
		<Modal className="danger-modal" show={show} onHide={handleClose}>
			<div className="d-flex justify-content-between p-3">
				<div className="danger-icon">
					<img src={Exclamation} alt="Error" />
				</div>
				<button
					type="button"
					className="btn-close"
					aria-label="Close"
					onClick={handleClose}
				/>
			</div>
			<Modal.Body className="d-flex flex-column justify-content-center text-center">
				{children}
			</Modal.Body>
			<Modal.Footer className="d-flex justify-content-center">
				<Button variant="danger" onClick={handleClose}>
					Delete
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
