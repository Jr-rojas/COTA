import Hero from '../components/heroSection/Hero'
import FeaturedEvents from '../layouts/FeaturedEvents'
import { nextEvents } from '../components/eventsCard/eventsSlice'
import Button from '../components/button/Button'
import useDocumentTitle from '../hooks/useDocumentTitle'

import image from "../app/shared/img/leadPastor.jpg"
import youthCampImg from "../app/shared/img/youth_camp.png"
import styles from './Home.module.css'
import fanStyles from './HomeFancy.module.css'


export default function Home() {
    useDocumentTitle("Home - COTA")
    const upcomingEvents = nextEvents();

    return (
        <>
            <Hero title="Bienvenidos" />

            {/* NUESTRA HISTORIA SECTION */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1 className={styles.h1}>Nuestra Historia</h1>
                        <hr className={styles.hr} />
                        <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Button
                            title="Leer Mas"
                            type="link"
                            link='/about'
                            bgColor="blue"
                            hoverColor="light"
                            disabled={true}
                        />
                    </div>
                    <div className={styles.img} style={{ backgroundImage: `url(${image})` }} />
                </div>
            </section>

            {/* COTA UNITED SECTION */}
            <section className={fanStyles.section}>
                <div className={fanStyles.container}>
                    <div className={fanStyles.img}></div>
                    <div className={fanStyles.content}>
                        <div className={fanStyles.inner}>
                            <div className={fanStyles.heading}>
                                <h4 className={styles.h4}>UNA FAMILIA</h4>
                                <h1 className={fanStyles.h1}>COTA UNITED</h1>
                            </div>
                            <hr className={fanStyles.hr} />
                            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <Button
                                title="Learn"
                                type="link"
                                link="/"
                                hoverColor="dark"
                                disabled={true}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* EVENTS SECTION */}
            <section className={fanStyles.fanSection} >
                {/* <FeaturedEvents/> */}
                <div className='container'>
                    <div className={styles.content}>
                        <h4>Acompañanos</h4>
                        <h1 className={styles.h1}>Proximos Eventos</h1>
                        <hr className={styles.hr} />
                    </div>
                    <div className='items'>
                        {upcomingEvents.map((event) => {
                            return (<FeaturedEvents key={event.id} event={event} />)
                        })}
                    </div>
                    <div className='buttons lg hover-dark'>
                        <Button
                                title="Mas Eventos"
                                type="link"
                                link="/events"
                                hoverColor="dark"
                            />
                    </div>
                </div>
            </section>
            {/* TOMA TU LLAMADO */}
            <section className={fanStyles.sectionB}>
                <div className={fanStyles.containerR}>
                    <div className={fanStyles.contentR}>
                        <div className={fanStyles.innerR}>
                            <div className={fanStyles.heading}>
                                <h4 className={styles.h4}>TOMA TU</h4>
                                <h1 className={fanStyles.h1}>LLAMADO</h1>
                            </div>
                            <hr className={fanStyles.hrR} />
                            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <Button
                                title="Detalles"
                                type="link"
                                link="/"
                                hoverColor="dark"
                                disabled={true}
                            />
                            <Button
                                title="Siembra"
                                type="link"
                                link="/give"
                                hoverColor="dark"
                            />
                        </div>
                    </div>
                    <div className={fanStyles.imgR}></div>
                </div>
            </section>
            {/* COTA KIDS & COTA YOUTH */}
            <section className={styles.sectionB}>
                <div className={styles.container2}>
                    <div className={styles.img2} style={{ backgroundImage: `url(${youthCampImg})` }} />
                    <div className={styles.content2}>
                        <h1 className={styles.h1}>COTA Kids & Cota Youth</h1>
                        <hr className={styles.hr2} />
                        <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Button
                            title="Kids"
                            type="link"
                            link="/"
                            hoverColor="dark"
                            disabled={true}
                        />
                        <Button
                            title="Youth"
                            type="link"
                            link="/"
                            hoverColor="dark"
                            disabled={true}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}