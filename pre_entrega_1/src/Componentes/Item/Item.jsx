import './Item.css'
import { Link } from "react-router-dom"

const Item = ({ item }) => {
    return (
        <Link to={"/item/" + item.id}>
            <main className='container'>
            <section className='card'>
                <div className='img-product'>
                    <img src={item.imagen} alt={item.nombre} />
                </div>
                <div className='card-info'>
                    <h2>{item.nombre}</h2>
                    <p className="card-desc">{item.descrpcion}</p>
                    <div className='card-precio'>$ {item.precio}</div>
                </div>
                <div className='btn'>
                    <button className='card-btn'>Agregar+</button>
                </div>
                </section>
            </main>    
        </Link>
  )
}

export default Item