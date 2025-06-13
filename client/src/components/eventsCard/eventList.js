import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretDown, faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';

import config from "../../config";
//import { selectAllEvents } from "./eventsSlice";
import EventCard from "./EventCard";
import { GridLayout } from "../GridLayout";
import { DropdownChecklist, ChecklistLabel, ChecklistUl} from "../DropdownChecklist";


const EventsList = () => {
    const [allEvents, setAllEvents] = useState([])

    const [isToggler, setToggler] = useState(false)
    const [maxHeight, setMaxHeight] = useState(0);
    const listRef = useRef(null);

    useEffect(() => {
        if(config.USE_BACKEND){
            axios.get('/api/events')
            .then(res => setAllEvents(res.data))
            .catch(err => console.log("Error fetching events:", err))
        }else{
            import ('../../app/shared/data/EVENTS')
            .then(module => setAllEvents(module.default))
            .catch(err => console.log("Error loading dummy events:", err))
        }
    },[])

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

    const today = new Date();
    today.setHours(0, 0, 0, 0);

      // Filter events to only show future events
      const futureEvents = allEvents.filter(event => new Date(event.date) >= today);

    // filtered events by location
    const filteredEvents = selectedLocations.length === 0 ? futureEvents
                            : futureEvents.filter(event => selectedLocations.includes(event.location))

    return(
        <>
            <DropdownChecklist>
                <ChecklistLabel><span>Location: </span><FontAwesomeIcon onClick={toggleButton} icon={isToggler? faSquareCaretUp : faSquareCaretDown} size="lg"/></ChecklistLabel>
                <ChecklistUl $isToggler={isToggler} $maxHeight={maxHeight} ref={listRef}>
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
            {filteredEvents.length === 0 ? (
                <div className="container-lg p-5 text-center">
                    <h2 className="fw-medium">📅 ¡Estate pendiente de nuestros próximos eventos!</h2>
                </div>
            ) : (
                <GridLayout>
                    {filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </GridLayout>
            )}
        </>
    )
}

export default EventsList