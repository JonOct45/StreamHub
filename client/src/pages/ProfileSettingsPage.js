import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import DangerModal from '../components/DangerModal';
import ChangePasswordModal from '../components/ChangePasswordModal';
import ChangeEmailModal from '../components/ChangeEmailModal';
import UploadProfileModal from '../components/UploadProfileModal';

export default function ProfileSettingsPage() {
	const [showUploadModal, setShowUploadModal] = useState(false);
	const [showChangeEmailModal, setShowChangeEmailModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
	const [edit, setEdit] = useState(false);
	const [newUsername, setNewUserName] = useState(
		localStorage.getItem('username')
	);
	const handleSubmit = e => {
		e.preventDefault();
		if (!newUsername) {
			return;
		}
		const fetchedAuthData = JSON.parse(localStorage.getItem('authData'));
		const userid = localStorage.getItem('userid');
		if (!userid) return;
		for (const userData of fetchedAuthData.userlist) {
			if (+userid === userData['userid']) {
				userData['username'] = newUsername;
				localStorage.setItem('username', newUsername);
				localStorage.setItem('authData', JSON.stringify(fetchedAuthData));
				break;
			}
		}
		setEdit(false);
	};

	return (
		<>
			<UploadProfileModal
				show={showUploadModal}
				onClose={setShowUploadModal}
			></UploadProfileModal>
			<DangerModal show={showDeleteModal} onClose={setShowDeleteModal}>
				Are you sure you want to delete your account? This will permanently
				erase your account.
			</DangerModal>
			<ChangePasswordModal
				show={showChangePasswordModal}
				onClose={setShowChangePasswordModal}
			></ChangePasswordModal>
			<ChangeEmailModal
				show={showChangeEmailModal}
				onClose={setShowChangeEmailModal}
			></ChangeEmailModal>
			<Container className="settings-container">
				<h2>Profile Settings </h2>
				<div className="settings-profile">
					<img
						src={
							localStorage.getItem('imgUrl') ||
							'https://source.unsplash.com/user/erondu/daily'
						}
						alt="User Pic"
					/>
					<div>
						<div className="spacer"></div>
						<Button
							onClick={() => setShowUploadModal(true)}
							variant="secondary"
							size="sm"
						>
							Upload
						</Button>
					</div>
				</div>
				<Card className="mt-5">
					<Card.Header as="h4">Basic Info</Card.Header>
					<Card.Body>
						<Card.Title>Email</Card.Title>
						<Card.Text>{localStorage.getItem('email')}</Card.Text>
						<Card.Title>Full Name</Card.Title>
						<Card.Text>{localStorage.getItem('fullName')}</Card.Text>
						<div className="edit-username">
							<Card.Title>Username</Card.Title>
							{!edit && (
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="pen"
									class="svg-inline--fa fa-pen fa-w-16"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									onClick={() => setEdit(true)}
								>
									<path
										fill="currentColor"
										d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"
									></path>
								</svg>
							)}
						</div>
						{edit ? (
							<>
								<Form>
									<Form.Group className="mb-3" controlId="newEmail">
										<Form.Control
											type="text"
											placeholder="Enter your New Username"
											value={newUsername}
											onChange={e => setNewUserName(e.target.value)}
											required
										/>
									</Form.Group>
								</Form>
								<Button
									style={{ float: 'right' }}
									variant="primary"
									onClick={e => handleSubmit(e)}
								>
									Save
								</Button>
							</>
						) : (
							<Card.Text>{localStorage.getItem('username')}</Card.Text>
						)}
					</Card.Body>
				</Card>
				<Card className="mt-5">
					<Card.Header as="h4">Security</Card.Header>
					<Card.Body className="settings-security">
						<Card.Text onClick={() => setShowChangePasswordModal(true)}>
							Change your password
						</Card.Text>
						<Card.Text onClick={() => setShowChangeEmailModal(true)}>
							Change your email address
						</Card.Text>
						<Card.Text onClick={() => setShowDeleteModal(true)}>
							Delete Account
						</Card.Text>
					</Card.Body>
				</Card>
			</Container>
		</>
	);
}
