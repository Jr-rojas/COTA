import { useState, useRef, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretDown, faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';

import { selectAllEvents } from "./eventsSlice";
import EventCard from "./EventCard";
import { GridLayout } from "../GridLayout";
import { DropdownChecklist, ChecklistLabel, ChecklistUl} from "../DropdownChecklist";


const EventsList = () => {
    const allEvents = selectAllEvents();

    const [isToggler, setToggler] = useState(false)
    const [maxHeight, setMaxHeight] = useState(0);
    const listRef = useRef(null);

    useEffect(() => {
        if (listRef.current) {
            setMaxHeight(isToggler ? listRef.current.scrollHeight : 0);
        }
    }, [isToggler]);

    const toggleButton = () => {
        setToggler(!isToggler)
    };

    // state to store filtered locations
    const [selectedLocations, setSelectedLocations] = useState([]);

    // Checkbox function
    const handleCheckboxChange = (event) => {
        const location = event.target.value;
        if (event.target.checked){
            setSelectedLocations([...selectedLocations, location]);
        }else{
            setSelectedLocations(selectedLocations.filter(loc => loc !== location));
        }
    };
    // filtered events by location
    const filteredEvents = selectedLocations.length === 0 ? allEvents 
                            : allEvents.filter(event => selectedLocations.includes(event.location))

    return(
        <>
            <DropdownChecklist>
                <ChecklistLabel><span>Location: </span><FontAwesomeIcon onClick={toggleButton} icon={isToggler? faSquareCaretUp : faSquareCaretDown} size="lg"/></ChecklistLabel>
                <ChecklistUl isToggler={isToggler} maxHeight={maxHeight} ref={listRef}>
                    {[...new Set(allEvents.map(event => event.location))].map(location => {
                    return (
                        <li key={location}><input 
                        type="checkbox" 
                        value={location} 
                        checked={selectedLocations.includes(location)} 
                        onChange={handleCheckboxChange}/>{location}</li>
                    )
                })}
                </ChecklistUl>
            </DropdownChecklist>
            <GridLayout>
                {filteredEvents.map((event) => {
                    return(
                        <EventCard key={event.id} event={event}/>
                    )
                })}
            </GridLayout>
        </>
    )
}

export default EventsList