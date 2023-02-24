import styled from "styled-components"
import StarBorderIcon from '@mui/icons-material/StarBorder'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

const ChatHeader = ({ channelName }) => {
    return (
        <ChatHeaderContainer>
            <ChatHeaderLeft>
                <h4>#{channelName}</h4>
                <StarBorderIcon />
            </ChatHeaderLeft>
            <ChatHeaderRight>
                <InfoOutlinedIcon />
                <p>Details</p>
            </ChatHeaderRight>
        </ChatHeaderContainer>
    )
}


const ChatHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #DDDDDD;
    height: 64px;
`

const ChatHeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        text-transform: lowercase;
    }

    > svg {
        cursor: pointer;
        margin-left: 16px;
        font-size: 18px;
    }
`

const ChatHeaderRight = styled.div`
    display: flex;
    align-items: center;

    > svg { 
        cursor: pointer;
        font-size: 18px;
    }

    > p {
        margin-left: 16px;
        font-size: 14px;
        cursor: pointer;
    }
`

export default ChatHeader