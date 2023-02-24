import styled from 'styled-components'
import HeaderLeft from './header-left/HeaderLeft'
import HeaderSearch from './header-search/HeaderSearch'
import HeaderRight from './header-right/HeaderRight'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft />
            <HeaderSearch />
            <HeaderRight />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    background-color: var(--primary);
    color: white;
`

export default Header