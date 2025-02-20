import useDocumentTitle from "../hooks/useDocumentTitle"
import ChurchLocationList from "../components/churchesCard/churchesList"
import HeroAlt from "../components/heroSection/HeroAlt"

import visitImg from "../app/shared/img/visit.jpg"
import welcomeImg from "../app/shared/img/welcomeFamily.jpg"
import visitStyles from "./Visit.module.css"


export default function Visit() {
    useDocumentTitle("Visit - COTA")

    return (
        <>
            <HeroAlt img={visitImg} page="Visit" hasGradient={true} />
            <section className={visitStyles.smallSection}>
                <div>
                    <h1>Una Familia, <span className={visitStyles.colorText}>Múltiple Ubicaciones.</span></h1>
                </div>
            </section>
            <ChurchLocationList />
            <section className={visitStyles.wte}>
                <div>
                    <div>
                        <h2>Nuestra Experiencia</h2>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <br />
                        <p>Quiere <a href="/about">leer mas</a> sobre COTA United?</p>
                    </div>
                    <div>
                        {/* <div className={visitStyles.img}></div> */}
                        <img src={welcomeImg} alt="Girl in a jacket" className={visitStyles.img}/>
                    </div>
                    <div className={visitStyles.blurryBackground}></div>
                </div>
            </section>
            <section className={visitStyles.forEveryone}>
                <div className={visitStyles.textGroup}>
                    <h4>Para toda</h4>
                    <h1>LA FAMILIA</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  </p>
                </div>
                <div className={visitStyles.groupSquares}>
                    <a href="/cotakids" className={visitStyles.square}><h3>COTA KIDS</h3><hr /></a>
                    <a href="/cotakids" className={visitStyles.square}><h3>COTA YOUTH</h3><hr /></a>
                    <a href="/cotakids" className={visitStyles.square}><h3>EVENTS</h3><hr /></a>
                    <a href="/cotakids" className={visitStyles.square}><h3>CELULAS</h3><hr /></a>
                </div>
            </section>
            <section className={visitStyles.endingWelcome}>
                <div>
                    <h4>Evento Anual</h4>
                    <div className='buttons lg la hover-dark'>
                        <a href='/' >Learn</a>
                    </div>
                </div>
            </section>
        </>
    )
}