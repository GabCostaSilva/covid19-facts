import React from "react";
import dictionary from "../resources/dictionary";

export default function Table({ dataToRender }) {
    return (
        <div>
            <div className="grid">
                {renderTable(dataToRender)}
            </div>
        </div>
    );
}

function Headings({ dataHeadings }) {
    return dataHeadings.filter(filterDataWithDictionary).map((heading, key) => (
        <div className="col" key={key}>
            <h4>{dictionary[heading]}</h4>
        </div>
    ));
}

function renderTable(dataToRender) {
    return (
        <>
            <div className="row headings pb-2">
                <Headings
                    dataHeadings={parseHeadingsFromApiDataObject(
                        dataToRender[0]
                    )}
                />
            </div>
            {dataToRender.map((dataReceived, key) => (
                <div
                    className="row data-rows align-items-center pb-3"
                    key={key}
                >
                    {Object.keys(dataReceived).map((objectKey) =>
                        filterDataWithDictionary(objectKey) ? (
                            <div className="col align-middle">
                                {dataReceived[objectKey]}
                            </div>
                        )
                        : undefined
                    )}
                </div>
            ))}
        </>
    );
}

function filterDataWithDictionary(heading) {
    return dictionary.hasOwnProperty(heading);
}

function parseHeadingsFromApiDataObject(apiDataObject) {
    return Object.keys(apiDataObject);
}
