// Imports
import React from 'react';
import { Button, Container, Row, Col, Image, Form } from 'react-bootstrap'


function Homepage() {
    return (
        <div className="homepage">
            <div className="homeTitle text-dark bg-light">
                <p>Let's <span>Stonk</span></p>
                <p className="homeSubTitle text-dark">About It</p>
            </div>
            <div className="text-dark bg-light howTitle">How It Works:
                <p>Hover over each </p>
            </div>
            <Container className="mt-5 container" fluid="xl">
                <Row className=" bg-border-color">
                    <Col className="p-5 border border-2 border-white" style={{ backgroundColor: "#5D6D7E" }}>
                        <h1 className="text-white">STOCK NAME</h1>
                        <h2 className="text-white">TICKER</h2>
                        <Row>
                            <Col className="m-3 p-3 border border-primary border-1 border-dark rounded" style={{ backgroundColor: "#4D5656" }}>
                                <Form>
                                    <Form.Label className="mb-2 text-white" >Date Range: </Form.Label>
                                    <Form.Control
                                        className="border border-dark rounded"
                                        as="select"
                                        value="Choose: "
                                    >
                                        <option>Choose</option>
                                        <option value="1-day">1 Day</option>
                                        <option value="5-day">5 Days</option>
                                        <option value="1-month">1 Month</option>
                                    </Form.Control>
                                    <div className="text-center">
                                        <Button className="m-2 bg-success" type="button">SUBMIT</Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                        <Row className="stockDet">
                            <Col className="m-3 p-3 border border-primary border-1 border-dark rounded"
                                style={{ backgroundColor: "#4D5656" }}>
                                <div className="mb-2 text-center text-white">Closing Price</div>
                                <div className="p-2 border border-primary border-3 border-dark text-center bg-white"
                                    style={{ fontSize: "20px" }}>"---"</div>
                            </Col>
                            <Col className="m-3 p-3 border border-primary border-1 border-dark rounded"
                                style={{ backgroundColor: "#4D5656" }}>
                                <div className="mb-2 text-center text-white">Range Low</div>
                                <div className="p-2 border border-primary border-3 border-dark text-center bg-white"
                                    style={{ fontSize: "20px" }}>"---"</div>
                            </Col>
                            <Col className="m-3 p-3 border border-primary border-1 border-dark rounded"
                                style={{ backgroundColor: "#4D5656" }}>
                                <div className="mb-2 text-center text-white">Range High</div>
                                <div className="p-2 border border-primary border-3 border-dark text-center bg-white"
                                    style={{ fontSize: "20px" }}>"---"</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="border border-2 border-black pb-3" style={{ backgroundColor: "#38b262" }}>
                        <h1 className="mt-5 mb-3 text-center graphTitle text-white">Average Sentiment Score for Tweets</h1>
                        <Image src="#" />
                    </Col>
                </Row >
            </Container >
        </div >
    )
}

export default Homepage;