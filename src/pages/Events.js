import HeroAlt from "../components/heroSection/HeroAlt";
import eventImg from "../app/shared/img/toma_tu_llamado.png"
import EventsList from "../components/eventsCard/eventList";
import useDocumentTitle from "../hooks/useDocumentTitle";


export default function Events() {
    useDocumentTitle("Eventos - COTA")

    return (
        <>
            <HeroAlt img={eventImg} page="Eventos" hasGradient={true} />
            <section style={{ backgroundColor: "#DCDCDC" }}>
                <EventsList />
            </section>
        </>
    )
}