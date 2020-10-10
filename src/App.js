import React, { useState, useEffect } from "react";
import {
    getApiData,
    getApiServerDatetime,
    getDataByBrazilianState
} from "./http/api";

import { Table, Loading, SearchForm } from "./components";
import "./App.css";

// TODO: ao filtar por resultado perde-se estado anterior no select

function App(props) {
    const [tableData, setTableData] = useState([]);
    const [apiDatetime, setApiDatetime] = useState([]);

    useEffect(() => {
        const fetchApiData = async () => {
            setApiDatetime(await getApiServerDatetime());
            setTableData(await getApiData());
        };
        fetchApiData();
    }, []);

    const handleChange = async (e) => {
        e.preventDefault();
        let state = e.target.value;
        state = [await getDataByBrazilianState(state)]
        setTableData(state)
    }

    return (
        <div className="wrapper">
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
                        <SearchForm options={tableData} onChange={handleChange} />
                        <Table dataToRender={tableData} />
                    </>)
                    : <Loading />}
            </article>
        </div>
    );
}

export default App;
