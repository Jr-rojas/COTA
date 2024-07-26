import { EVENTS } from "../../app/shared/data/EVENTS"

export const selectAllEvents = () => {
    return EVENTS;
}

export const nextEvents = () =>{
    const allEvents = EVENTS;
    const nextEvents = allEvents.filter(event => new Date(event.date) > new Date()).slice(0,4);
    return nextEvents
}