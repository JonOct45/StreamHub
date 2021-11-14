import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Form from 'react-bootstrap/Form';
import UserCard from '../components/UserCard';
import UserChat from '../components/UserChat';
import VideoList from '../components/VideoList';

import userlist from '../database/friendlist';

export default function StreamingPage() {
	const [chat, setChat] = useState('');
	const [chatHistory, setChatHistory] = useState([]);
	const { id } = useParams('id');
	const chatRef = useRef();

	useEffect(() => {
		setChatHistory([
			{
				name: localStorage.getItem('username') || 'visitor456',
				chat: 'Join the room',
			},
		]);
	}, [id]);

	useEffect(() => {
		chatRef.current.scrollTop = chatRef.current.scrollHeight; // bottom chat show first
	}, [chatHistory]);

	const handleKeyPress = e => {
		if (e.key === 'Enter') {
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
					<Card className="streaming-userlist">
						<ListGroup variant="flush">
							<ListGroup.Item>
								<NavLink to="/subscription">
									<UserCard
										pic={
											localStorage.getItem('imgUrl') ||
											'https://source.unsplash.com/user/erondu/daily'
										}
										name={localStorage.getItem('username') || 'visitor456'}
										state="active"
									/>
								</NavLink>
							</ListGroup.Item>
							{userlist.map(user => {
								return (
									<ListGroup.Item key={user.id}>
										<NavLink to={'/user/' + user.id}>
											<UserCard
												pic={'https://source.unsplash.com/random/' + user.id}
												name={user.firstName}
												state={user.state === 0 ? 'idle' : 'active'}
											/>
										</NavLink>
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
						frameBorder="0"
						allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					></iframe>
					<Card className="streaming-chat">
						<div ref={chatRef} className="streaming-chat-top">
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
										pic={
											localStorage.getItem('imgUrl') ||
											'https://source.unsplash.com/user/erondu/daily'
										}
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
			<VideoList title="Recommended" />
		</>
	);
}
