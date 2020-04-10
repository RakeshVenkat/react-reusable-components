import styled from 'styled-components'
import FlexBox from '../../FlexBox'

export const CardItemsContainerStyle = styled(FlexBox).attrs({
    direction: 'row',
    flexwrap: 'wrap',
    justifyContent: 'space-around',
})`
    width: 100%;
`;