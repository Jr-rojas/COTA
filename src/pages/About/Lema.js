import useDocumentTitle from "../../hooks/useDocumentTitle";
import HeroAlt from "../../components/heroSection/HeroAlt"
import { Link } from "react-router-dom";

export default function Lema(){
    useDocumentTitle("Lema- COTA")

    return(
        <>
            <HeroAlt img="" page="Nuestro Lema del Ministerio" hasGradient={true} />
            <section className="bg-light">
                <div className="container-xl">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/about">Sobre Nosotros</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Lema</li>
                        </ol>
                    </nav>
                </div>
            </section>
            <section className="bg-light">
                <div className="container-xl">
                    <div className="row py-5">
                        <div className="col-sm-3 p-3">
                            <img src="/cota-oldLogo.jpg" alt="COTA logo" className="img-fluid"/>
                        </div>
                        <div className="col-sm p-3">
                            <h2 className="mb-0">Jehová NISSI (Mi Bandera)</h2>
                            <h3 className="text-danger fs-5">Éxodo 17:15</h3>
                            <p>
                            <strong className="fw-bold text-uppercase lh-lg">Iglesia de las Américas:</strong>
                            <br/>
                            Somos, la Generación, que Dios ha levantado para este tiempo,
                            Por ello necesito, prepararme en todas las áreas de mi vida que Son:
                            Espiritual, Emocional, Intelectual, físico y social.
                            En Jesús, encontré sentido y Propósito a mi vida,
                            y ahora sé quien soy, donde estoy y hacia dónde voy.
                            Fui, diseñado, creado y Redimido por Jesús,
                            Su Gracia Me alcanzo, por que EL me ama.
                            <br/>
                            <br/>
                            <strong className="fw-semibold">La Biblia:</strong>
                            <br/>
                            Es la voz, Espada y la Guía, que me Exhorta, consuela y edifica,
                            hasta poder cumplir, el propósito de Dios en Mi Vida.
                            Yo hago, lo que la Biblia dice que puedo hacer
                            Yo tomo, lo que la Biblia dice que puedo tomar
                            Yo confieso, lo que la Biblia dice que puedo confesar.
                            En Jesús, encontré una: Misión, Visión y Estrategia:
                            <br/>
                            <br/>
                            <strong className="fw-semibold">MISION:</strong>
                            <br/>
                            Anunciar, las Buenas nuevas de Salvación, Que Jesús, Nos redimio y bendijo, para bendecir a otros, y Hacer de cada persona un Discípulo y formar el Carácter de Cristo En Él o Ella.
                            <br/>
                            <br/>
                            <strong className="fw-semibold">VISION:</strong>
                            <br/>
                            <strong>Ganar, Consolidar, Discipular y Enviar.</strong>
                            <br/>
                            <br/>
                            <strong className="fw-semibold">Estrategia:</strong>
                            <br/>
                            Seguir, Paso a Paso, Cada Proceso, Con un objetivo definido, que me lleve al cumplimiento, de cada una de las Promesas de Dios, a mi Vida, Familia Y Ministerio. Que Dios, cumpla su propósito en Mi, Y a través de Mi, Con un Corazón apasionado, y un oído sintonizado a la voz de Dios, para establecer su Reino aquí en la Tierra.
                            Mis Mejores días, meses y años están por venir.
                            Y las circunstancias no cambiaran mi propósito.
                            Lo Sueño, Lo creo, y veo cumplido en mí y mis Generaciones.
                            <br/>
                            <br/>
                            <strong>C.O.T.A UNITED:Mas que un Ministerio, una familia. Genesis 12:2,3</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}