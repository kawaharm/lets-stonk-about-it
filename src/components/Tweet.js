// Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Use this key to connect to server
const { REACT_APP_SERVER_URL } = process.env;


function Tweet(props) {
    // Hooks
    const [tweets, setTweets] = useState("Stonk");

    useEffect(() => {
        axios.get(`${REACT_APP_SERVER_URL}/tweets/`)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log('ERROR: ', error);
            })
    }, []);

    return (
        <div>
            <h1>Let's {tweets} about it!</h1>
        </div>
    );
}

export default Tweet;