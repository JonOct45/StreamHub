import React, { useState } from 'react';
import { useParams } from 'react-router';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Form from 'react-bootstrap/Form';
import CardGroup from 'react-bootstrap/CardGroup';

import UserCard from '../components/UserCard';
import UserChat from '../components/UserChat';
import { NavLink } from 'react-router-dom';

import userlist from '../database/friendlist';

export default function StreamingPage() {
	const [chat, setChat] = useState('');
	const [chatHistory, setChatHistory] = useState([]);
	const { id } = useParams('id');

	const handleKeyPress = e => {
		if (e.key === 'Enter') {
			console.log('Enter was pressed');
			processInput();
		}
	};

	const processInput = () => {
		const updatedChatHistory = [...chatHistory];
		updatedChatHistory.push({
			name: localStorage.getItem('username') || 'visitor456',
			chat: chat,
		});
		setChat('');
		setChatHistory(updatedChatHistory);
	};
	return (
		<>
			<Container>
				<div className="streaming-container">
					{/* <div> */}
					{/* <div className="d-flex "> */}
					<Card className="streaming-userlist">
						<ListGroup variant="flush">
							{userlist.map(user => {
								const randomPic = 'https://source.unsplash.com/random';
								return (
									<ListGroup.Item key={user.id}>
										<UserCard pic={randomPic} name={user.name} state="active" />
									</ListGroup.Item>
								);
							})}
						</ListGroup>
					</Card>
					<iframe
						width="1067"
						height="600"
						src={'https://www.youtube.com/embed/' + id + '?autoplay=1'}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					></iframe>
					<Card className="streaming-chat">
						<div className="streaming-chat-top">
							<div className="streaming-chat-wrap">
								<UserChat
									pic="https://source.unsplash.com/daily"
									name="Nancy"
									text="Hey hey @Sybilla, @Klara, @Simonne, @Tani"
								/>
							</div>
							<div className="streaming-chat-wrap">
								<UserChat
									pic="https://source.unsplash.com/weakly"
									name="Sybilla"
									text="Hi @Nancy"
								/>
							</div>
							{chatHistory.map((data, index) => (
								<div
									key={data.name + data.chat + index}
									className="streaming-chat-wrap"
								>
									<UserChat
										name={data.name}
										text={data.chat}
										pic="https://source.unsplash.com/user/erondu/daily"
									/>
								</div>
							))}
						</div>
						<FloatingLabel controlId="comments" label="Comments">
							<Form.Control
								as="textarea"
								placeholder="Leave a comment here"
								value={chat}
								style={{ height: '100px' }}
								onKeyPress={e => handleKeyPress(e)}
								onChange={e => setChat(e.target.value)}
							/>
						</FloatingLabel>
					</Card>
				</div>
			</Container>
			<Container>
				<h2 className="mt-3"><center>Recommended</center></h2>
				<CardGroup className="recommended mt-3">
					<Card>
						<NavLink to="/streaming/R9DWTt37khU">
							<Card.Img
								variant="top"
								src="http://i3.ytimg.com/vi/R9DWTt37khU/maxresdefault.jpg"
							/>
							<Card.Body>
								<Card.Text>A Magical First Playthrough of ELDEN RING</Card.Text>
							</Card.Body>
						</NavLink>
					</Card>
					<Card>
						<NavLink to="/streaming/M7XM597XO94">
							<Card.Img
								variant="top"
								src="http://i3.ytimg.com/vi/KlNJeURHIjU/maxresdefault.jpg"
							/>
							<Card.Body>
								<Card.Text>John Wick: Chapter 3</Card.Text>
							</Card.Body>
						</NavLink>
					</Card>
					<Card>
						<NavLink to="/streaming/LBy9FWrFg-0">
							<Card.Img
								variant="top"
								src="http://i3.ytimg.com/vi/LBy9FWrFg-0/maxresdefault.jpg"
							/>
							<Card.Body>
								<Card.Text>Skiptrace</Card.Text>
							</Card.Body>
						</NavLink>
					</Card>
					<Card>
						<NavLink to="/streaming/TlflQmjlRxQ">
							<Card.Img
								variant="top"
								src="http://i3.ytimg.com/vi/TlflQmjlRxQ/maxresdefault.jpg"
							/>
							<Card.Body>
								<Card.Text>The Magic of Belle Isle</Card.Text>
							</Card.Body>
						</NavLink>
					</Card>
					<Card>
						<NavLink to="/streaming/NHN3Lt8sZow">
							<Card.Img
								variant="top"
								src="http://i3.ytimg.com/vi/NHN3Lt8sZow/maxresdefault.jpg"
							/>
							<Card.Body>
								<Card.Text>Benched</Card.Text>
							</Card.Body>
						</NavLink>
					</Card>
				</CardGroup>
			</Container>
		</>
	);
}
