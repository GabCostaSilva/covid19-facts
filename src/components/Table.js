import React from 'react'
import dictionary from "../resources/dictionary"

function Headings({ dataHeadings }) {
    return dataHeadings
        .filter(filterDataWithDictionary)
        .map((heading, key) =>
            <div className="col" key={key}>
                <h4>{dictionary[heading]}</h4>
            </div>
        )
}

/**
 * 
 * 
    for (key in dicinary) {
        if (obj.hasOwnProperty(key) && !    (obj[key])) {
            result[key] = obj[key];
        }
    }
 */

function filterDataWithDictionary(heading) {
    return dictionary.hasOwnProperty(heading)
}

function parseHeadingsFromApiDataObject(apiDataObject) {
    return Object.keys(apiDataObject)
}

export default function Table({ dataToRender }) {
    return (<div>
        <div className="grid">
            <div className="row headings pb-2">
                <Headings dataHeadings={parseHeadingsFromApiDataObject(dataToRender[0])} />
            </div>
            {dataToRender.map((dataReceived, key) => (
                <div className="row data-rows align-items-center pb-3" key={key}>
                    {Object.keys(dataReceived).map(objectKey => (
                        <div className="col align-middle">{dataReceived[objectKey]}</div>
                    ))}
                    {/* <div className="col align-middle">
                        {dataReceived.uf}
                    </div>
                    <div className="col align-middle">{dataReceived.cases}</div>
                    <div className="col align-middle">{dataReceived.deaths}</div>
                    <div className="col align-middle">{dataReceived.suspects}</div> */}
                </div>))}
        </div>
    </div>)
}
