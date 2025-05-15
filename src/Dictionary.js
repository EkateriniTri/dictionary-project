import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "6c4a1fa1oe455fb969c4b3876f90t341";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let imageApiKey = "6c4a1fa1oe455fb969c4b3876f90t341";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;

    axios.get(imageApiUrl).then(handleImageResponse);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>Search for the word you want</h1>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="type your word here e.g Love"
            onChange={handleKeywordChange}
          />
        </form>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
