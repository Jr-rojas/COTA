import { useState, useRef, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretDown, faSquareCaretUp, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { selectAllChurches } from "./churchesSlice";
import ChurchLocationCard from "./ChurchLocationCard";
import { DropdownChecklist, ChecklistLabel, ChecklistUl } from "../DropdownChecklist";

import visitStyles from "../../pages/Visit/Visit.module.css"


const ChurchLocationList = () => {
    const locations = selectAllChurches();

    const [isToggler, setToggler] = useState(false)
    const [maxHeight, setMaxHeight] = useState(0);
    const listRef = useRef(null);

    useEffect(() => {
        if (listRef.current) {
            setMaxHeight(isToggler ? listRef.current.scrollHeight : 0);
        }
    }, [isToggler]);

    const toggleButton = () => {
        setToggler(!isToggler)
    };

    //state for filter location based on STATE
    const [selectedStates, setSelectedStates] = useState([]);

    //checkbox function
    const handleCheckboxChange = (event) => {
        const state = event.target.value;
        if (event.target.checked) {
            setSelectedStates([...selectedStates, state])
        } else {
            setSelectedStates(selectedStates.filter(st => st !== state))
        }
    };

    const removeSelectedState = (stateToRemove) => {
        setSelectedStates(selectedStates.filter(st => st !== stateToRemove));
    };

    const filterStates = selectedStates.length === 0 ? locations : locations.filter(location => selectedStates.includes(location.state))

    return (
        <>
            <DropdownChecklist>
                <ChecklistLabel><span>Estado: </span><FontAwesomeIcon onClick={toggleButton} icon={isToggler ? faSquareCaretUp : faSquareCaretDown} size="lg" /></ChecklistLabel>
                <ChecklistUl $isToggler={isToggler} $maxHeight={maxHeight} ref={listRef}>
                    {[...new Set(locations.map(location => location.state))].map(state => {
                        return (
                            <li key={state}><input
                                type="checkbox"
                                value={state}
                                checked={selectedStates.includes(state)}
                                onChange={handleCheckboxChange} />{state}</li>
                        )
                    })}
                </ChecklistUl>
            </DropdownChecklist>
            {selectedStates.length > 0 && (
                <div className={visitStyles.selectedStates} style={{ background: "white" }}>
                    {selectedStates.map(state => (
                        <div key={state} className={visitStyles.selectedState}>
                            <span>{state}</span>
                            <FontAwesomeIcon icon={faTimesCircle} onClick={() => removeSelectedState(state)} />
                        </div>
                    ))}
                </div>
            )}
            <section className={visitStyles.locations}>
                <div className={visitStyles.locationGrid}>
                    {filterStates.map((location) => {
                        return (
                            <ChurchLocationCard location={location} key={location.id} />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default ChurchLocationList