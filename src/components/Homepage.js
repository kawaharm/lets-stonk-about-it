// Imports
import React from 'react';
import { Button, Container, Row, Col, Image, Form } from 'react-bootstrap'


function Homepage() {
    return (
        <div className="homepage">
            {/* <img className="homepage-image" src="./stonks_image.jpeg" alt="stonks meme image" /> */}
            <div className="homeTitle text-dark bg-light">
                <p>Let's <span>Stonk</span></p>
                <p className="homeSubTitle text-dark">About It</p>
            </div>
        </div >
    )
}

export default Homepage;