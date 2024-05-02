import styled from "styled-components"

const Card = styled.div`
    background-color: white;
    display: inline-grid;
    grid-template-columns:1fr 2fr;
    gap: 5px;
    align-items: center;
    justify-items: center;
    border: 0 solid black;
    width: 370px;
    border-radius: 18px;
    padding-right: 11px;
`

const Title = styled.h3`
    color: black;
    font-size: 22px;
    margin: 1rem auto .5rem;
    font-weight: bold;
    letter-spacing: .5pt;
`

const Description = styled.p`
    color: black;
    margin-top: .5rem;
`

export const StyledCard = ({children, title, description}) => {
    return (
        <Card>
            {children}
            <div>
                <Title>{title}</Title>
                <Description>
                {description}
                </Description>
            </div>
        </Card>
    )
}

