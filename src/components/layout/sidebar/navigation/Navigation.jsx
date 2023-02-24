import InsertCommentIcon from '@mui/icons-material/InsertComment'
import InboxIcon from '@mui/icons-material/Inbox'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SidebarItems from '../sidebar-items/SidebarItems'
import styled from 'styled-components'

const items = [
    {
        title: 'Threads',
        Icon: InsertCommentIcon
    },
    {
        title: 'Mentions & reactions',
        Icon: InboxIcon
    },
    {
        title: 'People & user groups',
        Icon: PeopleAltIcon
    },
    {
        title: 'More',
        Icon: MoreVertIcon
    }
]

const Navigation = () => {
    return (
        <SidebarItems items={items} />
    )
}

export default Navigation