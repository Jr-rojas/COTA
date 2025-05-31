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
        <div className="bg-white">
            <div className="container-xl">
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
                        <CustomLink to="/about" closeMenu={closeMenu}>Sobre Nosotros</CustomLink>
                        <CustomLink to="/iglesias" closeMenu={closeMenu}>Iglesias</CustomLink>
                        <CustomLink to="/eventos" closeMenu={closeMenu}>Eventos</CustomLink>
                        <CustomLink to="/medios" closeMenu={closeMenu}>Medios</CustomLink>
                        <CustomLink to="/siembra" closeMenu={closeMenu}>Siembra</CustomLink>
                    </ul>
                </nav>
            </div>
        </div>
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