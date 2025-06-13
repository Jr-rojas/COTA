import STAFF from "../../app/shared/data/STAFF"

export const selectAllStaff = () => {
    return STAFF;
}

export const selectAllPastors = () =>{
    const allPastors = STAFF.filter(person => person.category === "pastor");
    return allPastors
}