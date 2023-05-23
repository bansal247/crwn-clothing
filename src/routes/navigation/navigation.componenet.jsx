import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import {NavigationContainer,NavLink,NavLinks,LogoContainer} from './navigation.styles.jsx';
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.componenet";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  const signOutHandler = async () =>{
    await signOutUser();
    // setCurrentUser(null);
  }

    return ( // Fragment doesn't show on console
      <Fragment>
        <NavigationContainer>
          <LogoContainer to='/'>
            <CrwnLogo className="logo" />
          </LogoContainer>  
          <NavLinks>
            <NavLink to='/shop'>
                Shop
            </NavLink>

            {
              currentUser ? 
                (<NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink>)
                : (<NavLink to='/auth'>
                  Sign In
                  </NavLink>)
            }

            <CartIcon />
          </NavLinks>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;