// Imports
import React from 'react';
import { Button, Container, Row, Col, Image, Form } from 'react-bootstrap'


function About() {
    return (
        <div className="about bg-dark">
            <img className="about-image" src="./stonks_image.jpeg" alt="stonks meme image" />
            <div className="text-dark bg-light aboutDescription">
                <p>
                    On January 26, 2021, Elon Musk tweeted "Gamestonk!!" in reference to the "wallstreetbets"
                    Reddit page that was behind the unprecedented rise of Gamestop's stock price against the
                    attempt of opposing short-sellers. This caused shares to go as high as 157% the following
                    day (<a href="https://markets.businessinsider.com/news/stocks/gamestop-stock-price-elon-musk-gamestonk-tweet-extends-trading-rally-2021-1-1030009065">Reference</a>).
                    In awe by how this one tweet shook the trading landscape, I was interested to see if there
                    was a correlation between the Twitterverse's opinions on a company and its stock performance.
                </p>
            </div>
        </div >
    )
}

export default About;