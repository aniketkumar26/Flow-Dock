import styled from "styled-components"

const Main = ({ children }) => {
  return (
    <MainContainer>{children}</MainContainer>
  )
}

const MainContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: auto;
    margin-top: 70px;
    height: 100%;
  
  * {
    scrollbar-width: auto;
    scrollbar-color: #bdbdbd #ffffff;
  }

  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-track {
    background: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #bdbdbd;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
`

export default Main