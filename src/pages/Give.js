import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faEnvelope, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

import HeroAlt from "../components/heroSection/HeroAlt";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Button from "../components/button/Button";
import { FlexCard, FlexCenter } from "../components/Flex";
import { Container } from "../components/StyledContainer";
import { StyledCard } from "../components/StyledCard";

import image from "../app/shared/img/aposento.jpg"
import styles from './Home.module.scss';


export default function Give() {
    useDocumentTitle("Siembra - COTA")

    return (
        <>
           
            <section className='bg-light'>
                <FlexCenter flexDirection="column">
                    <Container>
                        <h1 className='mb-3'>Por qué sembramos</h1>
                        <p>En Church of the Americas, creemos en el poder de la siembra y en la importancia de dar con un corazón generoso. <strong><em>No podemos cosechar lo que no hemos sembrado; si no te gusta tu cosecha, cambia tu siembra</em></strong>. Así como en la vida espiritual, en nuestra comunidad y servicio, todo lo que ofrecemos—tiempo, recursos, amor y compasión—es una semilla que Dios hace crecer. Al dar con fe y propósito, sembramos un futuro de bendición, no solo para nosotros, sino para quienes nos rodean.</p>
                        <Button
                            type="external"
                            title="Siembra En Linea"
                            link="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=NLGLEFRCJNSB6&source=qr"
                            bgColor="blue"
                            hoverColor="dark"
                        />
                    </Container>
                </FlexCenter>
            </section>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h4 className={styles.h4}>Siembra a la Vision</h4>
                        <h1 className={styles.h1}>Aposento Alto</h1>
                        <hr className={styles.hr} />
                        <p className={styles.p}>El Aposento Alto es un lugar apartado, adquirido por el ministerio con la visión de ser el hogar para nuestros eventos como iglesia y un refugio de oración donde cada miembro puede acercarse a Dios en un ambiente de paz. Si este lugar ha sido de bendición para ti o si deseas ser parte de su crecimiento, te invitamos a sembrar en esta obra para que continúe siendo un espacio de encuentro con la presencia de Dios.</p><br/>
                        <p>¡Únete a nosotros en este proyecto de fe y siembra hoy mismo! 🌱</p>
                        <Button
                            type="external"
                            title="Siembra"
                            link="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=NLGLEFRCJNSB6&source=qr"
                            bgColor="blue"
                            hoverColor="light"
                        />
                    </div>
                    <div className={styles.img} style={{ backgroundImage: `url(${image})` }} />
                </div>
            </section>
            <section className='bg-light'>
                <Container>
                    <h1>Formas de Sembrar</h1>
                    <FlexCard margin={"40px 0 0 0"}>
                        <a href="/iglesias">
                            <StyledCard
                                children={<FontAwesomeIcon icon={faHandHoldingDollar} size="2xl" />}
                                title="Sembrar en persona"
                                description="Visítenos en una de nuestras iglesias."
                            />
                        </a>
                        <StyledCard
                            children={<FontAwesomeIcon icon={faEnvelope} size="2xl" />}
                            title="Envias por Correo"
                            description="Church of the Americas"
                        />
                        <a href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=NLGLEFRCJNSB6&source=qr" target="_blank" rel="noopener noreferrer" >
                            <StyledCard
                                children={<FontAwesomeIcon icon={faMobileScreen} size="2xl" />}
                                title="Siembra en Linea"
                                description="Haga clic para donar.¡Su generosidad hace una diferencia!"
                            />
                        </a>
                    </FlexCard>
                </Container>
            </section>
        </>
    )
}