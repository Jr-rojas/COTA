import FooterStyles from './Footer.module.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Footer(){
    return(
        <>
            <section className={FooterStyles.section}>
                <div className={FooterStyles.content}>
                    <div className={FooterStyles.container}>
                        <h5>LIVE STREAMS</h5>
                        <p>Domingo</p>
                        <h5>QUICKLINKS</h5>
                        <CustomLink to="/visit">Visit</CustomLink>
                        <CustomLink to="/events">Events</CustomLink>
                        <CustomLink to="/watch">Watch</CustomLink>
                        <CustomLink to="/give">Give</CustomLink>
                    </div>
                    <div className={FooterStyles.container}>
                        <h5>LOCATIONS</h5>
                        <ul>
                            <li><a>Los Angeles, CA</a></li>
                            <li><a>Bakersfield, CA</a></li>
                            <li><a>Fresno, CA</a></li>
                            <li><a>Coachella, CA</a></li>
                            <li><a>Thousand Oaks, CA</a></li>
                            <li><a>Las Vegas, NV</a></li>
                            <li><a>Reno, NV</a></li>
                            <li><a>Glassboro, NJ</a></li>
                            <li><a>Denver, CO</a></li>
                            <li><a>Phenix, AZ</a></li>
                            <li><a>Albuquerque, NM</a></li>
                            <li><a>Ogden, UT</a></li>
                        </ul>
                    </div>
                    <div className={FooterStyles.container}>
                        <h5>Stay Connected</h5>
                        <form className={FooterStyles.form}>
                            <label for="email">Newsletter Sign up</label>
                            <span>
                                <input type="email" id="email" name="email"/>
                                <input type="submit" id="submit" value="GO"/>
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