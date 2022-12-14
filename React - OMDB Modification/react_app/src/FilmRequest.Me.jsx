/*import {useState} from 'react';
import axios from 'axios'

const Film = () => {
    const [data, setData] = useState ("");
    // eslint-disable-next-line
    const [apiKey, setApiKey] = useState ("");
    const [filmTitle, setFilmTitle] = useState ("");

    const updateApiKey = (e) => {  
      e.preventDefault();
      setFilmTitle(e.target.value);
    }
  
    const makeRequest = (e) => {
     
      axios.get("http://www.omdbapi.com/?apikey=b8daade7" + apiKey + "&t=" + filmTitle)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      });
    };
    
    return (
      <>
      <div>
        <h2>Film Request</h2>
          <p>Enter your API Key for OMDB here</p>
          <input type="text" onChange={(e)=> updateApiKey(e)}/>
          <p>Enter the name of the film you are searching for</p>
          <input type="text" onChange={(e)=> setFilmTitle(e.target.value)}/>
          <p>Do not click this button until the fields above are correctly filled</p>
          <button onClick={(e) => makeRequest(e)}>Click me</button>
  
          <h4>{data.Title}</h4>
          <h4>{data.Year}</h4>
          <h4>{data.Rated}</h4>
          <h4>{data.Genre}</h4>
          <h4>{data.Plot}</h4>
  
          <img src={data.Poster} alt="The Poster"></img>
      </div>
      </>
    );
  }

  export default Film;*/