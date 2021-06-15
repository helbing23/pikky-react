import React from "react";
import axios from "axios";
import { useState } from "react";

export default function SearchPhoto() {

    const [image, setImage] = useState("");
    const clientId = "fd4wE1b8ZupiBRU_i-INo4OQGKELTHmdfL5O-6fP4H0";
    const [result, setResult] = useState([]);
    const handleChange = (event) => {
    setImage(event.target.value);
    };
    const handleSubmit = () => {
    console.log(image);
    const url = "https://api.unsplash.com/search/photos?page=1&query=" + image + "&client_id=" + clientId;axios.get(url).then((response) => {
    console.log(response);
    setResult(response.data.results);
    });
    };


    return (
      <>
        <div className="form"> 
          <label className="label" htmlFor="query"> 
          <svg width="32" height="32" class="_1Jlgk" version="1.1" viewBox="0 0 32 32" aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg>
          </label>
          <input onChange={handleChange} className="input" type="text" name="image" placeholder="Search for images"/>
          <button className="button" onClick={handleSubmit} type="submit">Search</button>
        </div>
        <div className="card-list">
          {result.map((image) => (
          <>
          <div className="card">
            <img className="card--image" src={image.urls.thumb} alt={image.alt_description} width="50%"
                height="50%" />
          </div>
          </>
          ))}
        </div>
      </>
    );
}