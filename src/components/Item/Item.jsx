import React from 'react'
import './Item.css'

const Item = ({id,name,img,price,stock}) => {
  return (
    <article className='CardItem'>
      <header className='Header'>{name}</header>
      <picture >
        <img className='ItemImg' src={img} alt={name} />
      </picture>
      <section>
        <p className='Info'> Precio: ${price}</p>
        <p className='Info'>Disponible: {stock}</p>
      </section>
      <footer className='ItemFooter'>
        <button className='Option'> Ver detalles</button>
      </footer>
    </article>
  )
}

export default Item
