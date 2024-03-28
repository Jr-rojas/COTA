import HeroAlt from "../components/HeroAlt";
import eventImg from "../app/shared/img/youth_camp.png"
import EventsList from "../components/EventCard/eventList";


export default function Events() {
    return (
        <>
            <HeroAlt img={eventImg} page='Events' />
            <section style={{backgroundColor: "#DCDCDC" }}>
                <EventsList />
            </section>
        </>
    )
}