import React from 'react';
import { Switch } from 'react-router';

export default function UserCard({ pic, name, state }) {
	let color = 'grey';
	switch (state) {
		case 'active':
			color = 'green';
			break;
		case 'idle':
			color = 'yellow';
			break;
		default:
			color = 'green';
	}
	return (
		<div className="user-card">
			<img src={pic} alt="profile pic" />
			<div style={{ backgroundColor: color }}></div>
			<span>{name}</span>
		</div>
	);
}
