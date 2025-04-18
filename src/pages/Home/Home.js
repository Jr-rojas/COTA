import Hero from '../../components/heroSection/Hero'
import FeaturedEvents from '../../layouts/FeaturedEvents'
import { nextEvents } from '../../components/eventsCard/eventsSlice'
import Button from '../../components/button/Button'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import { motion } from 'motion/react'

import leadPastor from "../../app/shared/img/leadPastor.jpg"
import churchLogo from "../../app/shared/img/cota-oldLogo.jpg"
import styles from './Home.module.scss'
import fanStyles from './HomeFancy.module.css'


export default function Home() {
    useDocumentTitle("Church of the Americas")
    const upcomingEvents = nextEvents();

    return (
        <>
            <Hero title="Bienvenidos" />

            {/* NUESTRA HISTORIA SECTION */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <motion.div 
                        className={styles.content}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="display-3 fw-bold lh-1">Nuestra Historia</h1>
                        <hr className={styles.hr} />
                        <p className={styles.p}>En C.O.T.A United, somos más que un ministerio, somos una <strong> familia unida</strong> por la fe y el propósito de Dios. Creemos que hemos sido llamados para este tiempo, para crecer en todas las áreas de nuestra vidas. Descubre nuestra misión, visión y estrategia que nos impulsan a transformar vidas y establecer Su Reino en la Tierra.</p>
                        <Button
                            title="Leer Mas"
                            type="link"
                            link='/about'
                            bgColor="blue"
                            hoverColor="light"
                        />
                    </motion.div>
                    <motion.div 
                        className={styles.img} 
                        style={{ backgroundImage: `url(${churchLogo})` }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                </div>
            </section>

            {/* ENSANCHA LA VISION */}
            <section className={fanStyles.section}>
                <div className={fanStyles.container}>
                    <motion.div 
                        className={fanStyles.img}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    ></motion.div>
                    <motion.div 
                        className={fanStyles.content}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                        <div className={fanStyles.inner}>
                            <div className={fanStyles.heading}>
                                <h4 className={styles.h4}>Ensancha la</h4>
                                <h1 className="display-3 fw-bold lh-1">Vision</h1>
                            </div>
                            <hr className={fanStyles.hr} />
                            <p className={styles.p}>
                                Fuimos desafiados a ensanchar nuestra visión y prepararnos para lo que Dios quiere hacer en nosotros y a través de nosotros. Creemos que Dios nos llama a crecer, a expandirnos y a impactar generaciones. ¡Es tiempo de avanzar con fe y conquistar las promesas de Dios! <br /><br />
                                <p>📺 Revive este poderoso evento en Facebook y sé parte de lo que Dios está haciendo.</p>
                            </p>
                            <Button
                                title="watch"
                                type="external"
                                link="https://www.facebook.com/churchoftheamericas/videos/9026127274109862"
                                hoverColor="dark"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* EVENTS SECTION */}
            <section className={fanStyles.fanSection} >
                {/* <FeaturedEvents/> */}
                <div className='container my-5'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className={styles.content}>
                            <h4>Acompañanos</h4>
                            <h1 className="display-3 fw-bold lh-1">Proximos Eventos</h1>
                            <hr className={styles.hr} />
                        </div>
                    </motion.div>

                    {upcomingEvents.length > 0 ? (
                        <div className='items'>
                            {upcomingEvents.map((event) => {
                                return (<FeaturedEvents key={event.id} event={event} />)
                            })}
                        </div>
                    ) : (
                        <motion.div 
                            className='container'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.2 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <p className="text-light fw-bold fs-4 my-4">📅 ¡Estate pendiente de nuestros próximos eventos!</p>
                        </motion.div>
                    )}
                    {upcomingEvents.length > 0 && (
                        <div className='buttons lg hover-dark'>
                            <Button
                                title="Mas Eventos"
                                type="link"
                                link="/events"
                                hoverColor="dark"
                            />
                        </div>
                    )}
                </div>
            </section>

            {/* TOMA TU LLAMADO */}
            {/*  <section className={fanStyles.sectionB}>
                <div className={fanStyles.containerR}>
                    <div className={fanStyles.contentR}>
                        <div className={fanStyles.innerR}>
                            <div className={fanStyles.heading}>
                                <h4 className={styles.h4}>TOMA TU</h4>
                                <h1 className="display-2 fw-bold lh-1">LLAMADO</h1>
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
            </section> */}
            {/* Unete con Nosostros */}
            <section className={styles.sectionB}>
                <div className={styles.container2}>
                    <motion.div 
                        className={styles.img2} 
                        style={{ backgroundImage: `url(${leadPastor})` }} 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <motion.div 
                        className={styles.content2}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h4>Unete con nosostros</h4>
                        <h1 className="display-3 fw-bold lh-1">En Linea</h1>
                        <hr className={styles.hr2} />
                        <p className={styles.p}>Te invitamos a ser parte de nuestras transmisiones en vivo desde la iglesia central en Los Ángeles, CA, con nuestro Apóstol Erasmo. No te pierdas un tiempo de palabra, adoración y transformación en la presencia de Dios.
                            <br />
                            <strong>📅 Horarios de servicio:</strong>
                            <br />📍 Miércoles a las 6:00 PM (Hora del Pacífico)
                            <br />📍 Domingo a las 10:00 AM (Hora del Pacífico)
                            <br /><strong>📺 Conéctate y experimenta el mover de Dios en vivo.</strong></p>
                        <Button
                            title="En Vivo"
                            type="external"
                            link="https://www.facebook.com/churchoftheamericas"
                            hoverColor="dark"
                        />
                    </motion.div>
                </div>
            </section>
        </>
    )
}