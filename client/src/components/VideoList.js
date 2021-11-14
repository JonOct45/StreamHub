import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';

export default function VideoList({ title }) {
	return (
		<Container>
			<h2 className="mt-3">{title}</h2>
			<CardGroup className="videolist mt-3">
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
	);
}
