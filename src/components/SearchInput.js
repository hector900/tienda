import React from "react";

const SearchInput = ({onFilter}) => {

    return (
        <input
        className="input is-primary"
        type="text"
        placeholder="Buscar Productos"
        onInput={e => onFilter(e.target.value)} />
    );
}

export default SearchInput;
