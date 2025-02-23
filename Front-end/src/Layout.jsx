import NavBar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

export default Layout;
