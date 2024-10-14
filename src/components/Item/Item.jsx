import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="CardItem">
      <header className="Header">{name}</header>
      <picture>
        <img className="ItemImg" src={img} alt={name} />
      </picture>
      <section>
        <p className="Info"> Precio: ${price}</p>
        <p className="Info">Disponible: {stock}</p>
      </section>
      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
    </footer>
    </article>
  );
};

export default Item;
