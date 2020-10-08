import React, { useState, useEffect } from "react";
import {
    allCasesInBrazil,
    allCasesInTheWorld,
    statusApi,
} from "./resources/api";
import Table from "./components/Table";
import "./App.css";

function App(props) {
    const [apiDataBrazil, setApiDataBrazil] = useState([]);
    const [apiDataWorld, setApiDataWorld] = useState([]);
    const [apiStatus, setApiStatus] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setApiStatus(await statusApi());
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setApiDataBrazil(await allCasesInBrazil());
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setApiDataWorld(await allCasesInTheWorld());
        };
        fetchData();
    }, []);

    return (
        <div className="wrapper">
            <header className="title mb-5">
                <h1>{props.title}</h1>
            </header>

            <article className="mb-4">
                <h2>O que é este projeto</h2>
                <p>
                    Um sistema de divulgação de dados do COVID-19 nos estados do
                    Brasil.
                </p>
            </article>

            <article>
                {apiDataBrazil.length ? (
                    <Table dataToRender={apiDataBrazil} />
                ) : (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        carregando...
                    </div>
                )}
            </article>
        </div>
    );
}

export default App;
