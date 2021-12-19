import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
    return (
        <div className="topnav">
            <Link to="/" className="active">
                Todos
            </Link>
            <Link to="/news">News</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
        </div>
    );
};

export default Header;
