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
    const [dateRange, setDateRange] = useState("1-day");
    const [stocks, setStocks] = useState({});
    const [stockgraph, setStockGraph] = useState(0);
    const { id } = useParams();
    let location = useLocation();
    let { stockName, ticker } = location.state;

    let currentStock = {};

    const fetchStocks = async () => {
        const company = { id };
        const date = new Date();
        const today = Math.floor(date.getTime() / 1000);
        const dates = [];
        let timePeriod = "";

        if (dateRange === "1-day") {
            dates.push(today, today);
            timePeriod = "D";
        } else if (dateRange === "5-day") {
            let fiveDays = today - 5 * 86400;
            dates.push(fiveDays, today)
            timePeriod = "W";

        } else if (dateRange === "1-month") {
            let oneMonth = today - 2629743;
            dates.push(oneMonth, today)
            timePeriod = "M";
        }

        await axios
            .post(`${REACT_APP_SERVER_URL}/stocks/`, {
                ticker: company.id,
                period: timePeriod,
                dates: dates
            })
            .then((response) => {
                // let res = response.data;
                // currentStock = res;
                // console.log('CURRENT STOCK INSIDE FETCH ', currentStock);
                setStockGraph(response)
            })
            .catch((error) => {
                console.log('ERROR: ', error);
            });
    }

    useEffect(() => {
        const company = { id };
        axios.post(`${REACT_APP_SERVER_URL}/tweets/`, company.id)
            .then((response) => {
                setScore(response.data)
                console.log('RESPONSE IN USEEFFECT: ', response);
            })
            .catch((error) => {
                console.log('ERROR: ', error);
            })

        console.log("currentStock Before fetchstocks, ", currentStock)
        fetchStocks(company);
        console.log("currentStock After fetchstocks, ", currentStock)

    }, [{ stockName }]);

    const handleChange = (e) => {
        e.preventDefault();
        setDateRange(e.target.value)
    }

    const handleSubmit = () => {
        setStocks(currentStock);
        console.log('STOCK AFTER HANDLESUBMIT', stocks);
    }

    return (
        <div className="bg-dark">
            <Container className="mt-5" fluid="xl">
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
                            (Object.keys(stocks).length == 0 | stocks.s == 'no_data')
                                ?
                                <Stock
                                    close={"--"}
                                    low={"--"}
                                    high={"--"}
                                />
                                :
                                // <Stock
                                //     close={stocks.c[0]}
                                //     low={stocks.l[0]}
                                //     high={stocks.h[0]}
                                <Stock
                                    close={"--"}
                                    low={"--"}
                                    high={"--"}
                                />
                        }

                    </Col>
                    <Col className="border border-2 border-black pb-3" style={{ backgroundColor: "#38b262" }}>
                        <h1 className="mt-5 mb-3 text-center graphTitle text-white">Average Sentiment Score for Tweets</h1>
                        <Image src={sentimentScore} />
                        <Image src={stockgraph} />
                    </Col>
                </Row >
            </Container >
            <div className="scoreDescription text-light">
                How It Works:
                <ol>
                    <li>
                        The last 100 tweets that mentions a company by its name and/or stock symbol are retrieved.
                    </li>
                    <li>
                        Each tweet is passed through a sentiment analysis tool that gives it a normalized, weighted
                        compound score between -1.000 (most extreme negative) and +1.000 (most extreme positive). Hyperlinks
                        in messages were removed from tweets before analysis for accuracy.
                    </li>
                    <li>
                        All 100 compound scores are sorted by date tweeted and averaged out to determine the mean
                        compound score by date and then represented on a line graph .
                    </li>
                    <li>
                        Users can
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Tweet;