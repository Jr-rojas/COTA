import { EventBox, CardImage, CardBody, CardHeading, CardLocation, CardDescription, CardDate } from "./card.style";


const EventCard = ({ event }) => {
    const {date, location, image, description, title} = event

    const parts = date.split(' ');
    const monthIndex = new Date (Date.parse(date)).getMonth();
    const day = parseInt(parts[1]);
    const year = parseInt(parts[2])

    const monthShort = new Date (year, monthIndex).toLocaleString('default', { month: 'short' });

    return(
        <EventBox>
            <CardDate>{`${monthShort} ${day}`}</CardDate>
            <CardImage style={{backgroundImage:`url(/shared/images/${image})`}} />
            <CardBody>
                <CardHeading>
                    {title}
                </CardHeading>
                <CardLocation>
                    {location}
                </CardLocation>
                <CardDescription>
                {description}
                </CardDescription>
            </CardBody>
        </EventBox>
)}

export default EventCard