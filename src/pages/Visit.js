import useDocumentTitle from "../hooks/useDocumentTitle"
import ChurchLocationList from "../components/churchesCard/churchesList"
import HeroAlt from "../components/heroSection/HeroAlt"

import visitImg from "../app/shared/img/visit.jpg"
import welcomeImg from "../app/shared/img/welcomeFamily.jpg"
import visitStyles from "./Visit.module.css"


export default function Visit() {
    useDocumentTitle("Iglesias - COTA")

    return (
        <>
            <HeroAlt img={visitImg} page="Iglesias" hasGradient={true} />
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
                        <p>En Church of the Americas, creemos en crear un ambiente para toda la familia donde todos puedan experimentar el amor y la gracia de Dios. Ya sea que nos acompañes en una reunión íntima en casa o en un servicio con un equipo de ministros completo, cada servicio está diseñado para ayudarte a conectarte con Dios y con los demás. Cada ubicación de la iglesia está dirigida por su propio pastor, quien trae enseñanzas y guía únicas cada semana. No importa el tamaño o el ambiente, estamos unidos por un propósito común: <strong className="fw-bold">Anunciar, las Buenas nuevas de Salvación, Que Jesús, Nos redimio y bendijo, para bendecir a otros, y Hacer de cada persona un Discípulo y formar el Carácter de Cristo En Él o Ella</strong>. Aquí, cada persona, sin importar su edad, encuentra un lugar para crecer espiritualmente y compartir en comunidad, porque somos un lugar para toda la familia.</p>
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
            {/* <section className={visitStyles.forEveryone}>
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
            </section> */}
            {/* <section className={visitStyles.endingWelcome}>
                <div>
                    <h4>Evento Anual</h4>
                    <div className='buttons lg la hover-dark'>
                        <a href='/' >Learn</a>
                    </div>
                </div>
            </section> */}
        </>
    )
}