import visitStyles from "./Visit.module.css"
import ChurchLocationList from "../features/churches/churchesList"

export default function Visit(){
    return(
        <>
            <section className={visitStyles.heroSection}>
                <div>
                    <h1>Visit</h1>
                </div>
            </section>
            <section className={visitStyles.smallSection}>
                <div>
                    <h1>One Family. <span className={visitStyles.colorText}>Multiple Locations.</span></h1>
                </div>
            </section>
            <ChurchLocationList/>
            {/* <section className={visitStyles.locations}>
                <div className={visitStyles.locationGrid}>
                    <div className={visitStyles.churchCard}>
                        <div className={visitStyles.cardImg}></div>
                        <div className={visitStyles.churchCardBody}>
                            <h3 className={visitStyles.title}>COTA - BAKERSFIELD</h3>
                            <div className={visitStyles.cardGroup}>
                                <div className={visitStyles.info}>
                                    <p><strong>Address</strong> <br/>1030 Niles St.<br/> Bakersfield,CA 93307</p>
                                    <p><strong>Domingo</strong> 6:00 PM</p>
                                </div>
                                <div className='buttons hover-dark-inverted'>
                                    <a href="/">direccion</a>
                                </div>
                            </div>
                            <div className='buttons lg la hover-dark'>
                                    <a href="/">Mas Informacion</a>
                                </div>
                        </div>
                    </div>
                    <div className={visitStyles.churchCard}>
                        <div className={visitStyles.cardImg}></div>
                        <div className={visitStyles.churchCardBody}>
                            <h3 className={visitStyles.title}>COTA - BAKERSFIELD</h3>
                            <div className={visitStyles.cardGroup}>
                                <div className={visitStyles.info}>
                                    <p><strong>Address</strong> <br/>1030 Niles St.<br/> Bakersfield,CA 93307</p>
                                    <p><strong>Domingo</strong> 6:00 PM</p>
                                </div>
                                <div className='buttons hover-dark-inverted'>
                                    <a href="/">direccion</a>
                                </div>
                            </div>
                            <div className='buttons lg la hover-dark'>
                                    <a href="/">Mas Informacion</a>
                                </div>
                        </div>
                    </div>
                    <div className={visitStyles.churchCard}>
                        <div className={visitStyles.cardImg}></div>
                        <div className={visitStyles.churchCardBody}>
                            <h3 className={visitStyles.title}>COTA - BAKERSFIELD</h3>
                            <div className={visitStyles.cardGroup}>
                                <div className={visitStyles.info}>
                                    <p><strong>Address</strong> <br/>1030 Niles St.<br/> Bakersfield,CA 93307</p>
                                    <p><strong>Domingo</strong> 6:00 PM</p>
                                </div>
                                <div className='buttons hover-dark-inverted'>
                                    <a href="/">direccion</a>
                                </div>
                            </div>
                            <div className='buttons lg la hover-dark'>
                                    <a href="/">Mas Informacion</a>
                                </div>
                        </div>
                    </div>
                    <div className={visitStyles.churchCard}>
                        <div className={visitStyles.cardImg}></div>
                        <div className={visitStyles.churchCardBody}>
                            <h3 className={visitStyles.title}>COTA - BAKERSFIELD</h3>
                            <div className={visitStyles.cardGroup}>
                                <div className={visitStyles.info}>
                                    <p><strong>Address</strong> <br/>1030 Niles St.<br/> Bakersfield,CA 93307</p>
                                    <p><strong>Domingo</strong> 6:00 PM</p>
                                </div>
                                <div className='buttons hover-dark-inverted'>
                                    <a href="/">direccion</a>
                                </div>
                            </div>
                            <div className='buttons lg la hover-dark'>
                                    <a href="/">Mas Informacion</a>
                                </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}