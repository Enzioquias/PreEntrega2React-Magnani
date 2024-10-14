import { useState, useEffect } from "react";
import { getProducts } from "../../products";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response))
      .catch((error) => console.log(error));
  },[]);


  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products}></ItemList>
    </div>
  );
};

export default ItemListContainer;
