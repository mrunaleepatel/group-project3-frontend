import {Outlet, Link} from 'react-router-dom';

function Main(props){
    return <div>
        <h1>Where Dream Destinations Await</h1>
        
        
        <Link to="/signup"><button className='buttons' >Signup</button></Link>
        
        <Link to="/login"><button className='buttons' >Login</button></Link>

        <Outlet />
       
    </div>
}

export default Main;