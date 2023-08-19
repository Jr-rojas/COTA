import { selectAllChurches } from "./churchesSlice";
import visitStyles from "../../pages/Visit.module.css"
import ChurchLocationCard from "./ChurchLocationCard";

const ChurchLocationList = () => {
    const locations = selectAllChurches();

    return(
        <section className={visitStyles.locations}>
            <div className={visitStyles.locationGrid}>
                {locations.map((location) => {
                    return(
                        <ChurchLocationCard location={location}/>
                    )
                })}
            </div>
        </section>
    )
}

export default ChurchLocationList