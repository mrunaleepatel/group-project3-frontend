import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <div className='logo'>
        <Link to="/">
            <img src="../Images/logo.png" alt="BonVoyage"/>
        </Link>
    </div>
            <div className='navbar'>
                <ul>
                    <Link to="/"><li>Add New</li></Link>
                    <Link><li>About</li></Link>
                    <li><a href="#">Ideas</a></li>
                    <Link><li>Logout</li></Link>
                </ul>
            </div>
        </div>
        
    )
}

export default Header;