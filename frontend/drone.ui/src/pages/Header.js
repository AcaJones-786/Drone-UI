import { Outlet, Link } from "react-router-dom";
import logo from '../images/drone.png';

const Navigation = {display: "grid", gridTemplateColumns: "1fr 3fr 3fr"};
const Shift = {display: 'flex', justifyContent: 'center', alignItems: 'center'};
const Navi = {padding: "1em", backgroundColor: "#3FB5FF"};
const Hyper = {textDecoration: 'none', color: 'white', hover: 'none'};

const Layout = () => {
  return (
    <>
        <nav style={Navi}>
            <header style={Navigation}>
                <Link to="/">
                    <img src={logo} alt="logo" width={'75px'}/>
                </Link>
                <div style={Shift}>
                    <Link style={Hyper} to="/">
                        <h1>Drone Delivery </h1>
                    </Link>
                </div>
                <div style={Shift}>
                    <Link to="/DeliveryDashboard">
                        <button style={{marginRight: '1em'}} type="button" class="btn btn-primary">Delivery Dashboard</button>
                    </Link>

                    <Link to="/OrderPage">
                        <button type="button" class="btn btn-primary">Order Dashboard</button>
                    </Link>                
                </div>
            </header>
        </nav>

        <p></p>

      <Outlet />
    </>
  );
};

export default Layout;
