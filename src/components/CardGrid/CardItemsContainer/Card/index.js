import styled from 'styled-components'

const Card = styled.div`
    width: 250px;
    margin-bottom: 10px;
    padding: 0 10px; 

    img {
        max-height: 250px;
        max-width: 250px;
        padding-left: 25px;
        min-height: 250px;
    }

    &:hover {
        border: 1px solid #efefef;
        border-radius: 5px;
    }
`

export default Card;