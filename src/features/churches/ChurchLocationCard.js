import { Link } from "react-router-dom";
import visitStyles from "../../pages/Visit.module.css"

const ChurchLocationCard = ({location}) =>{
    const { name,address, image, mainService, id } = location

    const addressParts = address.split('.')
    const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(address)}`;


    return(
        <div className={visitStyles.churchCard}>
                <div className={visitStyles.cardImg} style={{backgroundImage: `url(${image})`}}></div>
                <div className={visitStyles.churchCardBody}>
                    <h3 className={visitStyles.title}>{name}</h3>
                    <div className={visitStyles.cardGroup}>
                        <div className={visitStyles.info}>
                            <p><strong>Address</strong> 
                            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit"}}>
                                <br/>{addressParts[0]}<br/>{addressParts[1]}
                            </a>
                            </p>
                            <p>
                                {mainService.map((service) => (
                                    <span>
                                    <strong>{service.day}</strong> {service.time}<br/>
                                    </span>
                                ))}
                            </p>
                        </div>
                        <div className='buttons hover-dark-inverted'>
                            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">direccion</a>
                        </div>
                    </div>
                    <div className='buttons lg la hover-dark'>
                            <Link to={`/visit/${id}`}><a href="/">Mas Informacion</a></Link>
                        </div>
                </div>
            </div>
    )
}

export default ChurchLocationCard