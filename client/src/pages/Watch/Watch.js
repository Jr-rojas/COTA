import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faItunes, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

import HeroAlt from "../../components/heroSection/HeroAlt"
import useDocumentTitle from "../../hooks/useDocumentTitle"
import { Container } from "../../components/StyledContainer"
import Button from "../../components/button/Button"

import watchImg from "../../app/shared/img/praying2.jpg"
import albumLA from "../../app/shared/img/me_has_dado_un_proposito.jpeg"
import albumBK from "../../app/shared/img/luz_a_las_naciones.jpg"
import albumLA2 from "../../app/shared/img/tu_eres_dios.png"
import styles from "./Watch.module.css"


export default function Watch() {
    useDocumentTitle("Medios - COTA")

    return (
        <>
            <HeroAlt page="Medios" img={watchImg} hasGradient={true}
                children={<h3>Unete con nosostros cada Domingo @ 6:00PM &  <br /> Miercoles @ 6:00PM de nuestra iglesia central.</h3>}
                button={<Button
                    title="En Vivo"
                    type="external"
                    link="https://www.facebook.com/churchoftheamericas"
                    bgColor="blue"
                    hoverColor="light" />}
            />
            <section>

            </section>
            <section>
                <Container>
                    <div className={styles.grid}>
                        <div style={{ maxWidth: "600px" }}>
                            <div className="videoContainer">
                                <iframe id="youtube-video" src="https://www.youtube.com/embed/xfPg033NZyg?si=gfx2WdGGNSENuauH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-light">Watch our Anual Event 2024 </h2>
                            <h4>Herederos de las Promesas</h4>
                            <p className="text-light">
                                ¡Revive nuestro Evento Anual 2024 - Herederos de las Promesas! Te invitamos a vivir este poderoso momento de fe y adoración. Además, suscríbete a nuestro canal de YouTube para encontrar predicaciones, alabanzas y mensajes que fortalecerán tu vida espiritual. ¡Haz clic, únete a nuestra comunidad y comparte la bendición con otros! 🙌📺✨
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <section style={{ backgroundColor: "#fff" }}>
                <Container>
                    <h1 style={{ color: "black" }}>Check out our music</h1>
                    <div className={styles.iconGrid}>
                        <a href="https://open.spotify.com/artist/1PY7JdA2v5MJ7wFILtqBSp?si=YMpzNf8_RwG2xLP9WBkSNg" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} size="2xl" />
                        </a>
                        <a href="https://music.apple.com/us/artist/church-of-the-americas/716898546">
                            <FontAwesomeIcon icon={faItunes} size="2xl" />
                        </a>
                        <a href="https://soundcloud.com/churchoftheamericas?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
                            <FontAwesomeIcon icon={faSoundcloud} size="2xl" />
                        </a>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.album}>
                            <a href="https://open.spotify.com/album/1e2Zo7k7zANWodtBkhZfuP?si=gcJ5eHecQ6izeep4MetmOg" target="_blank" rel="noopener noreferrer"><div style={{ backgroundImage: `url(${albumLA})` }} /></a>
                        </div>
                        <div className={styles.album2}>
                            <a href="https://open.spotify.com/album/1e2Zo7k7zANWodtBkhZfuP?si=gcJ5eHecQ6izeep4MetmOg" target="_blank" rel="noopener noreferrer"><div style={{ backgroundImage: `url(${albumBK})` }} /></a>
                        </div>
                        <div className={styles.album3}>
                            <a href="https://open.spotify.com/album/2YOUNKhu7Wvlh9HjwEMkEM?si=9pTfuX0oRZ6x4T1fQ4ke-Q" target="_blank" rel="noopener noreferrer"><div style={{ backgroundImage: `url(${albumLA2})` }} /></a>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}