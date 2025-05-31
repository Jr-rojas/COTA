import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { formatChurchName } from '../../utils/formatters';
import Button from '../../components/button/Button';
import { selectAllChurches } from "../../components/churchesCard/churchesSlice";
import HeroAlt from '../../components/heroSection/HeroAlt';
import { FlexCenter } from '../../components/Flex';

import homeStyles from '../Home/Home.module.scss'
import styles from './ChurchDetails.module.css'


export const ChurchDetails = () => {
    const { churchName } = useParams();
    const churches = useSelector(selectAllChurches);
    const formattedName = churchName.toLowerCase();
    const location = churches.find(church => church.churchName.toLowerCase() === formattedName);


    if (!location) {
        return <div>Church not found</div>;
    }

    const { churchName: name, address, image, leadPastor, coPastor, mainService } = location

    const firstPastor = leadPastor.name[0]
    const secondPastor = leadPastor.name[1]

    const coFirstPastor = coPastor?.name[0]
    const coSecondPastor = coPastor?.name[1]

    const addressSplit = address.split(".")
    const street = addressSplit[0]
    const cityState = addressSplit[1]
    const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(address)}`;

    return (
        <>
            <HeroAlt img={`/shared/images/locations/${image}`} page={formatChurchName(name)} />
            <section className={homeStyles.sectionB}>
                <div className={homeStyles.container2}>
                    <div className={`${homeStyles.img2} ovalImage`} style={{ backgroundImage: `url(/shared/images/pastors/${leadPastor.image})`}} />
                    <div className={homeStyles.content2}>
                        <h1 className={homeStyles.h1}>Nuestros Pastores</h1>
                        <hr className={homeStyles.hr2} />
                        <p className={homeStyles.p}><strong>{firstPastor}</strong> 
                        {secondPastor && <> & <strong>{secondPastor}</strong></>} son siervos dedicados al llamado de Dios, guiando con amor y sabiduría a nuestra congregación. Con un corazón por la comunidad y una pasión por la enseñanza de la Palabra, trabajan incansablemente para fortalecer la fe y el crecimiento espiritual de cada miembro. </p>
                    </div>
                </div>
            </section>
            {coPastor && (
                <section className={homeStyles.sectionB}>
                    <div className={homeStyles.container2}>
                        <div className={`${homeStyles.img2} ovalImage`} style={{ backgroundImage: `url(/shared/images/pastors/${coPastor.image})` }} />
                        <div className={homeStyles.content2}>
                            <h1 className={homeStyles.h1}>Nuestros Co-Pastores</h1>
                            <hr className={homeStyles.hr2} />
                            <p className={homeStyles.p}>
                                <strong>{coFirstPastor}</strong> 
                                {coSecondPastor && <> & <strong>{coSecondPastor}</strong></>} apoyan la visión de la iglesia y sirven con amor a la congregación.
                            </p>
                        </div>
                    </div>
                </section>
            )}

            <section style={{ backgroundColor: "#f8f7f4", padding: "30px 10px" }}>
                <FlexCenter $maxWidth={"1200px"} $justifyContent={"space-around"} $flexWrap={"wrap"} style={{ margin: "auto" }}>
                    <div className={styles.wrapper}>
                        <div>
                            <h2>Service Times</h2>
                            <ul>
                                {mainService.map((service) => {
                                    return (
                                        <li key={service.day}>
                                            {service.day}: {service.time}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <h2 className='mt-4'>Address</h2>
                            <p>
                                {street}
                                <br />
                                {cityState}
                            </p>
                            <Button
                                title="Direccion"
                                type="external"
                                link={googleMapsUrl}
                                bgColor="blue"
                                hoverColor="dark"
                                target="_blank" rel="noopener noreferrer"
                            />
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <img src={`/shared/images/locations/${image}`} alt="location of church" />
                    </div>
                </FlexCenter>
            </section>
        </>
    )
}