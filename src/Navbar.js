import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [isToggler, setToggler] = useState(false)

    const toggleNav = () => {
        setToggler(!isToggler)

    };
    return (
        <nav className={`nav ${isToggler ? 'active' : ''}`}>
            <Link to="/" className="site-title">
                <img src="/cota-logo.png" alt="COTA logo" width="50" height="50" />
                <p>Church of <br />
                    the Americas</p>
            </Link>
            <div className="nav-toggle" onClick={toggleNav}>
                Toggle Nav
            </div>
            <ul>
                <CustomLink to="/visit">Visit</CustomLink>
                <CustomLink to="/events">Events</CustomLink>
                <CustomLink to="/watch">Watch</CustomLink>
                <CustomLink to="/give">Give</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>
                {children}
            </Link>
        </li>
    )
}