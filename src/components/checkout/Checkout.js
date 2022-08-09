import React from 'react'
import './checkout.css'
import Subtotal from './subtotal/Subtotal'
function Checkout() {
  return (
     <div className='checkout' >
          <div className='checkout-left'>
          <img
               className="checkout__ad"
               src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
               alt="checkout banner"
          />
          <div className=''>
               <h2 className='checkout-title'>
                    Your-shopping cart
               </h2>
          </div>
         </div>
          <div className='checkout-right'>
               <Subtotal/>
          </div>
     </div>

  )
}

export default Checkout