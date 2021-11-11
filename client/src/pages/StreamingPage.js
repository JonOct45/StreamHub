import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Form from 'react-bootstrap/Form';

import UserCard from '../components/UserCard';
import UserChat from '../components/UserChat';

export default function StreamingPage() {
	const [chat, setChat] = useState('');
	const [chatHistory, setChatHistory] = useState([]);
	const handleKeyPress = e => {
		if (e.key === 'Enter') {
			console.log('Enter was pressed');
			processInput();
		}
	};

	const processInput = () => {
		const updatedChatHistory = [...chatHistory];
		updatedChatHistory.push({
			name: localStorage.getItem('username'),
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
							<ListGroup.Item>
								<UserCard />
							</ListGroup.Item>
							<ListGroup.Item>
								<UserCard />
							</ListGroup.Item>
							<ListGroup.Item>
								<UserCard />
							</ListGroup.Item>
							<ListGroup.Item></ListGroup.Item>
						</ListGroup>
					</Card>
					<iframe
						width="1067"
						height="600"
						src="https://www.youtube.com/embed/R9DWTt37khU"
						title="YouTube video player"
						frameborder="10"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
					<Card className="streaming-chat">
						<div className="streaming-chat-top">
							<div className="streaming-chat-wrap">
								<UserChat name="Jack" text="Hi!" />
							</div>
							<div className="streaming-chat-wrap">
								<UserChat
									name="Jack"
									text="Hiddddddd dsfs sdf sdsdf sfd sdf sdf!"
								/>
							</div>
							{chatHistory.map(data => (
								<div className="streaming-chat-wrap">
									<UserChat name={data.name} text={data.chat} />
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
					{/* </div> */}
					{/* <h2 className="mt-3">recommended</h2>
				<div className="recommended mt-3">
					<iframe
						width="200"
						height="200"
						src="https://www.youtube.com/embed/8S3ir5vqFx8"
						title="YouTube video player"
						frameborder="10"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div> */}
					{/* </div> */}
				</div>
			</Container>
			<Container>
				<h2 className="mt-3">recommended</h2>
				<div className="recommended mt-3">
					<iframe
						width="200"
						height="200"
						src="https://www.youtube.com/embed/8S3ir5vqFx8"
						title="YouTube video player"
						frameborder="10"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			</Container>
		</>
	);
}
