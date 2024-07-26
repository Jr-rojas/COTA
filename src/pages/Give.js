import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faEnvelope, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

import HeroAlt from "../components/heroSection/HeroAlt";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Button from "../components/button/Button";
import { FlexCard, FlexCenter } from "../components/Flex";
import { Container } from "../components/StyledContainer";
import { StyledCard } from "../components/StyledCard";

import image from "../app/shared/img/aposento.jpg"
import styles from './Home.module.css';


export default function Give() {
    useDocumentTitle("Give - COTA")

    return (
        <>
            <HeroAlt page="Give">
            </HeroAlt>
            <section style={{ backgroundColor: "#f8f7f4" }}>
                <FlexCenter flexDirection="column">
                    <Container>
                        <h2 style={{ color: "black" }}>Why we give</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est porta, dignissim nunc ut, dapibus neque. Nam sagittis tellus non nunc faucibus, a fermentum urna elementum.</p>
                        <br />
                        <p><em>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</em></p>
                        <Button
                            type="externa;"
                            title="Give Online"
                            link="/give"
                            bgColor="blue"
                            hoverColor="dark"
                            disabled={true}
                        />
                    </Container>
                </FlexCenter>
            </section>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h4 className={styles.h4}>GIVE TO THE VISION</h4>
                        <h1 className={styles.h1}>Aposento Alto</h1>
                        <hr className={styles.hr} />
                        <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Button
                            type="external"
                            title="Donate"
                            link="/give"
                            bgColor="blue"
                            hoverColor="light"
                            disabled={true}
                        />
                    </div>
                    <div className={styles.img} style={{ backgroundImage: `url(${image})` }} />
                </div>
            </section>
            <section style={{ backgroundColor: "#f8f7f4" }}>
                <Container>
                    <h1>Other ways to give</h1>
                    <FlexCard margin={"40px 0 0 0"}>
                        <StyledCard
                            children={<FontAwesomeIcon icon={faHandHoldingDollar} size="2xl" />}
                            title="Give in person"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                        />
                        <StyledCard
                            children={<FontAwesomeIcon icon={faEnvelope} size="2xl" />}
                            title="Mail in Gift"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                        />
                        <StyledCard
                            children={<FontAwesomeIcon icon={faMobileScreen} size="2xl" />}
                            title="Give online"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                        />
                    </FlexCard>
                </Container>
            </section>
        </>
    )
}