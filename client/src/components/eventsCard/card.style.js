import styled from 'styled-components'

export const EventBox = styled.div`
    display: grid;
    width: 320px;
    grid-template-rows: 190px 230px;
    grid-template-areas: "image" "text";
    background: white;
    position: relative;
`;

export const CardImage = styled.div`
    grid-area: image;
    //background-image: url(${({ background }) => background});
    background-size: cover;
    background-position: center;
`;

export const CardBody = styled.div`
    grid-area: text;
    padding: 20px 15px;
    margin: 0;
    color: black;
`;

export const CardHeading = styled.h3`
    max-height: 40px;
    font-size: 18px;
    line-height: 20px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 0 12px;
`
export const CardLocation = styled.p`
    font-size: 12px;
    font-weight: 400;
    margin: 0 0 19px
`
export const CardDescription = styled.p`
    font-size: 14px;
    margin: 0;
`
export const CardDate = styled.div`
    position: absolute;
    width: 52px;
    height: 58px;
    background-color: white;
    padding: 12px 5px 0 ;
    text-transform: uppercase;
    text-align: center;
    font-size: 17px;
    line-height: 18px;
    font-weight: 600;
    top: 0;
    left: 0;
`