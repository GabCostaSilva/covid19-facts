import React from "react"

export default ({ options, onChange, searchTitle }) => {
    let firstOption = options[0]
    let optionValue = ""
    let optionName = ""
    if (options.length) {
        optionValue = firstOption.uf ? "uf" : "country"
        optionName = firstOption.uf ? "state" : "country"
    }
    return (
        <label>{searchTitle}
            <select className="ml-2" onChange={onChange}>
                {options.map((data, key) => (
                    <option key={key} value={data[optionValue]}>
                        {data[optionName]}
                    </option>
                ))}
            </select>
        </label>
    );
}   