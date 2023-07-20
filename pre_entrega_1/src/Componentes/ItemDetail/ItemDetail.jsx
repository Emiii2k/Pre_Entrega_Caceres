import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({item}) => {
  return (
    <div>
        <div>
            <img className="card" src={item.imagen} alt={item.nombre} />
            <div>
                <h2 className="card-product">{item.nombre}</h2>
                <p>{item.descripcion}</p>
                <p>$ {item.precio}</p>
                <p>{item.stock} unid.</p>
            </div>
            <div>
                <ItemCount/>  
            </div>
        </div>
    </div>       
  )
}

export default ItemDetail