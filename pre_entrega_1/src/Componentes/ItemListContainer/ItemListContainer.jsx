import React from 'react';
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <>
      <div className='button-main'>
        <button className='button-add'>{greeting}</button>
      </div>
    </>
  )
}
export default ItemListContainer


