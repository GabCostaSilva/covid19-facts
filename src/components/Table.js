import React from 'react'
import dictionary from "../resources/dictionary"

function Headings({ dataHeadings }) {
    console.log("Aqui", dataHeadings
        .filter(filterDataWithDictionary))
    return dataHeadings
        .filter(filterDataWithDictionary)
        .map((heading, key) =>
            <div className="col" key={key}>
                <h4>{dictionary[heading]}</h4>
            </div>
        )
}

function filterDataWithDictionary(heading) {
    // console.log("filter",heading,dictionary.hasOwnProperty(heading))
    return dictionary.hasOwnProperty(heading)
}

function parseHeadingsFromApiDataObject(apiDataObject) {
    return Object.keys(apiDataObject)
}

function renderInputBrazil(apiData) {
    return (
        <div>
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
        </div>
    )
}

function renderInputWorld(apiData) {
    return (
        <div>
            <label>Selecione o País</label>
            <select>
                {apiData.map((data, key) => (
                    <option key={key} value={data.country}>{data.country}</option>
                ))}
            </select>
        </div>
    )
}

export default function Table({ dataToRender }) {
    return (<div>
        <div className="grid">
            <div className="row headings pb-2">
                <Headings dataHeadings={parseHeadingsFromApiDataObject(dataToRender[0])} />
            </div>
            {dataToRender.map((dataReceived, key) =>
                <div className="row data-rows align-items-center pb-3" key={key}>
                    {Object.keys(dataReceived).map(objectKey => (
                        filterDataWithDictionary(objectKey) ?
                            <div className="col align-middle">
                                {dataReceived[objectKey]}
                            </div> :
                            undefined
                    ))}
                </div>
            )}
            {/* {dataToRender.map((dataReceived, key) => (
                <div className="row data-rows align-items-center pb-3" key={key}>
                    {Object.keys(dataReceived).map(objectKey => (
                        <div className="col align-middle">{dataReceived[objectKey]}</div>
                    ))}
                </div>))} */}
        </div>
    </div>)
}
