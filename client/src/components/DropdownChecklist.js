import styled from 'styled-components';

export const DropdownChecklist = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10x auto;
    padding: .5 rem;
    background: white;
    justify-content: center;
    align-items: center;
    position: relative;
    height:100px;
`
export const ChecklistLabel = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-transform: uppercase;

    span{
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 1.5pt;
        margin:5px;
    }
`

export const ChecklistUl = styled.ul`
    list-style-type: none;
    display: ${({ $isToggler }) => ($isToggler ? "block" : "none")};
    padding: 10px;
    margin: 0 10px ;
    background-color:white;
    min-width: 220px;
    z-index: 1 ;
    position: absolute;
    top:70%;
    max-height: ${({ $maxHeight }) => $maxHeight}px;
    transition: max-height 0.3s ease-in-out;
    overflow: hidden;
    border: solid 1px grey;
    box-shadow: 1px 1px 3px 1px grey;

    & > li > input{
        cursor: pointer;
    }
`

export const Button = styled.button`
    margin: 0 10px;
    height: 20px;
    width: 50px;
    padding: 10px;
`