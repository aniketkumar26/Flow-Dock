import styled from 'styled-components'
import Channels from './channels/Channels'
import Navigation from './navigation/Navigation'
import SidebarHeader from './sidebar-header/SidebarHeader'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarHeader />
            <Navigation />
            <Hr />
            <Channels />
        </SidebarContainer>
    )
}

const SidebarContainer = styled.div`
    flex: 0.3;
    height: 100%;
    margin-top: 70px;
    background-color: var(--primary);
    border-top: 1px solid var(--secondary);
    color: white;
    max-width: 260px;
`

const Hr = styled.hr`
    border: none;
    border-top: 1px solid var(--secondary);
`

export default Sidebar