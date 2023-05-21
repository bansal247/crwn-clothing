import Home from "./routes/home/home.component";
import { Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.componenet";
import Authentication from "./routes/authentication/authentication";



const Shop = (props) => {
  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  )
};


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path='shop' element = {<Shop/>} />
        <Route path='auth' element = {<Authentication/>} />
      </Route>
    </Routes>
  ) ;
  
}

export default App;