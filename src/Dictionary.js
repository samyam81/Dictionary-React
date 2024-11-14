import React, { useState } from "react";

function Dictionary() {
  const [word, setWord] = useState(""); 
  const [wordData, setWordData] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const fetchWordDefinition = async () => {
    if (!word) return;

    setLoading(true);
    setError(null);
    setWordData(null);

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await response.json();

      if (response.ok && data[0]) {
        const definition = data[0].meanings[0].definitions[0].definition;
        const type = data[0].meanings[0].partOfSpeech;
        const synonyms = data[0].meanings[0].definitions[0].synonyms || [];

        setWordData({
          word: data[0].word,
          type,
          definition,
          synonyms,
        });
      } else {
        setError("No definition found for this word.");
      }
    } catch (err) {
      setError("Error fetching word data. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        color: "#81D8D0",
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        borderRadius: "8px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
        style={{
          padding: "10px",
          width: "100%",
          fontSize: "1rem",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          color: "#313131",
        }}
      />
      <button
        onClick={fetchWordDefinition}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Get Definition
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {wordData && (
        <>
          <h1 style={{ fontSize: "2rem", margin: "20px 0 0" }}>
            {wordData.word}
          </h1>
          <p style={{ fontSize: "1rem", color: "#888", fontStyle: "italic" }}>
            {wordData.type}
          </p>
          <p style={{ fontSize: "1.5rem", margin: "10px 0" }}>
            {wordData.definition}
          </p>
          <p style={{ color: "#aaa", fontSize: "1rem" }}>
            <span style={{ fontWeight: "bold" }}>Synonyms: </span>
            {wordData.synonyms.length > 0
              ? wordData.synonyms.join(", ")
              : "None available"}
          </p>
        </>
      )}
    </div>
  );
}

export default Dictionary;
