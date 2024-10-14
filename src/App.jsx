import { useState } from "react";
// import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting={"Bienvenido usuario!"}></ItemListContainer>
      <ItemDetailContainer></ItemDetailContainer>
  
    </div>
  );
}
// Deshabilitamos el item count para trabajar sobre las cards en la pagina principal de la app, pero quedo funcional esa botonera basica
export default App;
