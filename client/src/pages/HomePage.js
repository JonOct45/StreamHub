import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
	return (
		<div>
			<div className="container-fluid">
				<div style={{ width: '1920px' }} className="row">
					<div className="col-1"></div>
					<div className="col-3">
						<NavLink to="/streaming/gUTtJjV852c">
							<img className="doraMovie" src="/images/movie1.jpg" alt="Dora"></img>
							<div className="movie1">Dora Explorer</div>
							<img
								className="playButton1"
								src="/images/PlayButton.png"
								alt="button1"
							></img>
						</NavLink>
					</div>
					<div className="col-3">
						<NavLink to="/streaming/8YjFbMbfXaQ">
							<img
								className="shangChiMovie"
								src="/images/shangchi.jpg"
								alt="ShangChi"
							></img>
							<div className="movie2">Shang Chi</div>
							<img
								className="playButton2"
								src="/images/PlayButton.png"
								alt="button2"
							></img>
						</NavLink>
					</div>
					<div className="col-3">
						<NavLink to="/streaming/oqxAJKy0ii4">
							<img
								className="squidGame"
								src="/images/squidgame.jpg"
								alt="SquidGame"
							></img>
							<div className="movie2">Squid Game</div>
							<img
								className="playButton3"
								src="/images/PlayButton.png"
								alt="button3"
							></img>
						</NavLink>
					</div>
					<div className="col-1">
						<img
							className="rightClick"
							src="/images/rightArrow.jpg"
							alt="right arrow"
						></img>
						<img
							className="leftClick"
							src="/images/leftArrow.jpg"
							alt="left arrow"
						></img>
					</div>
				</div>
			</div>
			<div className="Box">
				<div className="title">Most Watched Movies</div>
				<NavLink to="/streaming/oqxAJKy0ii4">
					<div className="carouselMiddle">
						<img
							className="squidGame"
							src="/images/squidgame.jpg"
							alt="SquidGame"
						></img>
					</div>
				</NavLink>
				<div className="carouselRight1">
					<img
						className="spiderman"
						src="/images/spiderman.jpg"
						alt="Spiderman"
					></img>
				</div>
				<div className="carouselRight2">
					<img
						className="jungleCruise"
						src="/images/junglecruise.jpg"
						alt="Jungle Cruise"
					></img>
				</div>
				<div className="carouselLeft1">
					<img
						className="blackWidow"
						src="/images/blackwidow.jpg"
						alt="Black Widow"
					></img>
				</div>
				<div className="carouselLeft2">
					<img className="wendyWu" src="/images/wendywu.png" alt="Wendy Wu"></img>
				</div>
				<img
					className="rightClick1"
					src="/images/rightArrow.jpg"
					alt="right arrow"
				></img>
				<img
					className="leftClick1"
					src="/images/leftArrow.jpg"
					alt="left arrow"
				></img>
			</div>
		</div>
	);
}
