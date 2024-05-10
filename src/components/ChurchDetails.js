import React from 'react';
import { selectAllChurches } from "../features/churches/churchesSlice";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ChurchDetails = () => {
    const { id } = useParams();
    const churches = useSelector(selectAllChurches);
    const location = churches.find(church => church.id === parseInt(id));

    if (!location) {
        return <div>Church not found</div>;
    }

    const { name,city, state, address, image, mainService } = location

    return(
        <>
            <div style={{backgroundColor:"white"}}>
            <h2>{name}</h2>
            <p>Location: {city}, {state}</p>
            <p>Address: {address}</p>
            <img src={image} alt={name} width={"400px"}/>
            <h3>Main Service Times:</h3>
            <ul>
                {mainService.map(service => (
                <li key={service.day}>
                    <strong>{service.day}</strong>: {service.time}
                </li>
                ))}
            </ul>
            </div>
        </>
    )
}