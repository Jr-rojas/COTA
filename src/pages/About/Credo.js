import HeroAlt from "../../components/heroSection/HeroAlt"
import { Link } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Accordion } from "react-bootstrap";

export default function Credo(){
    useDocumentTitle("Credo- COTA")

    return(
        <>
            <HeroAlt img="" page="Nuestro Credo del Ministerio" hasGradient={true} />
            <section className="bg-light">
                <div className="container-xl">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/about">Sobre Nosotros</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Credo</li>
                        </ol>
                    </nav>
                </div>
            </section>
            <section className="bg-light">
                <div className="container-lg p-5">
                    <h2 className="transformTextN">Levantando una generacion para Dios con bases solidas, en la palabra de Dios</h2>
                </div>
                <div className="container-lg">
                    <ol className="py-4">
                        <li className="fw-bold fs-3">Dios</li>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>¿Quién es Dios?</Accordion.Header>
                                <Accordion.Body>
                                    En un único y <strong className="text-decoration-underline fw-semibold">solo Dios</strong> manifestado en tres personas: Padre, Hijo y Espíritu Santo
                                    <br/>
                                    <em>1 Juan 5:7, Elohim Genesis 1:26</em>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3">La Biblia</li>
                        <Accordion>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>¿Que es la Biblia?</Accordion.Header>
                                <Accordion.Body>
                                    La Biblia, es la palabra de Dios, divinamente inspirada, por El Espíritu Santo, que lo revelo a los Santos hombres de Dios.
                                    <br/>
                                    <em>2 Timoteo 3:16, 2 Pedro 1:21, 1 Pedro 1:25, Apocalipsis 22:19, 1 Tim. 4:9</em>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3">Hombre</li>
                        <Accordion>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>¿Jesus?</Accordion.Header>
                                <Accordion.Body>
                                Que Jesús nació de una virgen. 100 porciento Dios, 100 porciento Hombre
                                <br/>
                                <em>Lucas 1:26-38, Lucas 2:1-7</em>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3">Humanidad</li>
                        <Accordion>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>¿Quién nos creo?</Accordion.Header>
                                <Accordion.Body>
                                En la creación original del hombre.
                                <br/>
                                <em>Génesis 1:26-28</em>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3">Matrimonio</li>
                        <Accordion>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>¿Qué es el matrimonio?</Accordion.Header>
                                <Accordion.Body>
                                El Matrimonio, entre un Hombre y Una Mujer, Diseñado por  Dios, para toda la Vida.
                                <br/>
                                <em>Génesis 2:21-25, Mateo 5:31-32, Mateo19:3-6</em>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3">Caída Del Hombre</li>
                        <Accordion>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>¿Caída?</Accordion.Header>
                                <Accordion.Body>
                                En la caída del hombre, por causa del pecado y en su redención obtenida en la Cruz del Calvario, Por Jesucristo.
                                <br/>
                                <em>Colosenses 2:14-15, Gálatas 3:13</em>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3">Salvación</li>
                        <Accordion>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>¿Cuál Salvación?</Accordion.Header>
                                <Accordion.Body>
                                En la salvación, sin obras, a través de la fe, y en el reconocimiento del sacrificio de Jesucristo.
                                <br/>
                                <em>Juan 3:16, Efesios 2:8-9 </em>
                                <br/>
                                <ol type="a">
                                    <li>
                                        En la necesidad y realidad, del arrepentimiento genuino, como paso previo a la salvación, con un cambio de mente y de Corazón, respecto al pecado
                                        <br/>
                                        <em>Marcos 1:15, Hechos 3:19, Hechos 2:21, 2 Corintios. 1:9-10.</em>
                                        <br/>
                                        Como Resultado de haber aceptado a Jesús.
                                    </li>
                                    <li>
                                        Regeneración
                                        <br/>
                                        <em>Tito 3:5</em>
                                    </li>
                                    <li>
                                        Justificación
                                        <br/>
                                        <em>Romanos 5:25, 1 Corintios 1:13, Romanos 5:16-18</em>
                                    </li>
                                    <li>
                                        Santificación
                                        <br/>
                                        <em>Romanos 6:22, 1 Corintios 1:30</em>
                                    </li>
                                </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3">Resurrección</li>
                        <Accordion>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>¿Resurrección?</Accordion.Header>
                                <Accordion.Body>
                                Que Jesús murió y resucitó al tercer día, ascendió a los cielos y está sentado a la diestra del Padre. 
                                <br/>
                                <em>1 Corintios 15:3-8, Hebreos 1:3</em>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3">Espíritu Santo </li>
                        <Accordion>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header>¿Quién es Espíritu Santo?</Accordion.Header>
                                <Accordion.Body>
                                Que el representante legal de Dios en la tierra es el Espíritu Santo.
                                <br/>
                                <em>Juan 16:7-15</em>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3">La Santificación </li>
                        <Accordion>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header>¿Santificación?</Accordion.Header>
                                <Accordion.Body>
                                En la santificación del creyente, por la obra de Jesucristo, Su Palabra y el Espíritu Santo.
                                <br/>
                                <em>1 Pedro 1:15-23</em>
                                <ol type="a">
                                    <li>
                                    <strong>En la Regeneración</strong> o cambio espiritual que se produce en el Corazón del  hombre, Cuando acepta a Jesús, como señor y Dios, por obra y Gracia del Espíritu Santo y por el cual se trasforma la naturaleza pecaminosa y puede responder por fe a Dios y vivir de acuerdo a su voluntad.
                                    <br/>
                                    <em>San Juan 3:3-5, Tito 3:5-7</em>
                                    </li>
                                </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3">Bautismo en Agua</li>
                        <Accordion>
                            <Accordion.Item eventKey="10">
                                <Accordion.Header>¿Bautismo en agua?</Accordion.Header>
                                <Accordion.Body>
                                el Bautismo en agua, por inmersión. Después de haber aceptado a Jesús como Señor y Salvador.
                                <br/>
                                <em>Romanos 6:3-8</em>
                                <ol type="a">
                                    <li>
                                    En el nombre del <strong>Padre, del Hijo, y del Espíritu Santo</strong>
                                    <br/>
                                    <em>Mateo 28:19, Hechos 2:41, Hechos 8:12, Hechos 10:47, Romanos 6:3-5</em>
                                    </li>
                                </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3">Bautismo en el Espíritu Santo</li>
                        <Accordion>
                            <Accordion.Item eventKey="11">
                                <Accordion.Header>¿Bautismo en el Espíritu Santo?</Accordion.Header>
                                <Accordion.Body>
                                En el Bautismo en el Espíritu Santo, con la evidencia de hablar, en otras lenguas. 
                                <br/>
                                <em>Hechos 2:4</em>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3">En la Iglesia</li>
                        <Accordion>
                            <Accordion.Item eventKey="12">
                                <Accordion.Header>¿Iglesia?</Accordion.Header>
                                <Accordion.Body>
                                En la Iglesia como el Cuerpo místico de Cristo.  Como cuerpo, y Cabeza de Cristo. Lo integran todos los que creen en Jesús  y le reciben como Señor y Salvador personal.
                                <br/>
                                <em>Colosenses 1:18, Efesios 2:16-20, Juan 10:16, Hechos 2:47, 1 Corintios 12:12-31, Lucas 22:14-20, 1 Corintios 11:23-26</em>
                                <ol type="a">
                                    <li>Como la Novia</li>
                                    <li>Como Ministerio</li>
                                    <li>Iglesia Universal</li>
                                </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3">Gobierno Bíblico de la Iglesia</li>
                        <Accordion>
                            <Accordion.Item eventKey="13">
                                <Accordion.Header>¿Que es el gobierno bíblico de la iglesia?</Accordion.Header>
                                <Accordion.Body>
                                Creemos en el Gobierno Bíblico de la Iglesia, basado en los 5 Ministerios: Apóstol, Profeta, Evangelista, Pastor y Maestro.
                                <br/>
                                <em>Efesios 4:11-13, 1 Corintios 12:5</em>
                                <ol type="a">
                                    <li>Cada Ministro puede tener su propia familia
                                        <br/>
                                        <em>1 Corintios 7:2; 9:5, 1 Timoteo 3:2, 1 Tesalonicenses 4:3-8</em>
                                    </li>
                                </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3">Sanidad Divina </li>
                        <Accordion>
                            <Accordion.Item eventKey="14">
                                <Accordion.Header>¿Sanidad divina?</Accordion.Header>
                                <Accordion.Body>
                                En la sanidad divina, a través de la obra redentora del Señor Jesús.
                                <br/>
                                <ol type="a">
                                    <li>Con Milagros Creativos. 
                                        <br/>
                                        <em>Isaías 53:4-6, 1 Pedro 2:24</em>
                                    </li>
                                </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3">Diezmo y Ofrenda </li>
                        <Accordion>
                            <Accordion.Item eventKey="15">
                                <Accordion.Header>¿Que es el diezmo y ofrenda?</Accordion.Header>
                                <Accordion.Body>
                                Creemos en la aportación de diezmos y ofrendas, como un Principio de: Agradecimiento, Siembra y Obediencia.
                                <br/>
                                <em>Genesis 14:20, Genesis 28:22, Malaquias 3:8-11, 1 Corintios 9:8-9, Hechos 7:1-9</em>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3">Ciudadanía del Creyente</li>
                        <Accordion>
                            <Accordion.Item eventKey="16">
                                <Accordion.Header>¿Ciudadanía?</Accordion.Header>
                                <Accordion.Body>
                                Creemos en la doble ciudadanía del creyente.
                                <br/>
                                <ol type="a">
                                    <li>Somos ciudadanos del cielo.
                                        <br/>
                                        <em>Filipenses 3:20</em>
                                    </li>
                                    <li>
                                    Somos Ciudadanos del lugar donde Habitamos, Pueblo, Ciudad, País. Damos el honor y respeto.  Correspondientes. Al respeto, respeto, al honra, honra.
                                    <br/>
                                    <em>Romanos 13:1-7, Mateo 22:21, Tito 3:1, 1 Pedro 2:13-15</em>
                                    </li>
                                </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3">Libre Albedrio</li>
                        <Accordion>
                            <Accordion.Item eventKey="17">
                                <Accordion.Header>¿Que es libre albedrio?</Accordion.Header>
                                <Accordion.Body>
                                Creemos en el Libre Albedrio del hombre, que fue creado libre y es personalmente responsable ante Dios. Nuestra relación con Dios, es algo personal, de nuestra propia voluntad.
                                <br/>
                                <em>Josue 24:15, Lucas 9:23, Apocalipsis 3:20</em>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3">Santa Cena</li>
                        <Accordion>
                            <Accordion.Item eventKey="18">
                                <Accordion.Header>¿Santa cena?</Accordion.Header>
                                <Accordion.Body>
                                La participación de la Santa Cena, hasta que Jesús Venga.
                                <br/>
                                <em>Mateo 26:26-29, 1 Corintios 11:23-26</em>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3"> Rapto (Arrebatamiento)</li>
                        <Accordion>
                            <Accordion.Item eventKey="19">
                                <Accordion.Header>¿Rapto (Arrebatamiento)?</Accordion.Header>
                                <Accordion.Body>
                                Creemos, en el Rapto (arrebatamiento)
                                <br/>
                                <em>1 Tesalonicenses 4:16-17</em>
                                <ol type="a">
                                    <li> A levantar su Iglesia y resucitar a los Santos.
                                        <br/>
                                        <em>1 Corintios 15:52, 1 Tesalonicenses 4:15-17</em>
                                    </li>
                                    <li>
                                    Después del Rapto, comienza la gran tribulación.
                                    </li>
                                </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3"> Segunda Venida de Jesucrito</li>
                        <Accordion>
                            <Accordion.Item eventKey="20">
                                <Accordion.Header>¿Segunda venida?</Accordion.Header>
                                <Accordion.Body>
                                En la visible Segunda venida de Jesucristo.
                                <br/>
                                <em>Hechos 1:10-11</em>
                                <ol type="a">
                                    <li> Para reinar sobre la tierra por mil años.
                                        <br/>
                                        <em>Apocalipsis 5:10, 20:5-6, Judas 14</em>
                                    </li>
                                    <li>
                                    Donde el León y la oveja comparten juntos.
                                    </li>
                                </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li className="fw-bold fs-3">Juicio Final</li>
                        <Accordion>
                            <Accordion.Item eventKey="21">
                                <Accordion.Header>¿Juicio final?</Accordion.Header>
                                <Accordion.Body>
                                En el Juicio Final
                                <br/>
                                <ol type="a">
                                    <li>  La salvación y Premiación eterna de los Justos.
                                        <br/>
                                    </li>
                                    <li>
                                    Satanás será condenado y lanzado al Lago de fuego, juntamente con sus ángeles por la Eternidad.
                                    <br/>
                                    <em>Apocalipsis 20:10-15; 21:1-27</em>
                                    </li>
                                </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ol>
                </div>
                <div className="container-lg p-4">
                    <h2 className="transformTextN">Creemos en estos puntos básicos de la Biblia, Dios hablo y El lo hará.</h2>
                </div>
            </section>
        </>
    )
}