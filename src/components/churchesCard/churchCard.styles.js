import styled from 'styled-components'

export const ChurchCard = styled.div`
    margin: 20px auto 20px;
    width: 100%;

    @media (max-width: 768px){
        margin: 10px auto;
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
`;

export const CardBody = styled.div`
    background-color: #fff;
    padding: 5px;
    position: relative;
`

export const CardTitle = styled.h3`
    font-size: 23px;
    font-weight: 700;
    margin-top: 5px;
    letter-spacing: 1.5pt;

    &::after{
        content: '';
        width: 50%;
        height: 4px;
        background-color: #3C82D4;
        position: absolute;
        left: 8px;
        top: 48px;
    }
`

export const CardGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: 195px;
`

export const CardInfo = styled.div`
    margin: 10px 0 0 0;
    padding: 10px 8px 0 8px;

    & > :first-child{
        margin-bottom: 30px;
    }

    & p{
        font-size: 15px;
    }

    & strong{
        display: inline-block;
        min-width: 100px;
    }
`

export const AddressWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`