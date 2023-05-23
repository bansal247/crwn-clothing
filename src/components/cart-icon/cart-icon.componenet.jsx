import {ShoppingIcon, CartIconContainer, ItemCount} from './cart-icon.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartIcon = (props) => {
  const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);
  
  const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  
  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  )
};

export default CartIcon;
