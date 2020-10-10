import React from "react"

export default ({ options, onChange }) => {
    return (
        <div className="mb-4">
            <label>Busque por um Estado</label>
            <select className="ml-2" onChange={onChange}>
                {options.map((data, key) => (
                    <option key={key} value={data.uf}>
                        {data.state}
                    </option>
                ))}
            </select>
        </div>
    );
}   