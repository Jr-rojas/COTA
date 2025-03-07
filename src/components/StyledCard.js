import styled from "styled-components"

const Card = styled.div`
    background-color: light;
    display: inline-grid;
    grid-template-columns:1fr 2fr;
    gap: 5px;
    align-items: center;
    justify-items: center;
    border: 2px solid black;
    width: 370px;
    border-radius: 18px;
    padding-right: 11px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`

const Title = styled.h3`
    color: black;
    font-size: 22px;
    margin: 1rem auto .5rem;
    font-weight: bold;
    letter-spacing: .5pt;
`

const Description = styled.p`
    color: #707070;
    margin-top: .5rem;
`

export const StyledCard = ({children, title, description}) => {
    const isAddressCard = title === "Envias por Correo";

    return (
        <Card>
            {children}
            <div>
                <Title isAddress={isAddressCard}>{title}</Title>
                <Description isAddress={isAddressCard}>
                    {isAddressCard ? (
                        <>
                            <strong>Church of the Americas</strong>
                            <br />
                            6408 Whittier Blvd.
                            <br />
                            Los Angeles, CA 90022
                        </>
                    ) : (
                        description
                    )}
                </Description>
            </div>
        </Card>
    )
}

