import { Outlet, Link } from "react-router-dom";
import logo from '../images/drone.png';
import "../App.css";

const Navigation = {display: "grid", gridTemplateColumns: "1fr 3fr 3fr"};
const Shift = {display: 'flex', justifyContent: 'center', alignItems: 'center'};

const Hyper = {textDecoration: 'none', color: 'white', hover: 'none'};

function logOut(){
    window.localStorage.clear();
    window.location.href = '/login';
};

const Layout = () => {
    
  return (
    <>
        <nav >
            <header >
                <Link to="/Home">
                   
                </Link>
                <div>
                    <Link  to="/Home">
                        <h1>Drone Delivery </h1>
                    </Link>
                </div>
                <div >
                    <Link to="/DeliveryDashboard">
                        <button  type="button">Delivery Dashboard</button>
                    </Link>

                    <Link to="/OrderPage">
                        <button type="button" >Order Dashboard</button>
                    </Link>   

                    <Link to="/login">
                        <button type="button" onClick={logOut}  >Logout</button>
                    </Link>               
                </div>
            </header>
        </nav>
      <Outlet />
    </>
  );
};

export default Layout;
