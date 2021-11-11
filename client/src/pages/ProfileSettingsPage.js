import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';

export default function ProfileSettingsPage() {
	return (
		<Container className="settings-container ">
			<h2>Profile Settings </h2>
			<Card className="mt-5">
				<Card.Header as="h4">Basic Info</Card.Header>
				<Card.Body>
					<Card.Title>Email</Card.Title>
					<Card.Text>{localStorage.getItem('email')}</Card.Text>
					<Card.Title>Full Name</Card.Title>
					<Card.Text>{localStorage.getItem('fullName')}</Card.Text>
					<Card.Title>Username</Card.Title>
					<Card.Text>{localStorage.getItem('username')}</Card.Text>
					<Card.Title>Phone Number</Card.Title>
					<Card.Text>(111) 111-1111</Card.Text>
				</Card.Body>
			</Card>
			<Card className="mt-5">
				<Card.Header as="h4">Security</Card.Header>
				<Card.Body>
					<Card.Text>Change your password</Card.Text>
					<Card.Text>Change your email address</Card.Text>
					<Card.Text>Delete Account</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
}
