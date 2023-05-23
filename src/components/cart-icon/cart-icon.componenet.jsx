import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartIcon = (props) => {
  const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);
  
  const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  
  return (
    <div className='cart-icon-container' onClick={toogleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
};

export default CartIcon;