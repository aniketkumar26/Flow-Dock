import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import EditIcon from '@mui/icons-material/Edit'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../../firebase'

const SidebarHeader = () => {
    const [user] = useAuthState(auth)

    return (
        <SidebarHeaderContainer>
            <SidebarInfo>
                <h2>Slack Clone</h2>
                <h3>
                    <FiberManualRecordIcon />
                    {user?.displayName}
                </h3>
            </SidebarInfo>
            <EditIcon />
        </SidebarHeaderContainer>
    )
}

const SidebarHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    height: 64px;
    padding: 13px;
    border-bottom: 1px solid var(--secondary);

    > svg {
        background: white;
        padding: 8px;
        border-radius: 50%;
        color: var(--primary);
        font-size: 36px;
        cursor: pointer;
    }
`

const SidebarInfo = styled.div`
    flex: 1;

    > h3 {
        display: flex;
        align-items: center;
        font-size: 13px;
        font-weight: 400;

        > svg { 
            font-size: 14px;
            margin-top: 1px;
            margin-right: 2px;
            color: #33AB78;
        }
    }

    h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
`

export default SidebarHeader