import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";
import PastoresCard from "./StaffCard";
//import { selectAllPastors } from "./pastorSlice"

const PastoresList = () => {
    //const allPastors = selectAllPastors();
    const [allPastors, setAllPastors] = useState([])

    useEffect(() => {
        if(config.USE_BACKEND){
            axios.get("/api/staff")
            .then(res => setAllPastors(res.data))
            .catch(err => console.log("Error fetching Staff:", err))
        }else(
            import("../../app/shared/data/STAFF")
            .then(module => setAllPastors(module.default))
            .catch(err => console.log("Error loading dummy Staff", err))
        )
    },[])

    return(
        <>
        <div className="container-xl my-3 px-2">
            <div className="row rows-cols-4 justify-content-around">
                {allPastors.map((pastor) =>{
                    return (
                    <div key={pastor.id} className="col d-flex flex-column align-items-center my-3">
                        <PastoresCard  pastor={pastor}/>
                    </div>
                )
                })}
            </div>
        </div>
        </>
    )
}

export default PastoresList