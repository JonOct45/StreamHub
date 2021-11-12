import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { NavLink } from 'react-router-dom';

export default function SubscriptionPage() {
    return (
        <div>
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card>
                        <Card.Header><center><b>Raymond Huang</b></center></Card.Header>
                        <Card.Img variant="top" src="images/avatar.png" />
                        <Card.Footer>
                            <div class="row">
                                <div class="col-6">
                                    <small className="text-muted"><center><b>Subscribed</b></center></small>  
                                </div>
                                <div class="col-6">
                                    <small className="text-muted"><center><b>+ Friends</b></center></small>
                                </div>
                            </div>  
                        </Card.Footer>
                    </Card>
                </Card>
            </Container>

            <Container>
                <div class="wrap">
                    <div class="descriptionWrap">
                        <Card.Body>
                            <Card.Title><b>About Me:</b></Card.Title>
                            <Card.Text>
                                Hello, I love watching horror movies. If you love to watch horror movies as well,
                                please do subscribe because I tend to stream movies in that category every Friday
                                and Saturday.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title><b>Follow My Social Media:</b></Card.Title>
                            <Card.Text>
                                ✤ Instagram <br></br>
                                ✤ Discord <br></br>
                                ✤ TikTok <br></br>
                                ✤ Youtube <br></br>
                                ✤ Twitter
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Text>
                                <div class="boldText">
                                    Number of Subscribers: 2,054
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </div>
                </div>
            </Container>

            <div class="scroller">
                <Container>
                    <h2 className="mt-3 "><center>Featured/Videos</center></h2>
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
                                    <Card.Text><center>John Wick: Chapter 3</center></Card.Text>
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
                                    <Card.Text><center>Skiptrace</center></Card.Text>
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
                                    <Card.Text><center>The Magic of Belle Isle</center></Card.Text>
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
                                    <Card.Text><center>Benched</center></Card.Text>
                                </Card.Body>
                            </NavLink>
                        </Card>
                    </CardGroup>
                </Container>

                <Container>
                    <h2 className="mt-3 "><center>Recommended/Users</center></h2>
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
                                    <Card.Text><center>John Wick: Chapter 3</center></Card.Text>
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
                                    <Card.Text><center>Skiptrace</center></Card.Text>
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
                                    <Card.Text><center>The Magic of Belle Isle</center></Card.Text>
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
                                    <Card.Text><center>Benched</center></Card.Text>
                                </Card.Body>
                            </NavLink>
                        </Card>
                    </CardGroup>
                </Container>
                
                <Container>
                    <h2 className="mt-3 "><center>More Videos</center></h2>
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
                                    <Card.Text><center>John Wick: Chapter 3</center></Card.Text>
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
                                    <Card.Text><center>Skiptrace</center></Card.Text>
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
                                    <Card.Text><center>The Magic of Belle Isle</center></Card.Text>
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
                                    <Card.Text><center>Benched</center></Card.Text>
                                </Card.Body>
                            </NavLink>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </div>
    )
}
