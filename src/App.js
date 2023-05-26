import React, { useState, useEffect } from "react";
import "./App.css";
function RandomQuote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchRandomQuote();
  }, []);
  // useEffect(() => {
  //   // Update the background color when the quote changes
  //   changeBackgroundColor();
  // }, [quote]);

  // let randomColor = "#333333";

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const { text, author } = data[randomIndex];
      setQuote(text);
      setAuthor(author || "Unknown");
    } catch (error) {
      console.log("Error fetching random quote:", error);
    }
  };
  const changeBackgroundColor = () => {
    // Generate a random color in hexadecimal format
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };
  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <h2 id="author">- {author}</h2>

      <div className="actions">
        <a
          href="https://twitter.com/intent/tweet"
          id="tweet-quote"
          target="_blank"
          className="btn "
        >
          <i className="fas fa-heart"> Tweet</i>
        </a>
        <button
          id="new-quote"
          className="btn btn-secondary"
          onClick={fetchRandomQuote}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default RandomQuote;
