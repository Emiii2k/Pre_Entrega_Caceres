import './cartWidget.css'
import cart from '../CartWidget/carrito.png';

function  CartWidget() {
  
  return (
    <>
      <div className='container-icon'>
				<div className='container-cart-icon'>
					<img className='img' src={cart} alt="" />
					<div className='count-products'>
						<span id='contador-productos'>0</span>
					</div>
        </div>
      </div>
    </>
  )
}
export default CartWidget;