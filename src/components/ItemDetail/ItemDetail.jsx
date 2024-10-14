import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <div className="ItemDetailContainer">
      <div className="ItemDetailSeparator"></div>
      <article className="CardItemDetailed">
        <div>
          <header className="Header">
            <h2 className="ItemHeader">{name}</h2>
          </header>
          <picture>
            <img className="ItemImg" src={img} alt={name} />
          </picture>
          <section>
            <p className="Info"> Categoria: {category}</p>
            <p className="Info"> Descripcion: {description}</p>
            <p className="Info"> Precio: ${price}</p>
          </section>
          <footer className="ItemFooter">
            <ItemCount
              initial={1}
              stock={stock}
              onAdd={(quantity) =>
                console.log("Cantidad agregada: " + quantity)
              }
            />
          </footer>
        </div>
      </article>
      <div className="ItemDetailSeparator"></div>
    </div>
  );
};

export default ItemDetail;
