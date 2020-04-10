import styled from 'styled-components'
import FlexBox from '../FlexBox'

const CardContainer = styled(FlexBox).attrs({
    direction: 'column'
})`
    width: 100%;
    border: 2px solid #A6ADB4;
`

export default CardContainer
