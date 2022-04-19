// Imports
import React, { useState, useEffect, useReducer } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Button, Container, Row, Col, Image, Form } from "react-bootstrap";
import axios from "axios";
import Stock from "./Stock";

// Use this key to connect to server
const { REACT_APP_SERVER_URL } = process.env;

function Tweet(props) {
  // Hooks
  const [sentimentScore, setScore] = useState(0);
  const [dateRange, setDateRange] = useState("1d");
  const [stockgraph, setStockGraph] = useState({});
  const { id } = useParams();
  let company = { id };
  let location = useLocation();
  let { stockName, ticker } = location.state;

  const fetchStocks = async () => {
    await axios
      .post(`${REACT_APP_SERVER_URL}/stocks/`, {
        ticker: company.id,
        period: dateRange,
      })
      .then((response) => {
        setStockGraph(response.data);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };

  useEffect(() => {
    axios
      .post(`${REACT_APP_SERVER_URL}/tweets/`, company.id)
      .then((response) => {
        setScore(response.data);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });

    fetchStocks();
  }, [stockName]);

  const handleChange = (e) => {
    e.preventDefault();
    setDateRange(e.target.value);
  };

  const handleSubmit = () => {
    fetchStocks();
  };

  return (
    <div className="bg-dark">
      <Container className="mt-5" fluid="xl">
        <Row className=" bg-border-color" xs={1} md={2}>
          <Col
            className="border border-2 border-white"
            style={{ backgroundColor: "#5D6D7E" }}
          >
            <div className="companyDescription mt-4 mb-3">
              <h1 className="text-white">{stockName}</h1>
              <h2 className="text-white">${ticker}</h2>
            </div>
            <Stock stockgraph={stockgraph} />
            <Row>
              <Col
                className="m-4 p-3 border border-primary border-1 border-dark rounded"
                style={{ backgroundColor: "#4D5656" }}
              >
                <Form>
                  <Form.Label className="mb-2 text-white">
                    Date Range:{" "}
                  </Form.Label>
                  <Form.Control
                    className="border border-dark rounded"
                    as="select"
                    value={dateRange}
                    onChange={handleChange}
                  >
                    <option value="1d">1 Day</option>
                    <option value="5d">5 Days</option>
                    <option value="1mo">1 Month</option>
                  </Form.Control>
                  <div className="text-center">
                    <Button
                      className="m-2 bg-success"
                      type="button"
                      onClick={handleSubmit}
                    >
                      SUBMIT
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col
            className="border border-2 border-black pb-3"
            style={{ backgroundColor: "#38b262" }}
          >
            <div className="mt-4 mb-5 text-center graphTitle text-white">
              <h1>Average Sentiment by Tweets</h1>
            </div>

            <div>
              <Image src={sentimentScore} className="tweetGraph" />
            </div>

            <div className="scoreDescription mt-4 text-light">
              <strong>How It Works:</strong>
              <ol>
                <li>
                  The last 500 tweets that mentions a company by its name and/or
                  stock symbol are retrieved.
                </li>
                <li>
                  Each tweet is passed through a sentiment analysis tool that
                  gives it a normalized, weighted compound score between -1.000
                  (most extreme negative) and +1.000 (most extreme positive).
                  Hyperlinks in messages were removed from tweets before
                  analysis for accuracy.
                </li>
                <li>
                  All 100 compound scores are sorted by date tweeted and
                  averaged out to determine the mean compound score by date and
                  then represented on a line graph.
                </li>
                <li>
                  Users can compare the sentiment graph with its stock
                  performance based on data from today, 5-day, and 1-month
                  range.
                </li>
              </ol>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Tweet;
