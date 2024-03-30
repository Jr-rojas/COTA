import HeroAlt from "../components/HeroAlt";
import styles from './Home.module.css'
import { FlexCenter } from "../components/FlexCenter";
import { Container } from "../components/StyledContainer";
import image from "../app/shared/img/aposento.jpg"

export default function Give() {
    return (
        <>
            <HeroAlt page="Give">
            </HeroAlt>
            <section style={{ backgroundColor: "#DCDCDC"}}>
                <FlexCenter>
                    <Container>
                        <h2>Give to the vision</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est porta, dignissim nunc ut, dapibus neque. Nam sagittis tellus non nunc faucibus, a fermentum urna elementum.</p>
                        <br/>
                        <p><em>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</em></p>
                        <span className='buttons hover-dark'><a href='/events'>Mas Detalles</a></span>
                    </Container>
                </FlexCenter>
            </section>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1 className={styles.h1}>Aposento Alto</h1>
                        <hr className={styles.hr}/>
                        <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className='buttons lg la hover-light'>
                            <a href="/">Leer Mas</a>
                        </div>
                    </div>
                    <div className={styles.img}  style={{ backgroundImage: `url(${image})` }}/>
                </div>
            </section>
        </>
    )
}