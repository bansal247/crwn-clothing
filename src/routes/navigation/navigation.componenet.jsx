import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
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
        <div className="navigation">
          <Link className="logo-container" to='/'>
            <CrwnLogo className="logo" />
          </Link>  
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                Shop
            </Link>

            {
              currentUser ? 
                (<span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>)
                : (<Link className="nav-link" to='/auth'>
                  Sign In
                  </Link>)
            }

            <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;