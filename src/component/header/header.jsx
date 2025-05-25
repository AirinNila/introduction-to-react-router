
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Navber</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">users</Link>
                
            </nav>
        </div>
    );
};

export default Header;