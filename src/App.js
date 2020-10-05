import React, { useState, useEffect } from 'react';
import getData from "./api"
import "./App.css";

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
      <header className="title mb-5">
        <h1>{props.title}</h1>
      </header>
      <article className="mb-4">
        <h2>O que é este projeto</h2>
        <p>Um sistema de divulgação de dados do COVID-19 nos estados do Brasil.</p>
      </article>
      <article>
        <div className="grid">
          <div className="row headings pb-2">
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
          {apiData.length ? apiData.map((dataReceived, key) => (
            <div className="row data-rows align-items-center pb-3" key={key}>
              <div className="col align-middle">
                {dataReceived.uf}
              </div>
              <div className="col align-middle">{dataReceived.cases}</div>
              <div className="col align-middle">{dataReceived.deaths}</div>
              <div className="col align-middle">{dataReceived.suspects}</div>
            </div>)) : <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>carregando...</div>}
        </div>
      </article>
    </div >
  );
}

export default App;
