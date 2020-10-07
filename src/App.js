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

  function renderTableCountries() {
    return apiData1.map((data, index) => {
      const { country, cases, confirmed, deaths, recovered } = data
      return (
        <tr key={index}>
          <td>{country}</td>
          <td>{cases}</td>
          <td>{confirmed}</td>
          <td>{deaths}</td>
          <td>{recovered}</td>
        </tr>
      )
    })
  }

  return (
    <div className="wrapper">
      <header className="title mb-5">
        <h1>{props.title}</h1>
      </header>

      <article className="mb-4">
        <h2>O que é este projeto</h2>
        <p>Um sistema de divulgação de dados do COVID-19 nos estados do Brasil.</p>
      </article>

      <div>
        <label>Selecione o Estado</label>
        <select>
          {apiData.map((data, key) => (
            <option key={key} value={data.uf}>{data.state}</option>
          ))}
        </select>
      </div>

      <div>
        <input id="date" type="date" />
      </div>

      <article>
        {apiData.length ? <Table dataToRender={apiData} /> : <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>carregando...</div>}
      </article>

      <div>
        <label>Selecione o País</label>
        <select>
          {apiData1.map((data, key) => (
            <option key={key} value={data.country}>{data.country}</option>
          ))}
        </select>
      </div>
      <div>
        <h1 id='title'>Países</h1>
        <table id='data1'>
          <tbody>
            <tr>
              <th>País</th>
              <th>Casos</th>
              <th>Confirmed</th>
              <th>Mortes</th>
              <th>Recuperados</th>
            </tr>
            {renderTableCountries()}
          </tbody>
        </table>
      </div>
    </div >
  );
}

export default App;
