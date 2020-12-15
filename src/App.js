import Eldohub from './Eldohub.jpg';
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {


  //create a state
  const [state, setState] = useState({
    joke: ''
  });

  useEffect( () => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get('https://api.chucknorris.io/jokes/random?category=science');
    console.log(result.data.value);
    setState({
      ...state,
      joke: result.data.value
    });
  }



  //**********************************************/

{/*
  //create a state
  const [state, setState] = useState({
    joke: ''
  });

  useEffect( () => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get('https://api.chucknorris.io/jokes/random');
    console.log(result.data.value);
    setState({
      ...state,
      joke: result.data.value
    });
  }
*


  
  
  const[data, setData] = useState(null);
  const[print, setPrint] = useState(false);
  function getData(val)
  {
    setData(val.target.value)
    setPrint(false)
    console.warn(val.target.value)
  }*/}

  return (
    <div className="container">
      <div className="row">
      <h1 className="title">Eldohub: Chuck Norrice API</h1>
      </div>
      <div className="row">
        <div className="col-6">
          <img src={Eldohub} alt="Eldohub logo"></img>
          <h4>Proudly Sponsored by Eldohub</h4>
        </div>

        <div className="col-6 searchJokeCol">
          <div className="Card">
            <div className="card-header">
              Load another fact from the Science Category
            </div>
          </div>

          <div>
            <button className="btn, btn-success btn-lg" onClick={() => window.location.reload(false)} >Load</button>
          </div>
        </div>

      </div>
      <h2 className="subtitle">The Fact</h2>
      <h4>{state.joke}</h4>
    </div>
  );
}

export default App;
