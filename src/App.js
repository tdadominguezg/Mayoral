import SearchInput from "./components/search/searchInput";
import ProductCard from "./components/productCard/productCard";
import data from "./data/prendas.json";
import React, {useState} from "react";

function App() {
  
  const [search,setSearch] = useState(data);

  return (
    <>
      <SearchInput search = {search} setSearch={setSearch} data= {data} />

      <span className="iconLess"> - </span>
      <span className="iconPlus"> + </span>

      <span className="lineHR"></span>

      {search.map((e, index) => (
        <ProductCard
          key={index}
          name={e.name}
          description={e.description}
          price={e.price}
          discount={e.discount}
          img={e.img}
          color={e.colors}
        />
      ))}
    </>
  );
}

export default App;
