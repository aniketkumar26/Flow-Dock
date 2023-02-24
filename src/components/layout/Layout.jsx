import Header from "./header/Header"
import Sidebar from "./sidebar/Sidebar"
import Main from "./main/Main"
import styled from "styled-components"

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <AppBody>
                <Sidebar />
                <Main>
                    {children}
                </Main>
            </AppBody>
        </>
    )
}

const AppBody = styled.div`
    display: flex;
    height: calc(100vh - 70px);
`

export default Layout