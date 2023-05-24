import ReactDOM from "react-dom";
import { useState } from "react";
import React from "react";

const QuoteBox = ({ quote, handleNewQuote }) => {
  return (
    <div id="quote-box">
      <p id="text">{quote.text}</p>
      <h2 id="author">{quote.author}</h2>

      <div className="actions">
        <button id="new-quote" className="button" onClick={handleNewQuote}>
          New Qoute
        </button>
        <a
          href="https://twitter.com/intent/tweet"
          id="tweet-quote"
          target="_blank"
        >
          Tweet
        </a>
      </div>
    </div>
  );
};

const App = () => {
  const quote = fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  console.log(quote.data);
  // const [quote, setQuote] = React.useState({
  //   text: "hello world",
  //   author: "samuel",
  // });
  const handleNewQuote = () => {};

  return (
    <div className="main">
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
    </div>
  );
};

export default App;
