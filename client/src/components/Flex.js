import styled from "styled-components";

export const FlexCenter = styled.div`
    display:flex;
    flex-direction:${props => (props.flexDirection ? props.flexDirection : "")};
    text-align: center;
    align-items:center;
    justify-content: ${props => (props.justifyContent ? props.justifyContent : "center")};
    gap:${props => (props.gap ? props.gap : "")};
    flex-wrap:${props => (props.flexWrap ? props.flexWrap : "nowrap")};
    max-width:${props => (props.maxWidth ? props.maxWidth : "")};
`

export const FlexColumn = styled.div`
    display: inline-grid;
    grid-template-columns:1fr 2fr;
    gap: 5px;
    align-items: center;
    justify-items: center;
`

export const FlexCard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 370px);
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin: ${props => (props.margin ? props.margin : '0')};
`