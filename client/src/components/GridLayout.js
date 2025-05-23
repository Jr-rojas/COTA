import styled from 'styled-components'


export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    max-width: 1324px;
    padding: 8% 2%;
    margin: auto;
    justify-items: center;
    justify-content: center;
    grid-gap: 30px;
`