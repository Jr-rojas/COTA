import HeroAlt from "../components/HeroAlt";
import eventImg from "../app/shared/img/toma_tu_llamado.png"
import EventsList from "../components/EventCard/eventList";


export default function Events() {
    return (
        <>
            <HeroAlt img={eventImg} page="Events" hasGradient={true}/>
            <section style={{backgroundColor: "#DCDCDC" }}>
                <EventsList />
            </section>
        </>
    )
}