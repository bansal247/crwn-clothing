import Home from "./routes/home/home.component";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.componenet";
import Authentication from "./routes/authentication/authentication";
import { UserContext } from "./context/user.context";
import { useContext } from "react";
import Shop from "./routes/shop/shop.componenet";
import Checkout from "./routes/checkout/checkout.componenet";


const App = () => {
  const {currentUser} = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path='shop' element = {<Shop/>} />
        {/* <Route path='auth' element = {<Authentication/>} /> */}
        <Route path="/auth" element={ currentUser ? <Navigate to="/" /> : <Authentication /> }/>
        <Route path='checkout' element = {<Checkout/>} />
      </Route>
    </Routes>
  ) ;
  
  
}

export default App;