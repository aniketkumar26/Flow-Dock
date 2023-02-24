import HashLoader from "react-spinners/HashLoader"
import styled from "styled-components";

const Loading = ({ loading }) => {
    return (
        <LoadingContainer>
            <HashLoader color="#3f103f" loading={loading} size={70} />
            <h3>Please Wait</h3>
        </LoadingContainer>
    )
}

const LoadingContainer = styled.div`
    background: #f4f1f1;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h3 {
        font-size: 15px;
        letter-spacing: 0.35px;
        margin-top: 30px;
        color: #816781;
        font-weight: 500
    }
`

export default Loading