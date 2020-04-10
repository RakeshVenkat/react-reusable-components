import styled from 'styled-components'
import FlexBox from '../../FlexBox'

const HeaderContainer = styled(FlexBox).attrs({
    direction: 'row',
    justifyContent: 'center'
})`
    width: 100%;
`;

export default HeaderContainer;