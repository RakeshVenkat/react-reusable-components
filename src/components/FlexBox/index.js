import styled from 'styled-components'

const FlexBox = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
	justify-content: ${props  => props.justifyContent || 'flex-start'};
	align-items: ${props  => props.alignItems || 'flex-start'};
	flex-wrap: ${props => props.flexwrap};
`
export default FlexBox