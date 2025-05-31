import { ChurchCard, CardImage, CardBody, CardTitle, CardGroup, CardInfo } from "./churchCard.styles";
import Button from "../button/Button"
import { formatChurchName } from "../../utils/formatters";

const ChurchLocationCard = ({ location }) => {
    const { churchName, address, image, mainService, index } = location;

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }

    const addressParts = address.split('.')
    const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(address)}`;


    return (
        <ChurchCard>
            <CardImage src={`/shared/images/locations/${image}`} alt="church location city"></CardImage>
            <CardBody>
                <CardTitle>{formatChurchName(churchName)}</CardTitle>
                <CardGroup>
                    <CardInfo>
                        <p><strong className="fw-bold">Address</strong>
                            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                                <br />{addressParts[0]}<br />{addressParts[1]}
                            </a>
                        </p>
                        <p>
                            {mainService.map((service) => (
                                <span key={`${service.day}-${service.time}-${index}`}>
                                    <strong className="fw-bold">{service.day}</strong> {service.time}<br />
                                </span>
                            ))}
                        </p>
                    </CardInfo>
                    <Button
                        title="Direccion"
                        type="external"
                        link={googleMapsUrl}
                        bgColor="dark"
                        hoverColor="blue"
                    />
                </CardGroup>
                <Button
                    title="Mas Informacion"
                    type="link"
                    link={`/iglesias/${churchName}`}
                    onClick={handleScrollToTop}
                    bgColor="blue"
                    hoverColor="dark"
                />
            </CardBody>
        </ChurchCard>
    )
}

export default ChurchLocationCard