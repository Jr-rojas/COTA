import Hero from '../components/Hero'
import styles from './Home.module.css'
import fanStyles from './HomeFancy.module.css'

export default function Home(){
    return(
        <>
            <Hero title="Bienvenidos"/>

            {/* NUESTRA HISTORIA SECTION */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1 className={styles.h1}>Nuestra Historia</h1>
                        <hr className={styles.hr}/>
                        <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className='buttons lg la hover-light'>
                            <a href="/">Leer Mas</a>
                        </div>
                    </div>
                    <div className={styles.img}/>
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
                            <hr className={fanStyles.hr}/>
                            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div className='buttons lg la hover-dark'>
                                <a href='/' >Learn</a>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>

            {/* EVENTS SECTION */}
            <section className={fanStyles.fanSection} >
                <div className='container'>
                    <div className={styles.content}>
                        <h4>Acompañanos</h4>
                        <h1 className={styles.h1}>Proximos Eventos</h1>
                        <hr className={styles.hr}/>
                    </div>
                    <div className='items'>
                        <div className='item'>
                            <div className='box-header'>
                                <h2>Junio 12</h2>
                            </div>
                            <div className='box'>
                                <span><img src="../app/shared/img/youth_camp.png" alt='Youth camp' width="100%"/></span>
                                <span className='overlay'>
                                    <span className='title'>Camp</span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    <span className='buttons hover-dark'><a href='/events'>Mas Detalles</a></span>
                                </span>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='box-header'>
                                <h2>Julio 05</h2>
                            </div>
                            <div className='box'>
                                <span><img src="./shared/img/youth camp (2).png" alt='Youth camp' width="100%"/></span>
                                <span className='overlay'>
                                    <span className='title'>Bautizo</span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    <span className='buttons hover-dark'><a href='/events'>Mas Detalles</a></span>
                                </span>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='box-header'>
                                <h2>Agusto 23</h2>
                            </div>
                            <div className='box'>
                                <span><img src="./shared/img/youth camp (3).png" alt='Youth camp' width="100%"/></span>
                                <span className='overlay'>
                                    <span className='title'>Encuentro</span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    <span className='buttons hover-dark'><a href='/events'>Mas Detalles</a></span>
                                </span>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='box-header'>
                                <h2>Septiembre 17</h2>
                            </div>
                            <div className='box'>
                                <span><img src="./shared/img/youth camp (1).png" alt='Youth camp' width="100%"/></span>
                                <span className='overlay'>
                                    <span className='title'>Pastores y Lideres</span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    <span className='buttons hover-dark'><a href='/events'>Mas Detalles</a></span>
                                </span>
                            </div>
                        </div>
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
                            <hr className={fanStyles.hrR}/>
                            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div className='buttons lg la hover-dark'>
                                <a href='/' >Detalles</a>
                                <a href='/' >sembrar</a>
                            </div>
                        </div> 
                    </div>
                    <div className={fanStyles.imgR}></div>
                </div>
            </section>
            {/* COTA KIDS & COTA YOUTH */}
            <section className={styles.sectionB}>
                <div className={styles.container2}>
                    <div className={styles.img2}/>
                    <div className={styles.content2}>
                        <h1 className={styles.h1}>COTA Kids & Cota Youth</h1>
                        <hr className={styles.hr2}/>
                        <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className='buttons lg la hover-dark'>
                            <a href="/">Kids</a>
                            <a href="/">Youth</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}