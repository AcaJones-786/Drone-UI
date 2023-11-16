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
        <nav>
            <header  style={{borderRadius: '25px', border: "solid 2px white"}}>
                <Link to="/Home">
                   
                </Link>
                <div>
                    <Link  to="/Home">
                        <h1 style={{font: '45px serif'}}>Starling Drone Delivery </h1>
                    </Link>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: "1fr 1fr"}}>
                    <Link to="/DeliveryDashboard">
                        <button style={{color: 'white', border: 'solid 2px'}}  className="btn yoho">Delivery Dashboard</button>
                    </Link>

                    {/* <Link to="/OrderPage">
                        <button style={{color: 'white', border: 'solid 2px'}}  className="btn yoho">Order Dashboard</button>
                    </Link>    */}

                    <Link to="/login">
                        <button  style={{color: 'white', border: 'solid 2px'}}  className="btn yoho" onClick={logOut}  >Logout</button>
                    </Link>               
                </div>
            </header>
        </nav>
      <Outlet />
    </>
  );
};

export default Layout;
