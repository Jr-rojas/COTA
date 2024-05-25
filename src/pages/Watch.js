import HeroAlt from "../components/HeroAlt"
import watchImg from "../app/shared/img/praying2.jpg"
import albumLA from "../app/shared/img/me_has_dado_un_proposito.jpeg"
import albumBK from "../app/shared/img/luz_a_las_naciones.jpg"
import albumLA2 from "../app/shared/img/tu_eres_dios.png"
import styles from "./Watch.module.css"
import {Container} from "../components/StyledContainer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faItunes, faSoundcloud } from '@fortawesome/free-brands-svg-icons';


export default function Watch(){

    return(
        <>
            <HeroAlt page="Watch" img={watchImg} hasGradient={true}
                children={<h3 style={{color: "#e9eaec", margin:"0"}}>Join us live every Sunday @ 6:00PM &  <br/> Wednesday @ 6:00PM from our central church.</h3>}
                button={<div className='buttons lg la hover-light'>
                            <a href="https://www.facebook.com/churchoftheamericas" target="_blank" rel="noreferrer" style={{backgroundColor: "#F82626"}}>Live</a>
                        </div>}
            />
            <section>

            </section>
            <section style={{background:"#252525"}}>
                <Container>
                    <div className={styles.grid}>
                        <div style={{maxWidth: "600px"}}>
                            <div className="videoContainer">
                                <iframe id="youtube-video"src="https://www.youtube.com/embed/xfPg033NZyg?si=gfx2WdGGNSENuauH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div>
                            <h2 style={{margin:"0 0 8px 0"}}>Watch our Anual Event 2024 </h2>
                            <h4>Herederos de las Promesas</h4>
                            <p style={{color: "white"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <section style={{backgroundColor:"#fff"}}>
                <Container>
                    <h1 style={{color: "black"}}>Check out our music</h1>
                    <div className={styles.container}>
                        <div className={styles.album}>
                            <a href="https://open.spotify.com/album/1e2Zo7k7zANWodtBkhZfuP?si=gcJ5eHecQ6izeep4MetmOg" target="_blank" rel="noopener noreferrer"><div style={{backgroundImage: `url(${albumLA})`}}/></a>
                        </div>
                        <div className={styles.album2}>
                            <a  href="https://open.spotify.com/album/1e2Zo7k7zANWodtBkhZfuP?si=gcJ5eHecQ6izeep4MetmOg" target="_blank" rel="noopener noreferrer"><div style={{backgroundImage: `url(${albumBK})`}}/></a>
                        </div>
                        <div className={styles.album3}>
                            <a  href="https://open.spotify.com/album/2YOUNKhu7Wvlh9HjwEMkEM?si=9pTfuX0oRZ6x4T1fQ4ke-Q" target="_blank" rel="noopener noreferrer"><div style={{backgroundImage: `url(${albumLA2})`}}/></a>
                        </div>
                    </div>
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
                </Container>

            </section>
        </>
    )
}