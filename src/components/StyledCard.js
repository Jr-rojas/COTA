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
    color: #707070;
    margin-top: .5rem;
`

export const StyledCard = ({children, title, description}) => {
    const isAddressCard = title === "Mail in Gift";

    return (
        <Card>
            {children}
            <div>
                <Title isAddress={isAddressCard}>{title}</Title>
                <Description isAddress={isAddressCard}>
                    {isAddressCard ? (
                        <>
                            John Doe<br />
                            123 Main Street<br />
                            Anytown, USA
                        </>
                    ) : (
                        description
                    )}
                </Description>
            </div>
        </Card>
    )
}

