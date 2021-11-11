import React from 'react';

export default function UserChat({ name, text }) {
	const date = new Date();
	return (
		<div className="user-chat">
			<img
				src="https://img.thriftbooks.com/api/images/i/s/45E001D8D3B1D7C6DBACC9900E145C41F009A910.jpg"
				alt="123"
			/>
			<div>
				<span>{name + ':'}</span>
				<span>{text}</span>
			</div>
		</div>
	);
}
