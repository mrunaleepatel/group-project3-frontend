import {Outlet, Link} from 'react-router-dom';

function Main(props){
    return <div>
        <div className="typewriter">
            <h1>Where Dream Destinations Await</h1>
        </div>
        
        
        <Link to="/signup"><button className='buttons' >Signup</button></Link>
        
        <Link to="/login"><button className='buttons' >Login</button></Link>

        <Outlet />
       
    </div>
}

export default Main;