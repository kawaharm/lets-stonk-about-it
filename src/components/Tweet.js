// Imports
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Row, Col, Image, Form } from 'react-bootstrap'
import Stock from './Stock'


// Use this key to connect to server
const { REACT_APP_SERVER_URL } = process.env;


function Tweet() {
    // Hooks
    const [sentimentScore, setScore] = useState(0);
    const [dateRange, setDateRange] = useState("")
    const [stocks, setStocks] = useState([])
    const { id } = useParams();


    useEffect(() => {
        const currentStock = { id };
        axios.post(`${REACT_APP_SERVER_URL}/tweets/`, currentStock.id)
            .then((response) => {
                setScore(response.data)
            })
            .catch((error) => {
                console.log('ERROR: ', error);
            })
    }, []);

    const handleChange = (e) => {
        console.log('FROM SELECT before setDateRange: ', e.target.value)
        console.log('dateRAnge before setDateRange: ', { dateRange })
        setDateRange(e.target.value)
        console.log('dateRange after setDateRange: ', { dateRange })
    }

    const handleSubmit = () => {
        const date = new Date();
        const today = date.toISOString().split('T')[0];
        const dates = [];

        if (dateRange === "1-day") {
            dates.push(today, today);
        } else if (dateRange === "5-day") {
            let fiveDays = date.setDate(date.getDate() - 5)
            fiveDays = new Date(fiveDays).toISOString().split('T')[0]
            dates.push(fiveDays, today)
        } else if (dateRange === "1-month") {
            let oneMonth = date.setMonth(date.getMonth() - 1)
            oneMonth = new Date(oneMonth).toISOString().split('T')[0]
            dates.push(oneMonth, today)
        }

        const currentStock = { id }
        axios
            .post(`${REACT_APP_SERVER_URL}/stocks/`, {
                ticker: currentStock.id,
                dates: dates
            })
            .then((response) => {
                console.log('RESPONSE FROM POLYGON', response.data);
                setStocks(response.data)
                console.log(stocks.results[0].c)

            })
            .catch((error) => {
                console.log('ERROR: ', error);
            });
    }

    const displayStocks = () => {
        return <Stock
            dayClose={stocks.results[0].c}
            dayLow={stocks.results[0].h}
            dayHigh={stocks.results[0].l}
        />
    }

    return (
        <Container fluid="xl">
            <Row>
                <Col className="p-5" style={{ backgroundColor: "gray" }}>
                    <h1>Gamestop</h1>
                    <h2>$GME</h2>
                    <Row>
                        <Col className="m-3 p-3" style={{ backgroundColor: "pink" }}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Control
                                    as="select"
                                    value={dateRange}
                                    onChange={handleChange}
                                >
                                    <option>Choose</option>
                                    <option value="1-day">1 Day</option>
                                    <option value="5-day">5 Days</option>
                                    <option value="1-month">1 Month</option>
                                </Form.Control>
                                <Button type="button" onClick={handleSubmit}>Submit form</Button>
                            </Form>
                        </Col>
                    </Row>
                    <Stock
                        dayClose={stocks.results[0].c}
                        dayLow={stocks.results[0].h}
                        dayHigh={stocks.results[0].l}
                    />
                </Col>
                <Col style={{ backgroundColor: "green" }}>
                    <h1 className="mt-5 mb-3 text-center graphTitle">Average Sentiment Score for Tweets</h1>
                    <Image src={sentimentScore} />
                </Col>
            </Row >
        </Container >
    );
}

export default Tweet;