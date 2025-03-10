import useDocumentTitle from "../hooks/useDocumentTitle";
import styles from "./About.module.scss"


export default function About() {
    useDocumentTitle("Sobre Nosotros - COTA")

    return (
        <>
            <section className="bg-light text-center py-5 ">
                <div className="container-xl my-2">
                    <h1 className="transformTextN lh-sm">Church of the Americas <span className="text-danger">levantando una generacion para Dios.</span></h1>
                    <p className="mt-4">Con bases sólidas en Su Palabra, seguimos el llamado de expandir Su reino, guiados por una comunidad de pastores y líderes comprometidos con la fe, la misión y el crecimiento espiritual.</p>
                </div>
            </section>
            <div className="wave-container"></div>
            <section className="bg-dark py-3 text-light">
                <div className="container-xl">
                    <h4>Conoce a nuestro Apóstol</h4>
                    <h2 className="lh-sm">Pastores Erasmo y Elvia Solis</h2>
                    <div className="row">
                        <div className={`col-lg ${styles.img}`}>
                            <img className="img-fluid rounded-3" src="/shared/images/pastors/PastorErasmo.jpg" alt="Pastor Erasmo & Elvira" />
                        </div>
                        <div className="my-2 p-3 col-lg">
                            <p>
                            Nació en la Magdalena, Puebla, México. Su ministerio comenzó a la edad de 17 años como maestro de niños, líder de células, líder de jóvenes en la iglesia local, directivo de  <em>EJID</em> (<em>Esfuerzo Juvenil de Puebla</em>). Comenzó una obra en El Poblado de San Pedro la Joya, Tepeaca, Puebla, México, Cancún, Quintana Roo, México y posteriormente enviado a Los Angeles, California.
                            <br/>
                            <br/>
                            En el año 2010, fue confirmado su llamado apostólico en nuestro evento anual <em>Aviva El Fuego</em>. Actualmente es director  de los ministerios <em>Church Of the Américas</em> (<em>COTA UNITED</em>) radicando en Los Angeles, California.
                            <br/>
                            <br/>
                            <em>Creo que para amar a Dios, se necesita tener un corazón apasionado por El y un oido sintonizado a su voz.</em>
                            <br/>
                            –Apostol Erasmo Solis
                            <br/>
                            <br/>
                            Una de la cosas que Dios nos a enviado es al rescate a un mundo necesitado. Nosotros somos agentes enviados, a ayudar a las personas a encontrar el propósito de Dios en sus vidas. Una persona con visión, siempre tendrá algo que hacer, sin justificar las circunstancias.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}