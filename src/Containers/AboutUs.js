import React, { useState } from "react";
import "../App.css";
import { Card, Alert, Container, Row, Col } from 'react-bootstrap';
//import SearchBar from '../Components/searchbar';
import ReactCardFlip from 'react-card-flip'


export default function About() {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }
    return (

        <div className="About-us">
            <Container>
                <Alert onClick={handleClick}>About Us</Alert>
                <br></br>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <Row>
                    <Col sm>
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                            <div className="location-front-item PeopleCards">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top"  src="https://www.emojirequest.com/images/DaydreamingEmoji.jpg" />
                                    <Card.Body>
                                        <Card.Title>Arjun Dhaliwal</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros augue, porta eu dapibus nec, rutrum quis arcu.
                                        </Card.Text>
                                        {/* <Button variant="primary" onClick={handleClick}>Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                                {/* This is the front of the card. */}
                                {/* <button onClick={handleClick}>Click to flip</button> */}
                            </div>

                            <div className="location-front-item PeopleCards">
                                <Card style={{ width: '18rem' }} className="PeopleCards">
                                    <Card.Img variant="top" src="https://cdn.wallpapersafari.com/88/70/FbCzOJ.jpg" />
                                    <Card.Body>
                                        <Card.Title>Github: arjundha</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros augue, porta eu dapibus nec, rutrum quis arcu.
                                        </Card.Text>
                                        {/* <Button variant="primary" onClick={handleClick}>Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                                {/* This is the front of the card. */}
                                {/* <button onClick={handleClick}>Click to flip</button> */}
                            </div>
                        </ReactCardFlip>
                    </Col>

                    <Col sm>
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                            <div className="location-front-item PeopleCards">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://www.emojirequest.com/images/DabEmoji.jpg" />
                                    <Card.Body>
                                        <Card.Title>Clara Kim</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros augue, porta eu dapibus nec, rutrum quis arcu.
                                        </Card.Text>
                                        {/* <Button variant="primary" onClick={handleClick}>Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                                {/* This is the front of the card. */}
                                {/* <button onClick={handleClick}>Click to flip</button> */}
                            </div>

                            <div className="location-front-item PeopleCards">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhf4EFtQBRgcm7niDymvLCHh2zs-xQd0-zew&usqp=CAU" />
                                    <Card.Body>
                                        <Card.Title>Github: clarakmj</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros augue, porta eu dapibus nec, rutrum quis arcu.
                                        </Card.Text>
                                        {/* <Button variant="primary" onClick={handleClick}>Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                                {/* This is the front of the card. */}
                                {/* <button onClick={handleClick}>Click to flip</button> */}
                            </div>
                        </ReactCardFlip>
                    </Col>

                </Row>
                <span></span>
                <br></br>

                <Row>
                    <Col sm>
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                            <div className="location-front-item PeopleCards">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtpwJJ66V-sBa2k4k1K_h5AcSoK7Q9u8iIRA&usqp=CAU" />
                                    <Card.Body>
                                        <Card.Title>Robert Newman</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros augue, porta eu dapibus nec, rutrum quis arcu.
                                        </Card.Text>
                                        {/* <Button variant="primary" onClick={handleClick}>Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                                {/* This is the front of the card. */}
                                {/* <button onClick={handleClick}>Click to flip</button> */}
                            </div>

                            <div className="location-front-item PeopleCards">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://i1.sndcdn.com/avatars-000381011432-5z4zr0-t500x500.jpg" />
                                    <Card.Body>
                                        <Card.Title>Github: rnewman97</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros augue, porta eu dapibus nec, rutrum quis arcu.
                                        </Card.Text>
                                        {/* <Button variant="primary" onClick={handleClick}>Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                                {/* This is the front of the card. */}
                                {/* <button onClick={handleClick}>Click to flip</button> */}
                            </div>
                        </ReactCardFlip>
                    </Col>

                    <Col sm>
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                            <div className="location-front-item PeopleCards">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://i.pinimg.com/564x/2f/59/59/2f595908ca50b7b82aaaed41a8ce8d81.jpg" />
                                    <Card.Body>
                                        <Card.Title>Kyla Purcell</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros augue, porta eu dapibus nec, rutrum quis arcu.
                                        </Card.Text>
                                        {/* <Button variant="primary" onClick={handleClick}>Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                                {/* This is the front of the card. */}
                                {/* <button onClick={handleClick}>Click to flip</button> */}
                            </div>

                            <div className="location-front-item PeopleCards">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://i.pinimg.com/originals/e8/ff/ba/e8ffba5fe162030291bc5adeae43b929.jpg" />
                                    <Card.Body>
                                        <Card.Title>Github: kylapurcell</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros augue, porta eu dapibus nec, rutrum quis arcu.
                                        </Card.Text>
                                        {/* <Button variant="primary" onClick={handleClick}>Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                                {/* This is the front of the card. */}
                                {/* <button onClick={handleClick}>Click to flip</button> */}
                            </div>
                        </ReactCardFlip>
                    </Col>

                </Row>
                <br></br>

            </Container>

        </div>

    );
}