import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
import logo from './assets/logoNaranjaTransparent.png'

const NavBar = () => {
  return (
    <nav>
      <div className="NavBarHeader"><img className="BrandLogo" src={logo} alt="logo de Gallina" /><p className="BrandName">Avicola Frutos del Nido</p></div>
      
      <div className="ButtonSet">
        <button className="NavBarButton">Alimentos Balanceados</button>
        <button className="NavBarButton">Accesorios</button>
        <button className="NavBarButton">Animales</button>
      </div>
      <CartWidget></CartWidget>
    </nav>
  );
};

export default NavBar;
