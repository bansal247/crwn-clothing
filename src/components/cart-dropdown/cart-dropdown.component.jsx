import Button from '../button/button.componenet';
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.componenet';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';

const CartDropdown = (props) => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => <CartItem key = {item.id} cartItem={item} />)}
      </div>
      <Button onClick={goToCheckoutHandler}>GO tO CHECTOUT</Button>
      
    </div>
  )
};

export default CartDropdown;
