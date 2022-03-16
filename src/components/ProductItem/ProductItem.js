import React from 'react'
import './ProductItem.css'
const ProductItem = ({item}) => {
  return (
    <div className='prod_card'>
            <div className="prod_card_title">{item.name}</div>
            <div className="prod_card_title">{item.price}</div>
    </div>
  )
}

export default ProductItem