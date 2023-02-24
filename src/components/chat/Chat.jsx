import { doc } from "firebase/firestore"
import { useRef } from "react"
import { useDocument } from "react-firebase-hooks/firestore"
import { useSelector } from "react-redux"
import { selectChannelId } from "../../features/appSlice"
import { db } from "../../firebase"
import ChatHeader from "./chat-header/ChatHeader"
import ChatInput from "./chat-input/ChatInput"
import ChatMessages from "./chat-messages/ChatMessages"
import styled from "styled-components"

const Chat = () => {
    const channelId = useSelector(selectChannelId)
    const [channelDetails] = useDocument(channelId && doc(db, "channels", channelId))
    const scrollToBottomRef = useRef(null)

    if (!channelId) return null

    return (
        <div>
            <ChatHeader channelName={channelDetails?.data().title} />
            <ChatMessages scrollToBottomRef={scrollToBottomRef} />
            <ScrollToBottom ref={scrollToBottomRef} />
            <ChatInput channelName={channelDetails?.data().title} scrollToBottomRef={scrollToBottomRef} />
        </div>
    )
}

const ScrollToBottom = styled.div`
    padding-bottom: 60px;
`

export default Chat