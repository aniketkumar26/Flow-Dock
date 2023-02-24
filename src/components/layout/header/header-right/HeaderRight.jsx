import styled from 'styled-components'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

const HeaderRight = () => {
    return (
        <HeaderRightContainer>
            <HelpOutlineIcon />
        </HeaderRightContainer>
    )
}

const HeaderRightContainer = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;

    > svg {
        margin-left: auto;
        margin-right: 120px;
        cursor: pointer;
    }
`

export default HeaderRight