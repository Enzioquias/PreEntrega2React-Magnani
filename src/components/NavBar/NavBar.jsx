import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
import logo from './assets/logoNaranjaTransparent.png'
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="NavBarHeader"><img className="BrandLogo" src={logo} alt="logo de Gallina" /><p className="BrandName">Avicola Frutos del Nido</p></div>    
      <div className="Categories">
        <NavLink to={`/category/Balanceados`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Alimentos Balanceados</NavLink>
        <NavLink to={`/category/Animales`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Animales</NavLink>

      </div>
      <CartWidget></CartWidget>
    </nav>
  );
};

export default NavBar;
