import React, { useState, useEffect } from 'react';
import getData from "./api"
import "./App.css";
// "cases": 310526,
// "deaths": 6744,
// "suspects": 573,
function App(props) {
  const [apiData, setApiData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      setApiData(await getData())
    }
    fetchData()
  }, []);
  return (
    <div className="wrapper">
      <header className="title">
        <h1>{props.title}</h1>
      </header>
      <article>
        <h2>O que é este projeto</h2>
        <p>Um sistema de divulgação de dados do COVID-19 nos estados do Brasil.</p>
      </article>
      <article>
        <div className="grid">
          <div className="row">
            <div className="col">
              <h4>Estado</h4>
            </div><div className="col">
              <h4>Casos</h4>
            </div><div className="col">
              <h4>Mortes</h4>
            </div><div className="col">
              <h4>Suspeitos</h4>
            </div>
          </div>
          {apiData.map((dataReceived, key) => (
            <div className="row" key={key}>
              <div className="col">
                {dataReceived.uf}
              </div>
              <div className="col">{dataReceived.cases}</div>
              <div className="col">{dataReceived.deaths}</div>
              <div className="col">{dataReceived.suspects}</div>
            </div>))}
        </div>
      </article>
    </div>
  );
}

export default App;
