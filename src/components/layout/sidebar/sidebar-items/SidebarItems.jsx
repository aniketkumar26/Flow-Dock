import styled from 'styled-components'
import SidebarItem from './sidebar-item/SidebarItem'

const SidebarItems = ({ items, onClickHandler }) => {
    return (
        <SidebarItemsContainer>
            {items?.map((item, index) => (
                <SidebarItem key={index} {...item} onClickHandler={onClickHandler} />
            ))}
        </SidebarItemsContainer>
    )
}

const SidebarItemsContainer = styled.div`
`

export default SidebarItems