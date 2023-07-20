import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import dataProduct from './products.json'

const ItemListContainer = () =>{ 
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async()=>{
      try {
        const data = await new Promise((res)=> {
          setTimeout(() => {
            res(id ? dataProduct.filter(item => item.categoria === id) : dataProduct)
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
        <ItemList item={item}/>
      </div>
    </div>
  )

};

export default ItemListContainer;
