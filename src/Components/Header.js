import logo from '../Images/logo.png';
import {Link, Form, useNavigate } from 'react-router-dom';
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
                    {/* HERE IS WHERE DROPDOWN MENU CODE SHOULD GO */}
                    {/* <div className="logout-button">
                <button onClick={async () => {
                    await fetch(`${baseUrl}/logout`)
                    localStorage.removeItem('loggedIn') 
                    navigate("/")}}>Logout</button>
            </div> */}
                    <Link to="/"><li>Add New</li></Link>
                    <Link><li>About</li></Link>
                    <li><a href="#">Ideas</a></li>
                    <li><button onClick={async () => {
                        await fetch(`${baseUrl}/logout`)
                        localStorage.removeItem('loggedIn')
                        navigate("/")}}>Logout</button></li>
                    {/* <Link><li>Logout</li></Link> */}
                </ul>
            </div>
        </div>
        
    )
}

export default Header;