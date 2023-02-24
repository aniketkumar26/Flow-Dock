import styled from "styled-components"

const ChatMessageItem = ({ user, message, timestamp }) => {
    return (
        <ChatMessageItemContainer>
            {user?.avatar && <img src={user?.avatar} alt={user?.name} />}
            <MessageInfo>
                <h4>
                    {user?.name}
                    &nbsp;
                    <span>{new Date(timestamp?.toDate()).toLocaleString()}</span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </ChatMessageItemContainer>
    )
}

const ChatMessageItemContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    img {
        height: 36px;
        border-radius: 2px;
        margin-right: 8px;
    }
`

const MessageInfo = styled.div`
    > h4 {
        font-size: 15px;
        color:#1D1C1D;
       
        > span {
            font-size: 12px;
            font-weight: lighter;
            color: #616061;
            margin-left: 8px;
        } 
    }

    p {
        margin-top: 5px;
        font-size: 15px;
        color: #616061;
    }
`

export default ChatMessageItem