import React, { useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import friendlist from '../database/friendlist';

export default function UserList({ title }) {
	const [forceUpdate, setForceUpdate] = useState(0);

	const handleSubscribe = (target, id) => {
		console.log('Subscribe');
		let subscriptionlist = localStorage.getItem(target);
		if (subscriptionlist) {
			subscriptionlist += id + ',';
		} else {
			subscriptionlist = id + ',';
		}
		localStorage.setItem(target, subscriptionlist);
		setForceUpdate(forceUpdate + 1);
	};

	const handleUnSubscribe = (target, id) => {
		let subscriptionlist = localStorage.getItem(target);
		if (subscriptionlist) {
			console.log(subscriptionlist);
			subscriptionlist = subscriptionlist.replace(id + ',', '');
		}
		localStorage.setItem(target, subscriptionlist);
		setForceUpdate(forceUpdate + 1);
	};

	let subscriptionlist = localStorage.getItem('subscriptionlist') || '';
	return (
		<Container>
			<h2 className="mt-3">{title}</h2>
			<CardGroup className="userlist mt-3">
				{friendlist.slice(0, 5).map(user => {
					return (
						<Card key={user.id}>
							<NavLink to={'/user/' + user.id}>
								<p>{user.firstName + ' ' + user.lastName}</p>
								<Card.Img
									variant="top"
									src={'https://source.unsplash.com/random/' + user.id}
								/>
							</NavLink>
							<div></div>
							{subscriptionlist.search(user.id) === -1 ? (
								<Button
									size="sm"
									onClick={() => handleSubscribe('subscriptionlist', user.id)}
								>
									Subscribe
								</Button>
							) : (
								<Button
									size="sm"
									variant="secondary"
									onClick={() => handleUnSubscribe('subscriptionlist', user.id)}
								>
									Subscribed
								</Button>
							)}
						</Card>
					);
				})}
			</CardGroup>
		</Container>
	);
}
