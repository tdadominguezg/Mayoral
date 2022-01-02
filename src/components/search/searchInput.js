import React from "react";

function SearchInput({search, setSearch, data}) {
  
  function handleChange(e) {
    //console.log(e.target.value);
    let value = e.target.value.toLowerCase();

    let searchValue = data.filter(element => element.name.toLowerCase().includes(value));

    setSearch(searchValue);
  }

  return (
    <>
      <input placeholder="Buscar" aria-label="Buscador" type="text" className="searchInput" onChange={handleChange}></input>
    </>
  );
}

export default SearchInput;
