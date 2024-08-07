import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [isToggler, setToggler] = useState(false)

    const toggleNav = () => {
        setToggler(!isToggler)
    };

    const closeMenu = () => {
        setToggler(false)
    };

    return (
        <nav className={`nav ${isToggler ? 'active' : ''}`}>
            <Link to="/" className="site-title">
                <img src="/cota-logo.png" alt="COTA logo" width="50" height="50" />
                <p>Church of <br />
                    the Americas</p>
            </Link>
            <div className="nav-toggle" onClick={toggleNav}>
                <FontAwesomeIcon icon={isToggler ? faTimes : faBars} size="lg"/>
            </div>
            <ul>
                <CustomLink to="/visit" closeMenu={closeMenu}>Visit</CustomLink>
                <CustomLink to="/events" closeMenu={closeMenu}>Events</CustomLink>
                <CustomLink to="/watch" closeMenu={closeMenu}>Watch</CustomLink>
                <CustomLink to="/give" closeMenu={closeMenu}>Give</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, closeMenu, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props} onClick={closeMenu}>
                {children}
            </Link>
        </li>
    )
}