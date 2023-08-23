import {Outlet, Link} from 'react-router-dom';

function Main(props){
    return <div>
        <h1>Welcome to the Places App</h1>
        
        <Link to="/signup"><button>Signup</button></Link>
        
        <Link to="/login"><button>Login</button></Link>

        <Outlet />
    </div>
}

export default Main;