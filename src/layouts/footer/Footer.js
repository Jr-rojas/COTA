import { Link, useMatch, useResolvedPath } from "react-router-dom";

import { selectAllChurches } from '../../components/churchesCard/churchesSlice';

import FooterStyles from './Footer.module.scss'


export default function Footer() {
    const locations = selectAllChurches();

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }

    return (
        <>
            <section className={FooterStyles.section}>
                <div className={FooterStyles.content}>
                    <div className={FooterStyles.container}>
                        <h5>En Vivo</h5>
                        <a href="https://www.facebook.com/churchoftheamericas" target="_blank" rel="noopener noreferrer" className="mb-4">Domingo @ 6PM</a>
                        <br/>
                        <h5>Navegación </h5>
                        <CustomLink to="/about" onClick={handleScrollToTop}>Sobre Nosotros</CustomLink>
                        <CustomLink to="/iglesias" onClick={handleScrollToTop}>Iglesias</CustomLink>
                        <CustomLink to="/eventos" onClick={handleScrollToTop}>Eventos</CustomLink>
                        <CustomLink to="/medios" onClick={handleScrollToTop}>Medios</CustomLink>
                        <CustomLink to="/siembra" onClick={handleScrollToTop}>Siembra</CustomLink>
                        {/* <CustomLink to="/logIn">Account</CustomLink> */}
                    </div>
                    <div className={FooterStyles.container}>
                        <h5>Iglesias</h5>
                        <ul>
                            {locations.map((location) => {
                                return (<Link to={`/iglesias/${location.churchName}`} key={location.id} className={FooterStyles.list} onClick={handleScrollToTop}><li>{location.city}</li></Link>)
                            })
                            }
                        </ul>
                    </div>
                    <div className={FooterStyles.container}>
                        <h5>Conectate</h5>
                        <form className={FooterStyles.form}>
                            <label for="email">Únete a Nuestro Boletín </label>
                            <span>
                                <input type="email" id="email" name="email" />
                                <input type="submit" id="submit" value="GO" />
                            </span>
                        </form>
                    </div>
                </div>
            </section>
            <section className={FooterStyles.section2}>
                <div>
                    <h5>
                        © CHURCH OF THE AMERICAS
                    </h5>
                </div>
            </section>
        </>
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