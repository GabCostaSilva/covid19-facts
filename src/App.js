import React, { useState, useEffect } from 'react';
import { allCasesInBrazil, allCasesInTheWorld } from "./api"
import Table from "./components/Table"
import "./App.css";


function App(props) {
  const [apiData, setApiData] = useState([])
  const [apiData1, setApiData1] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setApiData(await allCasesInBrazil())
    }
    fetchData()
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setApiData1(await allCasesInTheWorld())
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
        {apiData1.length ? <Table dataToRender={apiData1} /> : <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>carregando...</div>}
      </article>      
    </div >
  );
}

export default App;
