import React from 'react'
import "./product.css"

function Product({title, image, price, rating}) {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
          <p className='product__price'>
            <small> &#8377;</small>
            <strong> {price} </strong>
          </p>
        <p className='product__rating'>
          {
            Array(rating).fill().map((_, i) => (
              <p>&#9733;</p>
            ))
          }
        </p>

      </div>
      <img
        src={image}
        alt='product_image' />
      <button>Add to cart</button>
    </div>
  )
}

export default Product;