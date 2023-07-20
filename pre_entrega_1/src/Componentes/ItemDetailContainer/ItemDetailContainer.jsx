import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import dataProduct from '../ItemListContainer/products.json'
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
    const fetchData = async()=>{
      try {
        const data = await new Promise((res)=> {
          setTimeout(() => {
            res(dataProduct.find(item=> item.id === parseInt(id)))
          }, 1000);
        });
          setItem(data);
        }catch (error) {
          console.log('Error:', error);
        }
    };
    fetchData();
  }, [id])
  

  return (
    <div>
      <div>
        <ItemDetail item={item}/>
      </div>
    </div>
  )
}

export default ItemDetailContainer