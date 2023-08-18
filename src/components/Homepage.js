// Imports
import React, { useEffect } from "react";
import axios from "axios";

// Use this key to connect to server
const { REACT_APP_SERVER_URL } = process.env;
const test = 123;
const fetchThreads = async () => {
  await axios
    .post(`${REACT_APP_SERVER_URL}/threads/`, test)
    .then((response) => {
      console.log("finjish");
    })
    .catch((error) => {
      console.log("ERROR: ", error);
    });
};

const Homepage = () => {
  useEffect(() => {
    fetchThreads();
  }, []);
  return (
    <div className="homepage">
      <div className="homeTitle text-dark bg-light">
        <p>
          Let's <span>Stonk</span>
        </p>
        <p className="homeSubTitle text-dark">About It</p>
      </div>
      <div className="homeTweet text-dark bg-light">
        <ProfilePic />
        <div className="content">
          <NameAndHandle />
          <Message />
          <Buttons />
        </div>
      </div>
    </div>
  );
};

function ProfilePic() {
  return (
    <img src="./stonks_image.jpeg" className="avatar" alt="profile picture" />
  );
}

function NameAndHandle() {
  return (
    <span className="nameAndHandle">
      <strong className="name">StonkMaster</strong>
      <span className="handle">@Lets_Stonk_About_It</span>
    </span>
  );
}

function Message() {
  return (
    <div className="message">
      Ever thought about how posting messages on social media can impact the
      stock market?
      <strong style={{ color: "#3366BB" }}>#Let's_Stonk_About_It</strong> is a
      web-based platform that examines the emotional elements of company-related
      tweets and compares it with its stock price in real-time.
    </div>
  );
}

function Buttons() {
  return (
    <div className="buttons">
      <button class="tweetButton">Tweet</button>
    </div>
  );
}

export default Homepage;
