import React from 'react'
import "./product.css"
import { useStateValue } from '../../StateProvider';

function Product({ id, title, image, price, rating })
{
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basket");
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  )
}

export default Product;