import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import VideoList from '../components/VideoList';
import UserList from '../components/UserList';

import friendlist from '../database/friendlist';

export default function SubscriptionPage() {
	const [subscribe, setSubscribe] = useState(false);
	const [isFriend, setIsFriend] = useState(false);
	const { id } = useParams('id');

	useLayoutEffect(() => {
		console.log(id);
		const subscriptionlist = localStorage.getItem('subscriptionlist');
		if (subscriptionlist) {
			const array = subscriptionlist.split(',');
			console.log(array);
			for (const uid of array) {
				if (uid === id) {
					setSubscribe(true);
				}
			}
		}
		const friendlist = localStorage.getItem('friendlist');
		if (friendlist) {
			const array = friendlist.split(',');
			console.log(array);
			for (const uid of array) {
				if (uid === id) {
					setIsFriend(true);
				}
			}
		}
	}, [id]);

	const handleSubscribe = target => {
		console.log('Subscribe');
		let subscriptionlist = localStorage.getItem(target);
		if (subscriptionlist) {
			subscriptionlist += id + ',';
		} else {
			subscriptionlist = id + ',';
		}
		localStorage.setItem(target, subscriptionlist);
		if (target === 'subscriptionlist') setSubscribe(true);
		else setIsFriend(true);
	};

	const handleUnSubscribe = target => {
		let subscriptionlist = localStorage.getItem(target);
		if (subscriptionlist) {
			console.log(subscriptionlist);
			subscriptionlist = subscriptionlist.replace(id + ',', '');
		}
		localStorage.setItem(target, subscriptionlist);

		if (target === 'subscriptionlist') setSubscribe(false);
		else setIsFriend(false);
	};

	return (
		<div>
			<Container style={{ marginBottom: '10vh' }}>
				<div className="subscription-top">
					<div>
						<Card className="subscription-profile" style={{ width: '18rem' }}>
							<Card.Header>
								<center>
									<b>
										{id
											? `${friendlist[id - 1].firstName} ${
													friendlist[id - 1].lastName
											  }`
											: localStorage.getItem('username')}
									</b>
								</center>
							</Card.Header>
							<Card.Img
								variant="top"
								src={
									id
										? 'https://source.unsplash.com/random/' + id
										: localStorage.getItem('imgUrl') ||
										  'https://source.unsplash.com/user/erondu/daily'
								}
							/>
						</Card>
						<div>
							{id ? (
								<div className="button-group">
									{/* <div>
												<small className="text-muted">
													<center>
														<b>Subscribed</b>
													</center>
												</small>
                                            </div>
												
											<div>
												<small className="text-muted">
													<center>
														<b>+ Friends</b>
													</center>
												</small>
											</div> */}
									{subscribe ? (
										<Button
											variant="secondary"
											onClick={() => handleUnSubscribe('subscriptionlist')}
											size="sm"
										>
											Subscribed
										</Button>
									) : (
										<Button
											onClick={() => handleSubscribe('subscriptionlist')}
											size="sm"
										>
											Subscribe
										</Button>
									)}
									{isFriend ? (
										<Button
											variant="secondary"
											onClick={() => handleUnSubscribe('friendlist')}
											size="sm"
										>
											Unfriend
										</Button>
									) : (
										<Button
											onClick={() => handleSubscribe('friendlist')}
											size="sm"
										>
											Add Friend
										</Button>
									)}
								</div>
							) : (
								<>
									<span>Subscribers: 2,054</span>
								</>
							)}
						</div>
					</div>
					{/* <div className="wrap">
					<div className="descriptionWrap">
						<Card.Body>
							<Card.Title>
								<b>About Me:</b>
							</Card.Title>
							<Card.Text>
								Hello, I love watching horror movies. If you love to watch
								horror movies as well, please do subscribe because I tend to
								stream movies in that category every Friday and Saturday.
							</Card.Text>
						</Card.Body>
						<Card.Body>
							<Card.Title>
								<b>Follow My Social Media:</b>
							</Card.Title>
							<Card.Text>
								✤ Instagram <br></br>✤ Discord <br></br>✤ TikTok <br></br>✤
								Youtube <br></br>✤ Twitter
							</Card.Text>
						</Card.Body>
						<Card.Body>
							<Card.Text>
								<div className="boldText">Number of Subscribers: 2,054</div>
							</Card.Text>
						</Card.Body>
					</div>
				</div> */}
					<div className="spacer"></div>
					<div className="w-50">
						<div>
							<Card.Body>
								<Card.Title>
									<b>About Me:</b>
								</Card.Title>
								<Card.Text>
									{id
										? friendlist[id - 1].about
										: '	Hello, I love watching horror movies. If you love to watch horror movies as well, please do subscribe because I tend to stream movies in that category every Friday and Saturday.'}
								</Card.Text>
							</Card.Body>
							<Card.Body>
								<Card.Title>
									<b>Follow My Social Media:</b>
								</Card.Title>
								<Card.Text>
									✤ Instagram <br></br>✤ Discord <br></br>✤ TikTok <br></br>✤
									Youtube <br></br>✤ Twitter
								</Card.Text>
							</Card.Body>
						</div>
					</div>
				</div>
			</Container>
			{/* 
			<Container>
				<div className="wrap">
					<div className="descriptionWrap">
						<Card.Body>
							<Card.Title>
								<b>About Me:</b>
							</Card.Title>
							<Card.Text>
								Hello, I love watching horror movies. If you love to watch
								horror movies as well, please do subscribe because I tend to
								stream movies in that category every Friday and Saturday.
							</Card.Text>
						</Card.Body>
						<Card.Body>
							<Card.Title>
								<b>Follow My Social Media:</b>
							</Card.Title>
							<Card.Text>
								✤ Instagram <br></br>✤ Discord <br></br>✤ TikTok <br></br>✤
								Youtube <br></br>✤ Twitter
							</Card.Text>
						</Card.Body>
						<Card.Body>
							<Card.Text>
								<div className="boldText">Number of Subscribers: 2,054</div>
							</Card.Text>
						</Card.Body>
					</div>
				</div>
			</Container> */}
			<UserList title="Recommended/Users" />
			<VideoList title="Featured/Videos" />
			<VideoList title="More Videos" />
		</div>
	);
}
