import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
const Header = () => {
    const location = useLocation();
    const currentUrl = location.pathname;
    return (
        <div className="topnav">
            <Link to="/" className={currentUrl === "/" ? "active" : ""}>
                Todos
            </Link>
            <Link
                to="/covid19"
                className={currentUrl === "/covid19" ? "active" : ""}
            >
                Covid19
            </Link>
            <Link
                to="/contact"
                className={currentUrl === "/contact" ? "active" : ""}
            >
                Contact
            </Link>
            <Link
                to="/about"
                className={currentUrl === "/about" ? "active" : ""}
            >
                About
            </Link>
        </div>
    );
};

export default Header;
