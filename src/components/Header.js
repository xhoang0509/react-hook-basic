import { NavLink, Link, useLocation } from "react-router-dom";
import "./Header.scss";
const Header = () => {
    const location = useLocation();
    const currentUrl = location.pathname;
    return (
        <div className="topnav">
            <NavLink to="/">Todos</NavLink>
            <NavLink to="/covid19">Covid19</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    );
};

export default Header;
