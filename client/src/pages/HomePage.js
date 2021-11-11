import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
	return (
		<div>
			<div class="container-fluid">
				<div class="row">
					<div class="col-1"></div>
					<div class="col-3">
						<NavLink to="/streaming/gUTtJjV852c">
							<img class="doraMovie" src="/images/movie1.jpg" alt="Dora"></img>
							<div class="movie1">Dora Explorer</div>
							<img
								class="playButton1"
								src="/images/PlayButton.png"
								alt="button1"
							></img>
						</NavLink>
					</div>
					<div class="col-3">
						<NavLink to="/streaming/8YjFbMbfXaQ">
							<img
								class="shangChiMovie"
								src="/images/shangchi.jpg"
								alt="ShangChi"
							></img>
							<div class="movie2">Shang Chi</div>
							<img
								class="playButton2"
								src="/images/PlayButton.png"
								alt="button2"
							></img>
						</NavLink>
					</div>

					<div class="col-3">
						<NavLink to="/streaming/oqxAJKy0ii4">
							<img
								class="squidGame"
								src="/images/squidgame.jpg"
								alt="SquidGame"
							></img>
							<div class="movie2">Squid Game</div>
							<img
								class="playButton3"
								src="/images/PlayButton.png"
								alt="button3"
							></img>
						</NavLink>
					</div>
					<div class="col-1">
						<img
							class="rightClick"
							src="/images/rightArrow.jpg"
							alt="right arrow"
						></img>
						<img
							class="leftClick"
							src="/images/leftArrow.jpg"
							alt="left arrow"
						></img>
					</div>
				</div>
			</div>

			<div class="Box">
				<div class="title">Most Watched Movies</div>
				<NavLink to="/streaming/oqxAJKy0ii4">
					<div class="carouselMiddle">
						<img
							class="squidGame"
							src="/images/squidgame.jpg"
							alt="SquidGame"
						></img>
					</div>
				</NavLink>
				<div class="carouselRight1">
					<img
						class="spiderman"
						src="/images/spiderman.jpg"
						alt="Spiderman"
					></img>
				</div>
				<div class="carouselRight2">
					<img
						class="jungleCruise"
						src="/images/junglecruise.jpg"
						alt="Jungle Cruise"
					></img>
				</div>
				<div class="carouselLeft1">
					<img
						class="blackWidow"
						src="/images/blackwidow.jpg"
						alt="Black Widow"
					></img>
				</div>
				<div class="carouselLeft2">
					<img class="wendyWu" src="/images/wendywu.png" alt="Wendy Wu"></img>
				</div>
				<img
					class="rightClick1"
					src="/images/rightArrow.jpg"
					alt="right arrow"
				></img>
				<img
					class="leftClick1"
					src="/images/leftArrow.jpg"
					alt="left arrow"
				></img>
			</div>
		</div>
	);
}
