import './header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Navber</h2>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About us</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/users">users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;