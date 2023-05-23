import Button from '../button/button.componenet';
import CartItem from '../cart-item/cart-item.componenet';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';

const CartDropdown = (props) => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();
  

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (cartItems.map(item => <CartItem key = {item.id} cartItem={item} />)):
          (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
        }
        
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO tO CHECTOUT</Button>
      
    </CartDropdownContainer>
  )
};

export default CartDropdown;
