import React, { useState, useEffect } from "react";
import {
    getApiData,
    getApiServerDatetime,
    getDataByBrazilianState,
    allCasesInTheWorld,
    getDataByWorldCountries
} from "./http/api";
import { Table, Loading, SearchForm } from "./components";
import "./App.css";

// TODO: ao filtar por resultado perde-se estado anterior no select

const apiCountry = "https://covid19-brazil-api.now.sh/api/report/v1/countries"
const apiBrazil = "https://covid19-brazil-api.now.sh/api/report/v1/"

function App(props) {
    const [tableData, setTableData] = useState([]);
    const [selectUfOptions, setSelectUfOptions] = useState([]);
    const [selectCountryOptions, setSelectCountryOptions] = useState([]);
    const [apiDatetime, setApiDatetime] = useState([]);

    useEffect(() => {
        const fetchApiData = async () => {
            setApiDatetime(await getApiServerDatetime());
            setTableData(await getApiData(apiBrazil));
            setSelectUfOptions(await getApiData(apiBrazil))
            setSelectCountryOptions(await allCasesInTheWorld())
        };
        fetchApiData();
    }, []);

    const handleUfChange = async (e) => {
        e.preventDefault();
        let state = e.target.value;
        state = [await getDataByBrazilianState(state)]
        setTableData(state)
    }
    
    const handleCountryChange = async (e) => {
        e.preventDefault();
        let country = e.target.value;
        country = [await getDataByWorldCountries(country)]
        setTableData(country)
    }

    const handleClick = async (e, url) => {
        e.preventDefault();
        setTableData(await getApiData(url))
    }

    return (
        <div className="container wrapper">
            <header className="title mb-5">
                <h1>{props.title}</h1>
            </header>

            <article className="mb-5">
                <h2>O que é este projeto</h2>
                <p>
                    Um sistema de divulgação de dados do COVID-19 nos estados do
                    Brasil.
                </p>
            </article>

            <article>
                {tableData.length ?
                    (<>
                        <div className="grid container mb-4">
                            <div className="row align-items-center justify-content-start no-gutters">
                                <div className="col-sm-5 align-self-end">
                                    <SearchForm searchTitle="Busque por estado" options={selectUfOptions} onChange={handleUfChange} />
                                    <SearchForm searchTitle="Busque por país" options={selectCountryOptions} onChange={handleCountryChange} />
                                </div> 
                                <div className="col-sm-3">
                                    <button className="btn btn-info" onClick={(e) => handleClick(e, apiBrazil)}>Buscar por todos estados</button>
                                </div>
                                <div className="col-sm-3">
                                    <button className="btn btn-info" onClick={(e) => handleClick(e, apiCountry)}>Buscar pelo mundo</button>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="container">
                            <Table dataToRender={tableData} />
                        </div>
                    </>)
                    : <Loading />}
            </article>
        </div>
    );
}

export default App;
