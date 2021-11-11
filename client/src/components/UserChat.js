import React from 'react';

export default function UserChat({ pic, name, text }) {
	return (
		<div className="user-chat">
			<img
				src={pic}
				alt="profile pic"
			/>
			<div>
				<span>{name + ':'}</span>
				<span>{text}</span>
			</div>
		</div>
	);
}
