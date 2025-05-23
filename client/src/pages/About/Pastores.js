import useDocumentTitle from "../../hooks/useDocumentTitle";
import HeroAlt from "../../components/heroSection/HeroAlt"
import PastoresList from "../../components/pastoresCard/StaffList";
//import { Link } from "react-router-dom";

export default function Pastores(){
    useDocumentTitle("Pastores- COTA")

    return(
        <>
            <HeroAlt img="" page="Nuestro Pastores del Ministerio" hasGradient={true} />
            <section className="py-4">
               <PastoresList/>
            </section>
        </>
    )
}