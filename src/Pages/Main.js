import {Outlet, Link} from 'react-router-dom';

function Main(props){
    return <div>
        <h1>Welcome to the Places App</h1>
        <div className="buttons">
        <Link to="/signup"><button><h3>Signup</h3></button></Link>
        
        <Link to="/login"><button><h3>Login</h3></button></Link>

        <Outlet />
        </div>
    </div>
}

export default Main;