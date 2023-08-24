import logo from '../Images/logo.png';
import {Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../base_url';

function Header() {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <div className='logo'>
        <Link to="/">
            <img src={logo} alt="BonVoyage"/>
        </Link>
    </div>
            <div className='navbar'>
                <ul>
                    <li><Link to="/">Add New</Link></li>
                    <li><Link>About</Link></li>
                    <li><a href="#">Ideas</a></li>
                    <li><button onClick={async () => {
                        await fetch(`${baseUrl}/logout`)
                        localStorage.removeItem('loggedIn')
                        navigate("/")}}>Logout</button></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Header;