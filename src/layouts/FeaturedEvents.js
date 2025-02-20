import Button from "../components/button/Button";

export default function FeaturedEvents({event}){
    const {date, image, description, title} = event

    const parts = date.split(',');
    const newDate = parts[0];

    return(
        <div className='item'>
            <div className='box-header'>
                <h2>{newDate}</h2>
            </div>
            <div className='box'>
                <span><img src={image} alt='Youth camp' width="100%"/></span>
                <span className='overlay'>
                    <span className='title'>{title}</span>
                    {description}
                    <span className='buttons hover-dark'><Button
                                title="Mas Detalles"
                                type="link"
                                link="/events"
                                hoverColor="dark"
                            /></span>
                </span>
            </div>
        </div>
    )
}