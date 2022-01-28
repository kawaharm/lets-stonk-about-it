// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Alert, Container, Row, Col, Stack } from 'react-bootstrap'


// Use this key to connect to server
const { REACT_APP_SERVER_URL } = process.env;


function Stock(props) {
    // Hooks
    const [stocks, setStocks] = useState("Stonk");

    useEffect(() => {
        axios.get(`${REACT_APP_SERVER_URL}/stocks/stocks/`)
            .then((response) => {
                console.log(response.data)
                setStocks(response.data)
            })
            .catch((error) => {
                console.log('ERROR: ', error);
            })
    }, []);

    return (
        <Container fluid="xl">
            <Stack>
                <div className="bg-light border">First item</div>
                <div className="bg-light border">Second item</div>
                <div className="bg-light border">Third item</div>
            </Stack>

            <Row>

                <Col className="p-5" style={{ backgroundColor: "gray" }}>
                    <h1>Gamestop</h1>
                    <h2>$GME</h2>
                    <Row>
                        <Col className="m-3 p-3" style={{ backgroundColor: "pink" }}>
                            <div className="mb-2 text-center">Closing</div>
                            <div className="p-2 border border-primary text-center">99.25</div>
                        </Col>
                        <Col className="m-3 p-3" style={{ backgroundColor: "pink" }}>
                            <div className="mb-2 text-center">Sentiment Score</div>
                            <div className="p-2 border border-primary text-center"></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="m-3" style={{ backgroundColor: "pink" }}>Day Low</Col>
                        <Col className="m-3" style={{ backgroundColor: "pink" }}>Day High</Col>
                    </Row>
                </Col>

                <Col style={{ backgroundColor: "green" }}>Tweets</Col>


            </Row>
        </Container >
    );
}

export default Stock;