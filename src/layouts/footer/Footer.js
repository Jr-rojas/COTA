import { Link, useMatch, useResolvedPath } from "react-router-dom";

import { selectAllChurches } from '../../components/churchesCard/churchesSlice';

import FooterStyles from './Footer.module.css'


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
                        <h5>LIVE STREAMS</h5>
                        <a href="https://www.facebook.com/churchoftheamericas" target="_blank" rel="noopener noreferrer">Domingo @ 6PM</a>
                        <br />
                        <h5>QUICKLINKS</h5>
                        <CustomLink to="/visit" onClick={handleScrollToTop}>Visit</CustomLink>
                        <CustomLink to="/events" onClick={handleScrollToTop}>Events</CustomLink>
                        <CustomLink to="/watch" onClick={handleScrollToTop}>Watch</CustomLink>
                        <CustomLink to="/give" onClick={handleScrollToTop}>Give</CustomLink>
                        <CustomLink to="/logIn">Account</CustomLink>
                    </div>
                    <div className={FooterStyles.container}>
                        <h5>LOCATIONS</h5>
                        <ul>
                            {locations.map((location) => {
                                return (<Link to={`/visit/${location.id}`} key={location.id} className={FooterStyles.list} onClick={handleScrollToTop}><li>{location.city}</li></Link>)
                            })
                            }
                        </ul>
                    </div>
                    <div className={FooterStyles.container}>
                        <h5>Stay Connected</h5>
                        <form className={FooterStyles.form}>
                            <label for="email">Newsletter Sign up</label>
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