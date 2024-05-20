import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllChurches } from "../features/churches/churchesSlice";
import HeroAlt from './HeroAlt';
import styles from './ChurchDetails.module.css'
import homeStyles from '../pages/Home.module.css'
import { FlexCenter } from './Flex';

export const ChurchDetails = () => {
    const { id } = useParams();
    const churches = useSelector(selectAllChurches);
    const location = churches.find(church => church.id === parseInt(id));

    if (!location) {
        return <div>Church not found</div>;
    }

    const { name, address, image, leadPastorImg,pastorName, mainService } = location

    const firstPastor=pastorName[0]
    const secondPastor=pastorName[1]

    const addressSplit = address.split(".")
    const street = addressSplit[0]
    const cityState = addressSplit[1]
    const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(address)}`;

    return(
        <>
            <HeroAlt img={image} page={name}/>
            <section className={homeStyles.sectionB}>
                <div className={homeStyles.container2}>
                    <div className={homeStyles.img2} style={{backgroundImage: `url(${leadPastorImg})`}}/>
                    <div className={homeStyles.content2}>
                        <h1 className={homeStyles.h1}>Nuestros Pastores</h1>
                        <hr className={homeStyles.hr2}/>
                        <p className={homeStyles.p}><strong>{firstPastor}</strong> & <strong>{secondPastor}</strong> ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </section>
            <section style={{backgroundColor:"#f8f7f4", padding:"30px 10px"}}>
                <FlexCenter maxWidth={"1200px"} justifyContent={"space-around"} flexWrap={"wrap"} style={{margin:"auto"}}>
                    <div className={styles.wrapper}>
                        <div>
                            <h2 style={{color:"black"}}>Service Times</h2>
                            <ul>
                                {mainService.map ((service) => {
                                    return(
                                        <li key={service.day}>
                                            {service.day}: {service.time}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <h2 style={{color: "black"}}>Address</h2>
                            <p>
                                {street}
                                <br/>
                                {cityState}
                            </p>
                            <div className='buttons hover-dark'>
                                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">direccion</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <img src={image} width="450px" alt="location of church"/>
                    </div>
                </FlexCenter>
            </section>
        </>
    )
}