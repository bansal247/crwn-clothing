import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';
const Home = () => {

  

  return ( // Outlet lets render sub-route
    <div>
        <Outlet /> 
        <Directory />
    </div>
    
  );
}

export default Home;
