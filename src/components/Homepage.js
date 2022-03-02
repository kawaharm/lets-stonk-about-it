// Imports
import React from 'react';
import { Button, Card, Container, Row, Col, Image, Form } from 'react-bootstrap'


function Homepage() {
    return (
        <div className="homepage">
            <div className="homeTitle text-dark bg-light">
                <p>Let's <span>Stonk</span></p>
                <p className="homeSubTitle text-dark">About It</p>
            </div>
            <div className="homeTweet text-dark bg-light">
                <Avatar />
                Tweet
            </div>
        </div >
    )
}

function Avatar() {
    return (
        <img
            src="./stonks_image.jpeg"
            className="avatar"
            alt="avatar"
        />
    )
}

export default Homepage;