import Item from "../Item/Item"

const ItemList = ({item}) => {
  return (
    <div className="products">
      <div className='card-products'>
        {item.map(item =>
            <div className='items-products' key={item.id}>
                <Item item={item}/>
            </div>)
        }
      </div>
    </div>
  )
}

export default ItemList