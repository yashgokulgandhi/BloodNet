import NavBar from './components/donor/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

export default Layout;
