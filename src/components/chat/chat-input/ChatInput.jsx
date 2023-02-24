import styled from "styled-components"
import { useState } from "react"
import { useSelector } from "react-redux"
import { selectChannelId } from '../../../features/appSlice'
import { auth, db } from "../../../firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"

const ChatInput = ({ channelName, scrollToBottomRef }) => {
    const [user] = useAuthState(auth)
    const channelId = useSelector(selectChannelId)
    const [message, setMessage] = useState("")

    const sendMessage = async (e) => {
        e.preventDefault()

        if (!channelId || !message) return

        await addDoc(collection(db, "channels", channelId, "messages"), {
            message,
            timestamp: serverTimestamp(),
            user: {
                name: user.displayName,
                avatar: user.photoURL
            }
        })

        setMessage("")

        // Scroll to bottom after sending a message
        scrollToBottomRef.current.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <ChatInputContainer>
            <form>
                <input placeholder={`Send message to #${channelName ? channelName : '...'}`} value={message} onChange={(e) => setMessage(e.target.value)} />
                <button hidden type="submit" onClick={sendMessage}>Send</button>
            </form>
        </ChatInputContainer>
    )
}

const ChatInputContainer = styled.div`
    > form {
        position: relative;
        display: flex;
        justify-content: center;        
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        border-radius: 4px;
        outline: none;
        border: 1px solid #60606080;
        padding: 10px;
        width: 60%;
        font-size: 16px;

        :focus {
        border: 1px solid #606060;
            box-shadow: 0px 1px 3px 0px #60606050;
        }
    }
    
`

export default ChatInput