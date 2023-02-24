import styled from "styled-components"
import SidebarItems from "../sidebar-items/SidebarItems"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import SidebarItem from "../sidebar-items/sidebar-item/SidebarItem"
import AddBoxIcon from '@mui/icons-material/AddBox'
import { db } from "../../../../firebase"
import { collection, addDoc } from "firebase/firestore"
import { useCollection } from "react-firebase-hooks/firestore"
import { useDispatch } from "react-redux"
import { enterChannel } from "../../../../features/appSlice"

const Channels = () => {
    const [channels] = useCollection(collection(db, "channels"))

    const channelsData = channels?.docs.map(doc => ({ ...doc.data(), id: doc.id }))

    const dispatch = useDispatch()

    const createChannel = async (e) => {
        e.preventDefault()
        const channel = prompt('Enter channel name')

        if (!channel) return

        try {
            const docRef = await addDoc(collection(db, "channels"), {
                title: channel
            })
            console.log("Document written with ID: ", docRef.id);
        } catch (err) {
            console.log(err)
        }
    }

    const joinChannel = (e, id) => {
        dispatch(enterChannel({ channelId: id }))
    }

    return (
        <ChannelsContainer>
            <details open>
                <summary>
                    Channels
                    <AddCircleOutlineIcon onClick={createChannel} />
                </summary>
                <SidebarItems items={channelsData} onClickHandler={joinChannel} />
                <SidebarItem onClickHandler={createChannel} Icon={AddBoxIcon} title='Add channel' />
            </details>
        </ChannelsContainer>
    )
}

const ChannelsContainer = styled.div`
    padding: 13px;
    
    summary {
        display: flex;
        align-items: center;
        min-height: 24px;
        outline: none;
        cursor: pointer;
        list-style-type: none;
        margin-bottom: 13px;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        
        ::-webkit-details-marker {
            display: none;
        }

        ::before {
            content: '►';
            margin-right: 10px;
        }        

        > svg {
            display: none;
            margin-left: auto;
        }

        :hover {
            > svg {
                display: block;
            }
        }
    }

    details[open] {
        > summary::before {
            content: '▼';
        }
    }
`

export default Channels