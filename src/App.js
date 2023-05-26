import React, { useState, useEffect } from "react";

function RandomQuote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchRandomQuote();
  }, []);

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

  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <h2 id="author">{author}</h2>

      <div className="actions">
        <button id="new-quote" className="button" onClick={fetchRandomQuote}>
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
}

export default RandomQuote;
