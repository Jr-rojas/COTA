import PastoresCard from "./StaffCard"
import { selectAllPastors } from "./pastorSlice"

const PastoresList = () => {
    const allPastors = selectAllPastors()

    return(
        <>
        <div className="container-xl my-3 px-2">
            <div className="row rows-cols-4 justify-content-around">
                {allPastors.map((pastor) =>{
                    return (
                    <div className="col d-flex flex-column align-items-center my-3">
                        <PastoresCard key={pastor.id} pastor={pastor}/>
                    </div>
                )
                })}
            </div>
        </div>
        </>
    )
}

export default PastoresList