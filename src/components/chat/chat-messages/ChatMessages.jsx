import { collection, orderBy, query } from "firebase/firestore"
import { useEffect } from "react"
import { useCollection } from "react-firebase-hooks/firestore"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { selectChannelId } from "../../../features/appSlice"
import { db } from "../../../firebase"
import ChatMessageItem from './chat-message-item/ChatMessageItem'

const ChatMessages = ({ scrollToBottomRef }) => {
    const channelId = useSelector(selectChannelId)
    let messagesCollection
    let q

    if (channelId) {
        messagesCollection = collection(db, "channels", channelId, "messages")
        q = query(messagesCollection, orderBy("timestamp", "asc"))
    }

    const [messages, loading] = useCollection(q)

    // Scrolls to the bottom of the chat messages when the channel changes
    useEffect(() => {
        scrollToBottomRef?.current?.scrollIntoView({ behavior: "smooth" })
    }, [channelId, loading, scrollToBottomRef])

    return (
        <ChatMessagesContainer>
            {messages && messages.docs.map(doc => {
                const { user, message, timestamp } = doc.data()
                return <ChatMessageItem key={doc.id} user={user} message={message} timestamp={timestamp} />
            })}
        </ChatMessagesContainer>
    )
}

const ChatMessagesContainer = styled.div`
    padding: 20px;
`

export default ChatMessages