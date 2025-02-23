import NavBar from './components/hospital/NavBarHospital'
import { Outlet } from 'react-router-dom';

const LayoutHospital = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

export default LayoutHospital;
