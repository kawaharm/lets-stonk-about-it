// Imports
import React, { useState, useEffect, useReducer } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Button, Container, Row, Col, Image, Form } from 'react-bootstrap'
import axios from 'axios';
import Stock from './Stock'


// Use this key to connect to server
const { REACT_APP_SERVER_URL } = process.env;


function Tweet(props) {
    // Hooks
    const [sentimentScore, setScore] = useState(0);
    const [dateRange, setDateRange] = useState("1-day")
    const [stocks, setStocks] = useState({})
    const { id } = useParams();
    let location = useLocation();
    let { stockName, ticker } = location.state;

    let stocky = {};

    const fetchStocks = async () => {
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

        console.log('DATES', dates)
        const currentStock = { id }
        await axios
            .post(`${REACT_APP_SERVER_URL}/stocks/`, {
                ticker: currentStock.id,
                dates: dates
            })
            .then((response) => {
                let res = response.data;
                console.log('RESPONSE DATA: ', res)
                // console.log('before setStocks: ', stocks);
                // setStocks(res);
                stocky = res;
                console.log("STOCKY, ", stocky);    // remove later eoifjuioasdlhjf;asdhfo;uiasdhf
                // console.log('after setStocks: ', stocks);
            })
            .catch((error) => {
                console.log('ERROR: ', error);
            });
    }

    useEffect(() => {
        console.log(location)
        // const currentStock = { id };
        // axios.post(`${REACT_APP_SERVER_URL}/tweets/`, currentStock.id)
        //     .then((response) => {
        //         console.log('RESPONSE DATA: ', response.data)
        //         setScore(response.data)
        //     })
        //     .catch((error) => {
        //         console.log('ERROR: ', error);
        //     })

        fetchStocks();
    }, [{ id }]);

    const handleChange = (e) => {
        e.preventDefault();
        setDateRange(e.target.value)
        console.log("Set Date Range", dateRange);   // Remove AFTER TESTING )()*()()*)*)*)*)*)*
    }

    const handleSubmit = () => {
        console.log('before setStocks: ', stocks);
        console.log('stocky inside handleSubmit: ', stocky);
        setStocks(stocky);
        console.log('after setStocks: ', stocks);
    }

    return (
        <div className="bg-dark">
            <Container className="mt-5 container" fluid="xl">
                <Row className=" bg-border-color">
                    <Col className="p-5 border border-2 border-white" style={{ backgroundColor: "#5D6D7E" }}>
                        <h1 className="text-white">{stockName}</h1>
                        <h2 className="text-white">${ticker}</h2>
                        <Row>
                            <Col className="m-3 p-3 border border-primary border-1 border-dark rounded" style={{ backgroundColor: "#4D5656" }}>
                                <Form>
                                    <Form.Label className="mb-2 text-white" >Date Range: </Form.Label>
                                    <Form.Control
                                        className="border border-dark rounded"
                                        as="select"
                                        value={dateRange}
                                        onChange={handleChange}
                                    >
                                        <option>Choose</option>
                                        <option value="1-day">1 Day</option>
                                        <option value="5-day">5 Days</option>
                                        <option value="1-month">1 Month</option>
                                    </Form.Control>
                                    <div className="text-center">
                                        <Button className="m-2 bg-success" type="button" onClick={handleSubmit}>SUBMIT</Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>

                        {
                            (Object.keys(stocks).length == 0 | stocks.resultsCount == 0)
                                ?
                                <Stock
                                    dayClose={"--"}
                                    dayLow={"--"}
                                    dayHigh={"--"}
                                />
                                :
                                // console.log("STOCKS INSIDE RETURN", stocks)
                                <Stock
                                    dayClose={stocks.results[0].c}
                                    dayLow={stocks.results[0].l}
                                    dayHigh={stocks.results[0].h}
                                />
                        }

                    </Col>
                    <Col className="border border-2 border-black pb-3" style={{ backgroundColor: "#38b262" }}>
                        <h1 className="mt-5 mb-3 text-center graphTitle text-white">Average Sentiment Score for Tweets</h1>
                        <Image src={sentimentScore} />
                    </Col>
                </Row >
            </Container >
        </div>
    );
}

export default Tweet;