// Imports
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col, Image, Form } from 'react-bootstrap'


function Homepage() {
    return (
        <div className="homepage">
            <div className="homeTitle text-dark bg-light">
                <p>Let's <span>Stonk</span></p>
                <p className="homeSubTitle text-dark">About It</p>
            </div>
            <div className="homeTweet text-dark bg-light">
                <ProfilePic />
                <div className="content">
                    <NameAndHandle />
                    <Message />
                </div>
            </div>

            <div class="tweetBox text-dark bg-light">
                <form>
                    <div class="tweetContent">
                        <img
                            src="./stonks_image.jpeg"
                            alt="profile pic"
                        />
                        <p>
                            Ever thought about how posting messages on social media can impact the stock market?
                            #Let's_Stonk_About_It is a web-based platform that examines the emotional elements
                            of company-related tweets and compares it with its stock price in real-time.
                        </p>
                    </div>
                    <Link to="/GME">
                        <button class="tweetButton">Tweet</button>

                    </Link>
                </form>
            </div>
        </div >
    )
}

function ProfilePic() {
    return (
        <img
            src="./stonks_image.jpeg"
            className="avatar"
            alt="profile picture"
        />
    )
}

function NameAndHandle() {
    return (
        <span className="nameAndHandle">
            <strong className="name">Masaru</strong>
            <span className="handle">@handle</span>
        </span>
    )
}

function Message() {
    return (
        <div className="message">
            Ever thought about how posting messages on social media can impact the stock market?
            Let's Stonk About It is a web-based platform that examines the emotional elements
            of company-related tweets and compares it with its stock price in real-time.
        </div>
    )
}

export default Homepage;