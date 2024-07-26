import { ChurchCard, CardImage, CardBody, CardTitle, CardGroup, CardInfo } from "./churchCard.styles";
import Button from "../button/Button"

const ChurchLocationCard = ({ location }) => {
    const { name, address, image, mainService, id } = location;

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }

    const addressParts = address.split('.')
    const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(address)}`;


    return (
        <ChurchCard>
            <CardImage src={image} alt="church location city"></CardImage>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardGroup>
                    <CardInfo>
                        <p><strong>Address</strong>
                            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                                <br />{addressParts[0]}<br />{addressParts[1]}
                            </a>
                        </p>
                        <p>
                            {mainService.map((service) => (
                                <span>
                                    <strong>{service.day}</strong> {service.time}<br />
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
                    link={`/visit/${id}`}
                    onClick={handleScrollToTop}
                    bgColor="blue"
                    hoverColor="dark"
                />
            </CardBody>
        </ChurchCard>
    )
}

export default ChurchLocationCard